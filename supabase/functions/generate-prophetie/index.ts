import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "npm:@supabase/supabase-js@2"
import Anthropic from "npm:@anthropic-ai/sdk"

const allowedOrigin = Deno.env.get('ALLOWED_ORIGIN') ?? '*'
const corsHeaders = {
  'Access-Control-Allow-Origin': allowedOrigin,
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Vary': 'Origin',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const authHeader = req.headers.get('Authorization') ?? ''
    const jwt = authHeader.replace('Bearer ', '')

    const adminSupabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data: { user }, error: userError } = await adminSupabase.auth.getUser(jwt)
    if (userError || !user) {
      return new Response(JSON.stringify({ error: 'Non authentifié' }), {
        status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const { data: profile } = await adminSupabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    const { characterId } = await req.json()
    if (!characterId) {
      return new Response(JSON.stringify({ error: 'characterId manquant' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const { data: character, error: charError } = await adminSupabase
      .from('characters')
      .select('id, user_id, nom, nom_feerique, sexe, type_fee, anciennete, profils, competences_libres, atouts, statut, prophetie')
      .eq('id', characterId)
      .single()

    if (charError || !character) {
      return new Response(JSON.stringify({ error: 'Personnage introuvable' }), {
        status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const isOwner = character.user_id === user.id
    const isAdmin = ['gardien', 'super_admin'].includes(profile?.role ?? '')
    if (!isOwner && !isAdmin) {
      return new Response(JSON.stringify({ error: 'Accès refusé' }), {
        status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Déjà générée → retourner sans rappeler Haiku
    if (character.prophetie) {
      return new Response(JSON.stringify({ prophetie: character.prophetie }), {
        status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    if (character.statut !== 'scelle' && character.statut !== 'scellé') {
      return new Response(JSON.stringify({ error: 'Le personnage doit être scellé' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const rangs = (character.competences_libres as Record<string, Record<string, number>>)?.rangs ?? {}
    const topComps = Object.entries(rangs)
      .filter(([, v]) => v > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([k, v]) => `${k} (rang ${v})`)
      .join(', ')

    const atoutsNoms = ((character.atouts as string[]) || []).slice(0, 4).join(', ')
    const profils = (character.profils as Record<string, Record<string, string>>) || {}
    const anciennete = typeof character.anciennete === 'object' && character.anciennete !== null
      ? `${(character.anciennete as Record<string, number>).min}–${(character.anciennete as Record<string, number>).max} ans`
      : String(character.anciennete || 'ancienne')

    const prompt = `Tu es l'Oracle des Brumes de Paris, Belle Époque (1899). Tu génères le fragment d'un rêve cryptique que ${character.nom} a vécu lors de son Scellage — le moment solennel où sa nature féerique s'est figée pour toujours.

Ce rêve est raconté par le personnage en monologue intérieur, à la première personne, au présent. Il doit être :
- Onirique et sibyllin, jamais explicite sur l'avenir
- En français Belle Époque soutenu, légèrement poétique
- Composé de 5 à 6 phrases courtes, séparées par des points de suspension (…)
- Ancré dans la nature féerique, le profil et les atouts du personnage

Nature : ${character.type_fee}, ${anciennete} d'existence
Nom féerique : ${character.nom_feerique || 'inconnu'}
Profil majeur : ${profils.majeur?.nom ?? '—'} (trait : ${profils.majeur?.trait ?? '—'})
Profil mineur : ${profils.mineur?.nom ?? '—'}
Compétences principales : ${topComps || 'aucune'}
Atouts : ${atoutsNoms || 'aucun'}

Génère uniquement le texte du rêve, sans titre, sans guillemets, sans commentaire.`

    const anthropic = new Anthropic({ apiKey: Deno.env.get('ANTHROPIC_API_KEY') ?? '' })
    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      messages: [{ role: 'user', content: prompt }]
    })

    const prophetie = message.content[0].type === 'text' ? message.content[0].text.trim() : ''
    if (!prophetie) {
      return new Response(JSON.stringify({ error: 'Génération échouée' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    await adminSupabase
      .from('characters')
      .update({ prophetie })
      .eq('id', characterId)

    return new Response(JSON.stringify({ prophetie }), {
      status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (e) {
    console.error('generate-prophetie error:', e)
    return new Response(JSON.stringify({ error: 'Erreur interne' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
