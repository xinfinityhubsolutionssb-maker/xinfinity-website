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
  service,
  subject,
  message,
}: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  subject: string;
  message: string;
}) {
  await transporter.sendMail({
    from: `"XINFINITY HUB Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo: email,
    subject: `[Website Enquiry] ${subject}`,
    html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>

<body style="margin:0;padding:30px;background:#f5f7fb;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">

<table width="700" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

<tr>
<td style="background:#111827;padding:28px;text-align:center;">
<h1 style="margin:0;color:#ffffff;font-size:26px;">
XINFINITY HUB SOLUTIONS SDN. BHD.
</h1>

<p style="margin:8px 0 0;color:#d1d5db;">
New Website Enquiry
</p>
</td>
</tr>

<tr>
<td style="padding:30px;">

<table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">

<tr>
<td width="180" style="font-weight:bold;background:#f8fafc;">Full Name</td>
<td>${name}</td>
</tr>

<tr>
<td style="font-weight:bold;background:#f8fafc;">Company</td>
<td>${company || "-"}</td>
</tr>

<tr>
<td style="font-weight:bold;background:#f8fafc;">Email</td>
<td>${email}</td>
</tr>

<tr>
<td style="font-weight:bold;background:#f8fafc;">Phone</td>
<td>${phone || "-"}</td>
</tr>

<tr>
<td style="font-weight:bold;background:#f8fafc;">Service Required</td>
<td>${service}</td>
</tr>

<tr>
<td style="font-weight:bold;background:#f8fafc;">Subject</td>
<td>${subject}</td>
</tr>

<tr>
<td style="font-weight:bold;background:#f8fafc;vertical-align:top;">
Message
</td>
<td>
${message.replace(/\n/g, "<br/>")}
</td>
</tr>

</table>

</td>
</tr>

<tr>
<td style="padding:20px;background:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;color:#6b7280;font-size:13px;">
This enquiry was submitted from the
<strong>XINFINITY HUB SOLUTIONS SDN. BHD.</strong>
website contact form.
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,
  });
}