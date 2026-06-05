import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, projectType, message } = body;

    // Validate fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields in the request body." },
        { status: 400 }
      );
    }

    const subject = `[Website Inquiry] New Request from ${fullName}`;

    const plainText = `
============================================================
VERTEX RIDGE LIMITED - CLIENT INQUIRY
============================================================
Date: ${new Date().toISOString()}

CLIENT PROFILE:
- Name: ${fullName}
- Email: ${email}
- Phone: ${phone || "Not provided"}

PROJECT DETAILS:
- Type: ${projectType || "Not specified"}

MESSAGE:
${message}
============================================================
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Vertex Ridge Inquiry Brief</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f7f7f7; color: #1e293b; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #800000; }
    .header { padding: 30px; background-color: #1a1a1a; text-align: left; }
    .header h1 { color: #ffffff; margin: 0; font-size: 18px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; }
    .header span { color: #d4af37; } /* Gold accent */
    .content { padding: 40px; }
    .section-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: #800000; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 20px; margin-top: 30px; }
    .grid { width: 100%; border-collapse: collapse; }
    .grid td { padding: 8px 0; vertical-align: top; font-size: 14px; }
    .grid td.label { font-weight: bold; width: 140px; color: #475569; }
    .message-box { background-color: #f8fafc; border-left: 3px solid #800000; padding: 20px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 15px; white-space: pre-wrap; }
    .footer { background-color: #f8fafc; padding: 20px 40px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Vertex <span>Ridge</span></h1>
    </div>
    <div class="content">
      <div style="font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 5px;">New Website Inquiry</div>
      <div style="font-size: 12px; color: #64748b;">Submitted via the contact form on ${new Date().toLocaleDateString("en-GH", { dateStyle: "long" })}</div>

      <div class="section-title">Client Details</div>
      <table class="grid">
        <tr>
          <td class="label">Contact Name:</td>
          <td>${fullName}</td>
        </tr>
        <tr>
          <td class="label">Email Address:</td>
          <td><a href="mailto:${email}" style="color: #800000; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone Number:</td>
          <td>${phone || "Not provided"}</td>
        </tr>
      </table>

      <div class="section-title">Project Details</div>
      <table class="grid">
        <tr>
          <td class="label">Project Type:</td>
          <td><strong>${projectType || "Not specified"}</strong></td>
        </tr>
      </table>

      <div class="section-title">Message Details</div>
      <div class="message-box">${message}</div>
    </div>
    <div class="footer">
      This is an automated dispatch from the Vertex Ridge Limited website contact form.
    </div>
  </div>
</body>
</html>
    `.trim();

    // Check for SMTP config
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const fromEmail = process.env.SMTP_FROM || "no-reply@vertexridge.com";
    const toEmail = process.env.SMTP_TO || "info@vertexridge.com";

    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `"Vertex Ridge Web Portal" <${fromEmail}>`,
        to: toEmail,
        replyTo: email,
        subject: subject,
        text: plainText,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, message: "Email sent successfully." });
    } else {
      console.log("==========================================");
      console.log("SMTP Environment variables not configured.");
      console.log(`Simulating email dispatch to: ${toEmail}`);
      console.log(`Subject: ${subject}`);
      console.log("------------------------------------------");
      console.log(plainText);
      console.log("==========================================");

      return NextResponse.json({
        success: true,
        mocked: true,
        message: "SMTP configuration not active. Inquiry compiled and logged to console.",
      });
    }
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Failed to compile or submit contact inquiry.", details: errorMessage },
      { status: 500 }
    );
  }
}
