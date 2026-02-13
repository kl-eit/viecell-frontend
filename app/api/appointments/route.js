import nodemailer from "nodemailer";

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
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
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

    const adminMailOptions = {
      from: EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: `New Appointment from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Agreed to Terms:</strong> ${agreeToTerms ? "Yes" : "No"}</p>
        <p><strong>Symptoms:</strong><br>${symptoms.replace(/\n/g, "<br>")}</p>
      `,
    };

    const userMailOptions = {
      from: EMAIL_USER,
      to: email,
      subject: "Appointment Request Received",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for requesting an appointment. We received your request.</p>
        <p><strong>Details you submitted:</strong></p>
        <p>Phone: ${phone}<br>Country: ${country}<br>Symptoms:<br>${symptoms.replace(/\n/g, "<br>")}</p>
      `,
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
