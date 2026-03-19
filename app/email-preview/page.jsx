import { buildEmailHtml, DEFAULT_BRAND, escapeHtml, nl2br, kvRow } from '@/app/lib/emailTemplate';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function EmailPreviewPage() {
  const brand = DEFAULT_BRAND;

  const sample = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+91 90012 90028',
    subject: 'Contact form preview',
    message: 'Hello VieCells,\n\nI want to know more about your treatments.\nThanks!',
  };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const logoUrl = `${siteUrl}/logo.png`;
  const footerLogoUrl = `${siteUrl}/footer-logo.png`;

  const html = buildEmailHtml({
    brand,
    title: 'New contact message',
    subtitle: 'Contact form submission',
    preheader: `New message from ${sample.name}`,
    siteUrl,
    logoUrl,
    footerLogoUrl,
    footerPhone: sample.phone,
    footerEmail: 'contact@viecells.com',
    footerAddress:
      '501, Kalp Business Center, Opp. Lavanya Mall, City Light, Surat 395007, Gujarat, India',
    socialLinks: [
      { label: 'Facebook', href: 'https://www.facebook.com/VieCells' },
      { label: 'WhatsApp', href: 'https://wa.me/919001290028' },
      { label: 'Instagram', href: 'https://www.instagram.com/viecellsindia/' },
      { label: 'Twitter', href: 'https://twitter.com/VieCells' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/viecells/' },
    ],
    bodyHtml: `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${brand.border};border-radius:12px;overflow:hidden;">
        ${kvRow({ brand, label: 'Name', value: sample.name })}
        ${kvRow({ brand, label: 'Email', value: sample.email })}
        ${kvRow({ brand, label: 'Phone', value: sample.phone })}
        ${kvRow({ brand, label: 'Subject', value: sample.subject })}
        <tr>
          <td style="padding:10px 12px;font-size:13px;line-height:18px;color:${brand.muted};width:160px;vertical-align:top;">Message</td>
          <td style="padding:10px 12px;font-size:13px;line-height:20px;color:${brand.text};font-weight:500;">${nl2br(
            sample.message
          )}</td>
        </tr>
      </table>
      <div style="margin-top:14px;font-size:12px;line-height:16px;color:${brand.muted};">
        Reply to the sender at <span style="color:${brand.text};font-weight:700;">${escapeHtml(
          sample.email
        )}</span>.
      </div>
    `,
    footerNote: 'Preview only (not sent).',
  });

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <h1 style={{ margin: 0, fontSize: 18 }}>Email template preview</h1>
        <span style={{ color: '#6B7280', fontSize: 12 }}>
          Edit <code>app/lib/emailTemplate.js</code> to update
        </span>
        <div style={{ marginLeft: 'auto' }}>
          <Link href="/" style={{ fontSize: 12 }}>
            Back to site
          </Link>
        </div>
      </div>

      <div
        style={{
          border: '1px solid #E5E7EB',
          borderRadius: 12,
          overflow: 'hidden',
          background: '#fff',
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

