"use server"

import { Form, FormSchema } from "../types";
import { createTransporter } from "@/features/contact/email/transporter";

export async function sendEmail(input: Form) {

    const result = FormSchema.safeParse(input);

    if (!result.success) {
        return { success: false, error: "Datos inválidos en el formulario." };
    }

    const data = result.data;

    try {
        const transporter = createTransporter();
        await transporter.verify();

        const html = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Nueva solicitud de demo</title>
            </head>
            <body style="margin:0;padding:0;background-color:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 0;">
                <tr>
                <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
                    <tr>
                        <td style="background:linear-gradient(135deg,#1e40af 0%,#2563eb 60%,#3b82f6 100%);border-radius:16px 16px 0 0;padding:40px 48px;text-align:center;">
                        <p style="margin:0 0 8px 0;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#93c5fd;">Nueva solicitud</p>
                        <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;">Demo personalizada</h1>
                        <p style="margin:12px 0 0;font-size:14px;color:#bfdbfe;">Alguien quiere conocer Savvium</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background:#ffffff;padding:40px 48px;">
                        <p style="margin:0 0 28px;font-size:15px;color:#6b7280;line-height:1.6;">Se ha recibido una nueva solicitud de demo.</p>
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                            <tr>
                            <td style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px;">
                                <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#94a3b8;">Nombre</p>
                                <p style="margin:0;font-size:16px;font-weight:600;color:#0f172a;">${data.name}</p>
                            </td>
                            </tr>
                        </table>
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                            <tr>
                            <td style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px;">
                                <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#94a3b8;">Empresa</p>
                                <p style="margin:0;font-size:16px;font-weight:600;color:#0f172a;">${data.company}</p>
                            </td>
                            </tr>
                        </table>
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                            <tr>
                            <td width="48%" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px;">
                                <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#94a3b8;">Email</p>
                                <p style="margin:0;font-size:15px;font-weight:600;color:#2563eb;">${data.email}</p>
                            </td>
                            <td width="4%"></td>
                            <td width="48%" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px;">
                                <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#94a3b8;">Teléfono</p>
                                <p style="margin:0;font-size:15px;font-weight:600;color:#0f172a;">${data.phone}</p>
                            </td>
                            </tr>
                        </table>
                        <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                            <td align="center">
                                <a href="mailto:${data.email}" style="display:inline-block;background:linear-gradient(135deg,#1e40af,#2563eb);color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:14px 36px;border-radius:12px;">
                                Responder a ${data.name}
                                </a>
                            </td>
                            </tr>
                        </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="background:#f8fafc;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 16px 16px;padding:24px 48px;text-align:center;">
                        <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#1e40af;">Savvium</p>
                        <p style="margin:0;font-size:12px;color:#94a3b8;">Mensaje generado automáticamente · ${new Date().toLocaleDateString("es-MX", { day: "2-digit", month: "long", year: "numeric" })}</p>
                        </td>
                    </tr>
                    </table>
                </td>
                </tr>
            </table>
            </body>
            </html>
        `;

        await transporter.sendMail({
            from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
            to: process.env.SMTP_TO_EMAIL,
            subject: `Nueva solicitud de demo — ${data.name} (${data.company})`,
            text: `Nombre: ${data.name}\nEmpresa: ${data.company}\nEmail: ${data.email}\nTeléfono: ${data.phone}`,
            html,
            replyTo: data.email,
        });

        return { success: "Correo enviado correctamente", error: "" };

    } catch (error) {
        console.error("[sendEmail]", error);
        return { success: false, error: "Error al enviar el correo." };
    }
}