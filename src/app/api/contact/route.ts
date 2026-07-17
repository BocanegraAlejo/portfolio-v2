import { NextResponse } from "next/server"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

  // TODO: enviar el email de verdad.
  // Recomendado: Resend (https://resend.com). Instalá `resend`, agregá
  // RESEND_API_KEY a las env vars y descomentá:
  //
  //   import { Resend } from "resend"
  //   const resend = new Resend(process.env.RESEND_API_KEY)
  //   await resend.emails.send({
  //     from: "portfolio@tudominio.com",
  //     to: "alejoezequiel0909@gmail.com",
  //     replyTo: email,
  //     subject: `Nuevo mensaje de ${name}`,
  //     text: message,
  //   })
  console.log("[contact] nuevo mensaje:", { name, email, message })

  return NextResponse.json({ ok: true })
}
