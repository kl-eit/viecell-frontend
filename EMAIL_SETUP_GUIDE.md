# Email Configuration Guide for VieCells

## Setup Instructions

### 1. Install Dependencies
Run the following command to install nodemailer:
```bash
npm install nodemailer
```

### 2. Configure Environment Variables
Create a `.env.local` file in the project root with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@viecells.com
```

### 3. Gmail Setup (If using Gmail)

#### Step 1: Enable 2-Step Verification
- Go to [Google Account](https://myaccount.google.com/)
- Click "Security" in the left sidebar
- Enable "2-Step Verification"

#### Step 2: Generate App Password
- After enabling 2-Step Verification, go back to Security settings
- Find "App passwords" (it appears after 2-Step is enabled)
- Select "Mail" and "Windows Computer" (or your device)
- Google will generate a 16-character password
- Copy this password and use it as `EMAIL_PASSWORD`

#### Step 3: Set Email Variables
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  (16-character app password)
ADMIN_EMAIL=admin@viecells.com
```

### 4. Using Other Email Services

#### Gmail (Recommended for development)
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

#### SendGrid
Modify `route.js`:
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
```

#### Outlook/Office 365
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
```

## How It Works

1. **User fills the contact form** in `GetInTouchForm.jsx`
2. **Form submits to** `/api/contact` endpoint
3. **API sends two emails:**
   - **To Admin**: Full contact details for support team
   - **To User**: Confirmation email that their message was received

## Testing the Email Integration

1. Install dependencies: `npm install`
2. Create `.env.local` with your email credentials
3. Run development server: `npm run dev`
4. Fill out the contact form at `/contact-us`
5. Check both admin email and user email for receipt

## Troubleshooting

### "Invalid login" Error
- Verify EMAIL_USER and EMAIL_PASSWORD are correct
- For Gmail, ensure you're using an **App Password**, not your regular password
- Verify 2-Step Verification is enabled

### "ENOTFOUND" Error
- Check internet connection
- Verify SMTP server details
- Check firewall/proxy settings

### Emails not being received
- Check spam folder
- Verify ADMIN_EMAIL is correct
- Check email service logs

## Security Notes

- Never commit `.env.local` to version control
- Use app-specific passwords instead of main account passwords
- Rotate passwords regularly
- Consider using environment variables in deployment platform
