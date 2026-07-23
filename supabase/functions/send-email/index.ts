import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "npm:@supabase/supabase-js@2"

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
    // verify_jwt=true : Supabase a déjà vérifié le JWT avant d'arriver ici
    const authHeader = req.headers.get('Authorization') ?? ''
    const jwt = authHeader.replace('Bearer ', '')

    // Service role pour bypasser RLS sur profiles
    const adminSupabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    const isServiceRole = jwt === serviceRoleKey

    if (!isServiceRole) {
      const { data: { user }, error: userError } = await adminSupabase.auth.getUser(jwt)
      if (userError || !user) {
        console.error('getUser error:', userError?.message)
        return new Response(JSON.stringify({ error: 'Utilisateur introuvable' }), {
          status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        })
      }

      const { data: profile } = await adminSupabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

      console.log('send-email: utilisateur autorisé')

      if (profile?.role !== 'super_admin') {
        return new Response(JSON.stringify({ error: 'Droits insuffisants' }), {
          status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        })
      }
    } else {
      console.log('Appel service role — autorisation directe')
    }

    const { to, subject, html } = await req.json()
    if (!to || !subject || !html) {
      return new Response(JSON.stringify({ error: 'Paramètres manquants' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const apiKey = Deno.env.get('MAILJET_API_KEY')
    const secretKey = Deno.env.get('MAILJET_SECRET_KEY')
    if (!apiKey || !secretKey) {
      return new Response(JSON.stringify({ error: 'Clés Mailjet manquantes' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const recipients = (Array.isArray(to) ? to : [to]).map((email: string) => ({ Email: email }))

    const mailjetResponse = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${apiKey}:${secretKey}`)}`,
      },
      body: JSON.stringify({
        Messages: [{
          From: { Email: 'azghal.les.heritiers@gmail.com', Name: 'Les Héritiers' },
          To: recipients,
          Subject: subject,
          HTMLPart: html,
        }]
      }),
    })

    const result = await mailjetResponse.json()
    console.log('Mailjet:', mailjetResponse.status, JSON.stringify(result).substring(0, 300))

    if (!mailjetResponse.ok) {
      return new Response(JSON.stringify({ error: result }), {
        status: mailjetResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Exception:', error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
