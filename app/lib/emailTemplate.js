export const DEFAULT_BRAND = {
  name: 'VieCells',
  color: '#0F766E',
  lightBg: '#F3F5EC',
  border: '#E5E7EB',
  text: '#111827',
  muted: '#6B7280',
  footerText: '#38531C',
  footerMuted: '#647252',
};

export const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export const nl2br = (str = '') => escapeHtml(str).replace(/\n/g, '<br/>');

export const kvRow = ({ brand, label, value, labelWidth = 160, isLast = false }) => `
  <tr>
    <td style="padding:10px 12px;border-bottom:${isLast ? 0 : 1}px solid ${brand.border};font-size:13px;line-height:18px;color:${brand.muted};width:${labelWidth}px;vertical-align:top;">
      ${escapeHtml(label)}
    </td>
    <td style="padding:10px 12px;border-bottom:${isLast ? 0 : 1}px solid ${brand.border};font-size:13px;line-height:20px;color:${brand.text};font-weight:600;">
      ${escapeHtml(value)}
    </td>
  </tr>`;

export function buildEmailHtml({
  brand = DEFAULT_BRAND,
  title,
  subtitle,
  preheader,
  bodyHtml,
  footerNote,
  siteUrl,
  logoUrl,
  logoAlt,
  footerLogoUrl,
  footerPhone,
  footerEmail,
  footerAddress,
  socialLinks,
}) {
  const safeTitle = escapeHtml(title);
  const safeSubtitle = escapeHtml(subtitle || '');
  const safePreheader = escapeHtml(preheader || '');
  const safeFooterNote = escapeHtml(footerNote || 'If you did not expect this email, you can ignore it.');
  const safeSiteUrl = siteUrl ? escapeHtml(siteUrl) : '';
  const safeLogoAlt = escapeHtml(logoAlt || brand.name);
  const safeFooterAddress = escapeHtml(footerAddress || '');

  const headerLeftHtml = logoUrl
    ? `<a href="${safeSiteUrl || '#'}" style="display:inline-block;text-decoration:none;">
         <img src="${escapeHtml(logoUrl)}" alt="${safeLogoAlt}" height="36" style="display:block;border:0;outline:none;text-decoration:none;height:36px;max-width:180px;object-fit:contain;" />
       </a>`
    : `<div style="font-size:18px;line-height:22px;font-weight:700;color:#ffffff;">${escapeHtml(brand.name)}</div>`;

  const socialHtml =
    Array.isArray(socialLinks) && socialLinks.length
      ? `<div style="margin-top:10px;">
           ${socialLinks
        .filter((s) => s?.href && s?.label)
        .map(
          (s) =>
            `<a href="${escapeHtml(s.href)}" style="display:inline-block;margin-right:10px;font-size:12px;line-height:16px;color:${brand.footerText};text-decoration:underline;">${escapeHtml(s.label)}</a>`
        )
        .join('')}
         </div>`
      : '';

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${safeTitle}</title>
  </head>
  <body style="margin:0;padding:0;background:${brand.lightBg};font-family:Arial,Helvetica,sans-serif;color:${brand.text};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${safePreheader}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.lightBg};padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border:1px solid ${brand.border};border-radius:14px;overflow:hidden;">
            <tr>
              <td style="background:#fff;padding:18px 22px; text-align: center;  border-bottom: 1px solid rgba(151, 152, 50, 0.3);">
                ${headerLeftHtml}
                <div style="font-size:12px;line-height:16px ;margin-top:4px;">${safeSubtitle}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:22px;">
                <div style="font-size:18px;line-height:24px;font-weight:700;margin:0 0 10px 0;">${safeTitle}</div>
                ${bodyHtml || ''}
                <div style="margin-top:20px;padding-top:14px;border-top:1px solid ${brand.border};font-size:12px;line-height:16px;color:${brand.muted};">
                  ${safeFooterNote}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;"> 
            <tr>
            <td>
            <td style="background-color:#F7F9EF;padding:28px 40px;text-align:center; border-radius: 10px; color: #647252;">
            
              <p style="margin:0 0 8px; font-size:12px;font-family:Arial,Helvetica,sans-serif;">
              <a href="https://www.viecells.com" style="color:rgba(53, 81, 24, 0.6);text-decoration:none;">viecells.com</a> &nbsp;|&nbsp;
              <a href="tel:${escapeHtml(String(footerPhone).replace(/[^\d+]/g, ''))}" style="color:rgba(53, 81, 24, 0.6);text-decoration:none;">${escapeHtml(footerPhone)}</a> &nbsp;|&nbsp;
              <a href="mailto:mailto:${escapeHtml(footerEmail)}" style="color:rgba(53, 81, 24, 0.6);text-decoration:none;">${escapeHtml(footerEmail)}</a>
              </p>
              <p style="margin:0;color:rgba(53, 81, 24, 0.6);font-size:11px;font-family:Arial,Helvetica,sans-serif;"> VieCell Institute of Regenerative Medicine © ${new Date().getFullYear()}. All Rights Reserved.</p>
              </td>
              </td>
          </tr>
          </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

