import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "npm:@supabase/supabase-js@2"
import { GoogleGenAI } from "npm:@google/genai"

const allowedOrigin = Deno.env.get('ALLOWED_ORIGIN') ?? '*'
const corsHeaders = {
  'Access-Control-Allow-Origin': allowedOrigin,
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform',
  'Vary': 'Origin',
}

const MODEL = 'gemini-2.5-flash-lite'

const PROMPTS_LANGAGE: Record<string, string> = {
  bourgeois:
    "Tu es un traducteur expert pour le JDR 'Les Héritiers'. Réécris la phrase de l'utilisateur dans le jargon bourgeois, snob, précieux et méprisant des salons parisiens de 1899 (la 'langue verte des salons'). Utilise des anglicismes chics (smart, shocking, rastaquouère), des métaphores mondaines et un ton condescendant. Renvie UNIQUEMENT la phrase traduite.",

  apache:
    "Tu es un traducteur pour le JDR 'Les Héritiers'. Réécris la phrase dans l'argot des Apaches, des voyous et du milieu interlope des barrières de Paris en 1899. Utilise la langue verte des truands (surin pour couteau, piaste/thune pour argent, creuse pour estomac, amand de cœur). Le ton est menaçant, sec, argotique et féroce. Renvie UNIQUEMENT la phrase traduite.",

  ouvrier:
    "Tu es un traducteur pour le JDR 'Les Héritiers'. Réécris la phrase dans la langue populaire, gouailleuse et frondeuse des ouvriers et des titi parisiens des faubourgs en 1899. C'est le parler de Belleville ou de Ménilmontant : direct, imagé, un peu rouspéteur mais chaleureux, utilisant le vocabulaire du travail et de la rue (bosser, la thune, le loufoque, pinter un verre). Renvie UNIQUEMENT la phrase traduite.",

  louchebem:
    "Tu es un traducteur expert pour le JDR 'Les Héritiers'. Réécris la phrase dans le véritable LOUCHEBEM (l'argot secret des bouchers des abattoirs de la Villette et des Halles en 1899). Applique strictement la règle : la consonne initiale est remplacée par un 'L', renvoyée à la fin du mot, avec un suffixe comme -em, -oque, -ic, -uche (ex: boucher -> louchebem, fou -> loufoque, gamin -> laminic, patron -> latronem, merci -> lercime, femme -> lamfe, gigot -> ligotic). Reste lisible pour le MJ mais très typé. Renvie UNIQUEMENT la phrase traduite.",
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { texte, style } = await req.json()

    if (!texte || typeof texte !== 'string' || !texte.trim()) {
      return new Response(JSON.stringify({ error: 'Texte manquant' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const instructionSysteme = PROMPTS_LANGAGE[style] || PROMPTS_LANGAGE.bourgeois

    const apiKey = Deno.env.get('GEMINI_API_KEY')
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Clé Gemini manquante' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const ai = new GoogleGenAI({ apiKey })
    const response = await ai.models.generateContent({
      model: MODEL,
      config: {
        systemInstruction: instructionSysteme,
        temperature: 0.7,
        maxOutputTokens: 150,
      },
      contents: texte,
    })

    const traduction = response.text.trim()

    // Journalisation de la consommation — best-effort, ne doit jamais faire
    // échouer la traduction si l'insertion échoue.
    try {
      const usage = response.usageMetadata || {}
      const promptTokens = usage.promptTokenCount ?? 0
      const completionTokens = usage.candidatesTokenCount ?? 0
      const totalTokens = usage.totalTokenCount ?? (promptTokens + completionTokens)

      const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
      const anonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
      const serviceKey = Deno.env.get('SERVICE_ROLE_KEY') ?? Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

      let userId: string | null = null
      const authHeader = req.headers.get('Authorization') ?? ''
      const authRes = await fetch(`${supabaseUrl}/auth/v1/user`, {
        headers: { 'Authorization': authHeader, 'apikey': anonKey }
      })
      const authData = await authRes.json()
      if (authRes.ok && authData?.id) userId = authData.id

      if (serviceKey) {
        const admin = createClient(supabaseUrl, serviceKey)
        await admin.from('llm_usage_log').insert({
          call_type: 'translate-argot',
          model: MODEL,
          prompt_tokens: promptTokens,
          completion_tokens: completionTokens,
          total_tokens: totalTokens,
          user_id: userId,
        })
      }
    } catch (logError) {
      console.error('Erreur journalisation llm_usage_log:', logError)
    }

    return new Response(JSON.stringify({ traduction }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    // Le SDK @google/genai encode l'erreur Gemini en JSON dans error.message —
    // on la déchiffre pour distinguer un vrai quota dépassé (429) d'une autre panne.
    let quotaExceeded = false
    try {
      const parsed = JSON.parse(error.message)
      quotaExceeded = parsed?.error?.status === 'RESOURCE_EXHAUSTED' || parsed?.error?.code === 429
    } catch (_parseError) {
      // error.message n'est pas du JSON exploitable, on retombe sur le message générique
    }

    if (quotaExceeded) {
      return new Response(JSON.stringify({
        error: "Trop de traductions en même temps — le quota du service est momentanément dépassé. Réessaie dans quelques secondes.",
        code: 'QUOTA_EXCEEDED',
      }), {
        status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
