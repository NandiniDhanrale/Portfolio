import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // 2. Local fallback if API Key is not set
    if (!apiKey) {
      console.log("=== CONTACT FORM SUBMISSION (LOCAL MOCK FALLBACK) ===");
      console.log(`From: ${name} <${email}>`);
      console.log(`Message: ${message}`);
      console.log("=====================================================");
      
      return NextResponse.json({
        success: true,
        message: "Message logged successfully (Mock Mode). Configure RESEND_API_KEY in production to send real emails!"
      });
    }

    // 3. Dispatch real email using Resend
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>",
      to: "nandinidhanrale@gmail.com", // Destination email
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #3B82F6;">New Message from Portfolio Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Server Error" }, { status: 500 });
  }
}
