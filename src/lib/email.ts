import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail({
  name,
  company,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  await transporter.sendMail({
    from: `"XINFINITY HUB Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo: email,
    subject: `[Website Contact] ${subject}`,
    html: `
      <h2>New Website Contact</h2>

      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse">
        <tr>
          <td><strong>Name</strong></td>
          <td>${name}</td>
        </tr>

        <tr>
          <td><strong>Company</strong></td>
          <td>${company || "-"}</td>
        </tr>

        <tr>
          <td><strong>Email</strong></td>
          <td>${email}</td>
        </tr>

        <tr>
          <td><strong>Phone</strong></td>
          <td>${phone || "-"}</td>
        </tr>

        <tr>
          <td><strong>Subject</strong></td>
          <td>${subject}</td>
        </tr>

        <tr>
          <td><strong>Message</strong></td>
          <td>${message.replace(/\n/g, "<br/>")}</td>
        </tr>
      </table>
    `,
  });
}