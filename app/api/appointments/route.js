import nodemailer from "nodemailer";
import { buildEmailHtml, DEFAULT_BRAND, escapeHtml, nl2br, kvRow } from "@/app/lib/emailTemplate";

export async function POST(request) {
  try {
    let formData;
    try {
      formData = await request.json();
      console.log("Request JSON:", formData);
    } catch (err) {
      console.error("Failed to parse JSON:", err);
      return new Response(
        JSON.stringify({ error: "Invalid JSON" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { name, email, phone, country, symptoms, agreeToTerms } = formData;

    // Validate required fields
    if (!name || !email || !phone || !country || !symptoms) {
      console.warn("Validation failed:", formData);
      return new Response(
        JSON.stringify({ error: "All required fields must be provided" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD, ADMIN_EMAIL } = process.env;
    if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASSWORD || !ADMIN_EMAIL) {
      console.error("Missing environment variables:", {
        EMAIL_HOST,
        EMAIL_PORT,
        EMAIL_USER,
        EMAIL_PASSWORD,
        ADMIN_EMAIL,
      });
      return new Response(
        JSON.stringify({ error: "Server email configuration missing" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: Number(EMAIL_PORT) === 465,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
      ...(Number(EMAIL_PORT) === 587 ? { requireTLS: true } : {}),
    });

    try {
      await transporter.verify();
      console.log("SMTP transporter verified ✅");
    } catch (err) {
      console.error("SMTP verification failed ❌", err);
      return new Response(
        JSON.stringify({ error: "SMTP verification failed", details: err.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const brand = DEFAULT_BRAND;
    const safeMessageHtml = nl2br(symptoms);
    const preheader = `New appointment request from ${name}`;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://viecells.com';
    const footerPhone =
      process.env.NEXT_PUBLIC_PHONE_NUMBER_FORMATTED ||
      process.env.NEXT_PUBLIC_PHONE_NUMBER ||
      '+91 90012 90028';
    const footerEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || ADMIN_EMAIL || EMAIL_USER;
    const footerAddress =
      process.env.NEXT_PUBLIC_SITE_ADDRESS ||
      '501, Kalp Business Center, Opp. Lavanya Mall, City Light, Surat 395007, Gujarat, India';
    const logoUrl = `${siteUrl}/logo.png`;
    const footerLogoUrl = `${siteUrl}/footer-logo.png`;
    const socialLinks = [
      { label: 'Facebook', href: 'https://www.facebook.com/VieCells' },
      { label: 'WhatsApp', href: 'https://wa.me/919001290028' },
      { label: 'Instagram', href: 'https://www.instagram.com/viecellsindia/' },
      { label: 'Twitter', href: 'https://twitter.com/VieCells' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/viecells/' },
    ];

    const adminMailOptions = {
      from: EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: `New Appointment from ${name}`,
      text:
        `New Appointment Request\n\n` +
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCountry: ${country}\nAgreed to Terms: ${agreeToTerms ? "Yes" : "No"}\n\n` +
        `Message:\n${symptoms}\n`,
      html: buildEmailHtml({
        brand,
        title: "New appointment request",
        subtitle: "Appointment booking form",
        preheader,
        siteUrl,
        logoUrl,
        footerLogoUrl,
        footerPhone,
        footerEmail,
        footerAddress,
        socialLinks,
        bodyHtml: `
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${brand.border};border-radius:12px;overflow:hidden;">
            ${kvRow({ brand, label: "Name", value: name, labelWidth: 180 })}
            ${kvRow({ brand, label: "Email", value: email, labelWidth: 180 })}
            ${kvRow({ brand, label: "Phone", value: phone, labelWidth: 180 })}
            ${kvRow({ brand, label: "Country", value: country, labelWidth: 180 })}
            ${kvRow({ brand, label: "Agreed to Terms", value: agreeToTerms ? "Yes" : "No", labelWidth: 180 })}
            <tr>
              <td style="padding:10px 12px;font-size:13px;line-height:18px;color:${brand.muted};width:180px;vertical-align:top;border-bottom:0;">Message</td>
              <td style="padding:10px 12px;font-size:13px;line-height:20px;color:${brand.text};font-weight:500;border-bottom:0;">${safeMessageHtml}</td>
            </tr>
          </table>
          <div style="margin-top:14px;font-size:12px;line-height:16px;color:${brand.muted};">
            Reply to the patient at <span style="color:${brand.text};font-weight:700;">${escapeHtml(email)}</span>.
          </div>
        `,
        footerNote: "This email was generated from your website appointment form.",
      }),
    };

    const userMailOptions = {
      from: EMAIL_USER,
      to: email,
      subject: "Appointment Request Received",
      text:
        `Hi ${name},\n\n` +
        `Thanks for requesting an appointment with VieCells. We’ve received your request and will contact you soon.\n\n` +
        `Phone: ${phone}\nCountry: ${country}\n\nMessage:\n${symptoms}\n\n` +
        `— VieCells Team\n`,
      html: buildEmailHtml({
        brand,
        title: "Appointment request received",
        subtitle: "Thanks for your request",
        preheader,
        siteUrl,
        logoUrl,
        footerLogoUrl,
        footerPhone,
        footerEmail,
        footerAddress,
        socialLinks,
        bodyHtml: `
          <div style="font-size:13px;line-height:20px;color:${brand.text};">
            Hi <span style="font-weight:700;">${escapeHtml(name)}</span>,<br/><br/>
            Thanks for requesting an appointment with <span style="font-weight:700;">${brand.name}</span>. We’ve received your details and will contact you shortly.
          </div>
          <div style="margin-top:16px;border:1px solid ${brand.border};border-radius:12px;padding:14px;background:#ffffff;">
            <div style="font-size:12px;line-height:16px;color:${brand.muted};margin-bottom:6px;">Your submission</div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:6px 0;font-size:13px;color:${brand.muted};width:120px;">Phone</td>
                <td style="padding:6px 0;font-size:13px;color:${brand.text};font-weight:700;">${escapeHtml(phone)}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;font-size:13px;color:${brand.muted};width:120px;">Country</td>
                <td style="padding:6px 0;font-size:13px;color:${brand.text};font-weight:700;">${escapeHtml(country)}</td>
              </tr>
            </table>
            <div style="margin-top:10px;font-size:12px;line-height:16px;color:${brand.muted};">Message</div>
            <div style="margin-top:6px;font-size:13px;line-height:20px;color:${brand.text};">${safeMessageHtml}</div>
          </div>
          <div style="margin-top:16px;font-size:13px;line-height:20px;color:${brand.text};">
            Best regards,<br/>
            <span style="font-weight:700;">VieCells Team</span>
          </div>
        `,
        footerNote: "If you need to update details, reply to this email.",
      }),
    };

    let infoAdmin, infoUser;
    try {
      infoAdmin = await transporter.sendMail(adminMailOptions);
      infoUser = await transporter.sendMail(userMailOptions);
      console.log("Admin email preview URL:", nodemailer.getTestMessageUrl(infoAdmin));
      console.log("User email preview URL:", nodemailer.getTestMessageUrl(infoUser));
    } catch (err) {
      console.error("Error sending emails:", err);
      return new Response(
        JSON.stringify({ error: "Failed to send emails", details: err.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Appointment request sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Unexpected server error", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
