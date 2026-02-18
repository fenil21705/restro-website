
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const supabase = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_ANON_KEY') ?? '',
            { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
        )

        const { type, payload } = await req.json();

        // In a real scenario, you would use a service like Resend, SendGrid, or nodemailer (if compatible)
        // Deno support for nodemailer is limited, so using a specific API is better.
        // Example with Resend (Free tier is good):
        // const resend = new Resend('re_123456789');

        // For now, we will just log it as a success simulation because we don't have an SMTP provider API key from the user.
        // If the user has an SMTP, they can use it here.

        console.log(`Sending email for type: ${type}`, payload);

        // Mock success
        return new Response(
            JSON.stringify({ message: "Email request received (Mock Mode)" }),
            { headers: { ...corsHeaders, "Content-Type": "application/json" } },
        )

    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        )
    }
})
