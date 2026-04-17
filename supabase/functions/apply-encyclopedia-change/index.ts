import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "npm:@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, dnt',
}

Deno.serve(async (req) => {
  // Gestion du CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json()
    const requestId = body.requestId
    const sealRequested = body.sealRequested
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SERVICE_ROLE_KEY') ?? ''
    )

    // 1. Récupération du ticket
    const { data: request, error: reqError } = await supabase
      .from('data_change_requests')
      .select('*')
      .eq('id', requestId)
      .single()

    if (reqError || !request) throw new Error("Ticket introuvable.")

    // 2. Extraction et nettoyage des données
    const { 
      _relations, 
      competencesPredilection, 
      competencesFutilesPredilection, 
      competencesUtiles, 
      ...mainData 
    } = request.new_data
    
    // ✨ LE FIX : On détecte s'il s'agit d'une Création ou d'une Modification
    const isInsert = !!mainData.id
    const targetId = mainData.id || request.record_id

    // 3. Mutation de la table principale
    if (Object.keys(mainData).length > 0) {
       if (isInsert) {
           // C'est une Création : On injecte toutes les colonnes (INSERT pur)
           const { error: dbError } = await supabase
             .from(request.table_name)
             .insert(mainData)
           if (dbError) throw dbError
       } else {
           // C'est une Édition : On met à jour uniquement les colonnes modifiées (UPDATE pur)
           const { error: dbError } = await supabase
             .from(request.table_name)
             .update(mainData)
             .eq('id', targetId)
           if (dbError) throw dbError
       }
    }
	
    // 4. Chirurgie Relationnelle (Le traducteur complet)
    if (_relations) {
       // --- Capacités ---
       if (_relations.capacites) {
         await supabase.from('fairy_type_capacites').delete().eq('fairy_type_id', targetId);
         if (_relations.capacites.length > 0) {
           const capPayload = _relations.capacites.map((c: any) => ({ fairy_type_id: targetId, capacite_id: c.id, capacite_type: c.type }));
           await supabase.from('fairy_type_capacites').insert(capPayload);
         }
       }
       
       // --- Pouvoirs ---
       if (_relations.pouvoirs && _relations.pouvoirs.removed) {
          await supabase.from('fairy_type_powers').delete().eq('fairy_type_id', targetId).in('power_id', _relations.pouvoirs.removed);
          if (_relations.pouvoirs.added && _relations.pouvoirs.added.length > 0) {
             const powPayload = _relations.pouvoirs.added.map((id: string) => ({ fairy_type_id: targetId, power_id: id }));
             await supabase.from('fairy_type_powers').insert(powPayload);
          }
       }
       
       // --- Atouts ---
       if (_relations.atouts && _relations.atouts.removed) {
          await supabase.from('fairy_type_assets').delete().eq('fairy_type_id', targetId).in('asset_id', _relations.atouts.removed);
          if (_relations.atouts.added && _relations.atouts.added.length > 0) {
             const assetPayload = _relations.atouts.added.map((id: string) => ({ fairy_type_id: targetId, asset_id: id }));
             await supabase.from('fairy_type_assets').insert(assetPayload);
          }
       }
       
       // ✨ NOUVEAU : Compétences Utiles
       if (_relations.competencesUtiles !== undefined) {
         await supabase.from('fairy_competences_predilection').delete().eq('fairy_type_id', targetId);
         const utilesList = typeof _relations.competencesUtiles === 'string' ? JSON.parse(_relations.competencesUtiles) : _relations.competencesUtiles;
         const validUtiles = utilesList.filter((c: any) => c.competence_id || c.nom);
         
         if (validUtiles.length > 0) {
            const utilesPayload = validUtiles.map((comp: any) => {
               let choiceOptions = null;
               if (comp.isSpecialiteChoix && comp.options?.length > 0) choiceOptions = comp.options;
               else if (comp.isOnlySpecialty) choiceOptions = ['PURE_SPEC']; // Le fameux drapeau secret !
               
               return {
                 fairy_type_id: targetId,
                 competence_id: comp.competence_id || null,
                 specialite: comp.specialite || null,
                 is_choice: !!comp.isChoix,
                 is_specialite_choice: !!comp.isSpecialiteChoix,
                 choice_options: choiceOptions
               };
            });
            await supabase.from('fairy_competences_predilection').insert(utilesPayload);
         }
       }

       // ✨ NOUVEAU : Compétences Futiles
       if (_relations.competencesFutiles !== undefined) {
         await supabase.from('fairy_competences_futiles_predilection').delete().eq('fairy_type_id', targetId);
         const futilesList = typeof _relations.competencesFutiles === 'string' ? JSON.parse(_relations.competencesFutiles) : _relations.competencesFutiles;
         const validFutiles = futilesList.filter((fut: any) => fut.competence_futile_id || fut.competence_name || fut.is_choice);
         
         if (validFutiles.length > 0) {
            const futilesPayload = validFutiles.map((fut: any) => ({
               fairy_type_id: targetId,
               competence_futile_id: fut.competence_futile_id || null,
               competence_name: fut.competence_name || null,
               is_choice: !!fut.is_choice,
               choice_options: fut.choice_options || null
            }));
            await supabase.from('fairy_competences_futiles_predilection').insert(futilesPayload);
         }
       }
       
       // ✨ NOUVEAU : Relations Inversées (Attacher un pouvoir/atout à une Fée)
       if (_relations.fairyIds !== undefined) {
          const isArray = Array.isArray(_relations.fairyIds);
          const removed = isArray ? [] : (_relations.fairyIds.removed || []);
          const added = isArray ? _relations.fairyIds : (_relations.fairyIds.added || []);
          
          if (request.table_name === 'fairy_capacites') {
             if (isArray) await supabase.from('fairy_type_capacites').delete().eq('capacite_id', targetId);
             else if (removed.length > 0) await supabase.from('fairy_type_capacites').delete().eq('capacite_id', targetId).in('fairy_type_id', removed);
             if (added.length > 0) {
                const payload = added.map((fId: string) => ({ fairy_type_id: fId, capacite_id: targetId, capacite_type: 'choix' }));
                await supabase.from('fairy_type_capacites').insert(payload);
             }
          } else if (request.table_name === 'fairy_powers') {
             if (isArray) await supabase.from('fairy_type_powers').delete().eq('power_id', targetId);
             else if (removed.length > 0) await supabase.from('fairy_type_powers').delete().eq('power_id', targetId).in('fairy_type_id', removed);
             if (added.length > 0) {
                const payload = added.map((fId: string) => ({ fairy_type_id: fId, power_id: targetId }));
                await supabase.from('fairy_type_powers').insert(payload);
             }
          } else if (request.table_name === 'fairy_assets') {
             if (isArray) await supabase.from('fairy_type_assets').delete().eq('asset_id', targetId);
             else if (removed.length > 0) await supabase.from('fairy_type_assets').delete().eq('asset_id', targetId).in('fairy_type_id', removed);
             if (added.length > 0) {
                const payload = added.map((fId: string) => ({ fairy_type_id: fId, asset_id: targetId }));
                await supabase.from('fairy_type_assets').insert(payload);
             }
          }
       }
    }

    // 5. Scellage si le Gardien l'a exigé
    if (sealRequested) {
        await supabase.from(request.table_name).update({ is_sealed: true }).eq('id', targetId)
    }

    // 6. Archivage final du ticket
    await supabase.from('data_change_requests')
        .update({ status: 'archived', approved_at: new Date().toISOString() })
        .eq('id', requestId)

    return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  } catch (error: any) {
    // ✨ LE FIX (Cheval de Troie) : On renvoie un status 200 pour endormir le client Supabase-js,
    // afin qu'il lise notre JSON contenant la vraie erreur au lieu de planter génériquement !
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 200, 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
    })
  }
})