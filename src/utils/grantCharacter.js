// src/utils/grantCharacter.js
import { supabase } from '../config/supabase';

/**
 * Personnage auquel rattacher une carte personnelle acceptée.
 * La modale d'acceptation s'ouvre au niveau de l'App, souvent sans personnage
 * chargé : on se fie donc au personnage que le joueur a inscrit dans le cercle
 * du don, et seulement à défaut au personnage courant.
 */
export async function resolveGrantCharacterId(grant, userId, fallbackCharacterId = null) {
    if (grant?.cercle_id && userId) {
        const { data: membre } = await supabase
            .from('cercle_membres')
            .select('character_id')
            .eq('cercle_id', grant.cercle_id)
            .eq('user_id', userId)
            .maybeSingle();
        if (membre?.character_id) return membre.character_id;
    }
    return fallbackCharacterId || null;
}
