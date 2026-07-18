import { NextResponse } from "next/server"
import { Resend } from "resend"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const TO = process.env.CONTACT_TO_EMAIL ?? "alejoezequiel0909@gmail.com"
const FROM = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev"

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char] as string,
  )

export async function POST(request: Request) {
  let data: unknown
  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const { name, email, message } = (data ?? {}) as Record<string, unknown>

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !EMAIL_RE.test(email) ||
    message.trim().length < 5
  ) {
    return NextResponse.json({ error: "Validation failed" }, { status: 422 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[contact] falta RESEND_API_KEY")
    return NextResponse.json({ error: "Email not configured" }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: `Portfolio <${FROM}>`,
    to: TO,
    replyTo: email,
    subject: `Nuevo mensaje de ${name.trim()}`,
    text: `Nombre: ${name.trim()}\nEmail: ${email}\n\n${message.trim()}`,
    html: `
      <p><strong>Nombre:</strong> ${escapeHtml(name.trim())}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="white-space:pre-wrap">${escapeHtml(message.trim())}</p>
    `,
  })

  if (error) {
    console.error("[contact] error al enviar:", error)
    return NextResponse.json({ error: "Send failed" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
