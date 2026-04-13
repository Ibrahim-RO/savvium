// app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Tipos para el body del request
interface EmailPayload {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
}

// Configuración del transporter (reutilizable)
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true", // true para puerto 465, false para otros
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function POST(req: NextRequest) {
  try {
    const body: EmailPayload = await req.json();
    const { to, subject, text, html, replyTo } = body;

    // Validaciones básicas
    if (!to || !subject) {
      return NextResponse.json(
        { error: "Los campos 'to' y 'subject' son requeridos." },
        { status: 400 }
      );
    }

    if (!text && !html) {
      return NextResponse.json(
        { error: "Se requiere al menos 'text' o 'html' como cuerpo del correo." },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    // Verificar conexión con el servidor SMTP
    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: Array.isArray(to) ? to.join(", ") : to,
      subject,
      text,
      html,
      ...(replyTo && { replyTo }),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Correo enviado correctamente.",
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[send-email] Error:", error);

    const message =
      error instanceof Error ? error.message : "Error interno del servidor.";

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}