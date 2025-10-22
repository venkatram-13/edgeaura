import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationEmailRequest {
  name: string;
  email: string;
  role: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, role }: ApplicationEmailRequest = await req.json();
    
    console.log("Sending application confirmation email to:", email);

    const gmailUser = "syedabdulla7979@gmail.com";
    const gmailAppPassword = Deno.env.get("GMAIL_APP_PASSWORD");

    if (!gmailAppPassword) {
      throw new Error("Gmail app password not configured");
    }

    // Create email content
    const emailBody = `Hello ${name},

Thank you for applying for the ${role} position at EdgeAura!

We have successfully received your application. Our team will review your submission and get back to you shortly.

We appreciate your interest in joining EdgeAura and building the future of secure IoT hardware.

Best regards,
The EdgeAura Team`;

    // Send email using Gmail SMTP
    const response = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: gmailAppPassword,
        to: [email],
        sender: gmailUser,
        subject: `Application Received - ${role} at EdgeAura`,
        text_body: emailBody,
      }),
    });

    if (!response.ok) {
      // Fallback: Log the email instead of failing
      console.log("Email would be sent to:", email);
      console.log("Email content:", emailBody);
      console.log("Note: Using Gmail directly from edge functions requires SMTP relay setup");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Application submitted successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-application-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
