import nodemailer from 'nodemailer';
import { buildEmailHtml, DEFAULT_BRAND, escapeHtml, nl2br, kvRow } from '@/app/lib/emailTemplate';
export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !phone || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD, ADMIN_EMAIL } = process.env;
    if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASSWORD || !ADMIN_EMAIL) {
      return new Response(
        JSON.stringify({ error: 'Server email configuration missing' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const port = Number(EMAIL_PORT);
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port,
      secure: port === 465, // 465 = implicit TLS, 587 = STARTTLS
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
      ...(port === 587 ? { requireTLS: true } : {}),
    });

    await transporter.verify();

    const brand = DEFAULT_BRAND;
    const preheader = `New message from ${name}`;
    const safeMessageHtml = nl2br(message);
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

    // Email to admin
    const adminMailOptions = {
      from: EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      text:
        `New Contact Form Submission\n\n` +
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\n` +
        `Message:\n${message}\n`,
      html: buildEmailHtml({
        brand,
        title: 'New contact message',
        subtitle: 'Contact form submission',
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
            ${kvRow({ brand, label: 'Name', value: name })}
            ${kvRow({ brand, label: 'Email', value: email })}
            ${kvRow({ brand, label: 'Phone', value: phone })}
            ${kvRow({ brand, label: 'Subject', value: subject })}
            <tr>
              <td style="padding:10px 12px;font-size:13px;line-height:18px;color:${brand.muted};width:160px;vertical-align:top;">Message</td>
              <td style="padding:10px 12px;font-size:13px;line-height:20px;color:${brand.text};font-weight:500;">${safeMessageHtml}</td>
            </tr>
          </table>
          <div style="margin-top:14px;font-size:12px;line-height:16px;color:${brand.muted};">
            Reply to the sender at <span style="color:${brand.text};font-weight:700;">${escapeHtml(email)}</span>.
          </div>
        `,
        footerNote: 'This email was generated from your website contact form.',
      }),
    };

    // Confirmation email to user
    const userMailOptions = {
      from: EMAIL_USER,
      to: email,
      subject: 'We received your message - VieCells',
      text:
        `Hi ${name},\n\n` +
        `Thanks for contacting VieCells. We received your message and will get back to you soon.\n\n` +
        `Subject: ${subject}\n\n` +
        `Message:\n${message}\n\n` +
        `— VieCells Team\n`,
      html: buildEmailHtml({
        brand,
        title: 'We received your message',
        subtitle: 'Thanks for reaching out',
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
            Thanks for contacting <span style="font-weight:700;">${brand.name}</span>. We’ve received your message and our team will reply as soon as possible.
          </div>
          <div style="margin-top:16px;border:1px solid ${brand.border};border-radius:12px;padding:14px;background:#ffffff;">
            <div style="font-size:12px;line-height:16px;color:${brand.muted};margin-bottom:6px;">Your submission</div>
            <div style="font-size:13px;line-height:18px;color:${brand.text};font-weight:700;">${escapeHtml(subject)}</div>
            <div style="margin-top:10px;font-size:13px;line-height:20px;color:${brand.text};">${safeMessageHtml}</div>
          </div>
          <div style="margin-top:16px;font-size:13px;line-height:20px;color:${brand.text};">
            Best regards,<br/>
            <span style="font-weight:700;">VieCells Team</span>
          </div>
        `,
        footerNote: 'Please do not share sensitive information via this form.',
      }),
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully!' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send message',
        details: error.message 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
