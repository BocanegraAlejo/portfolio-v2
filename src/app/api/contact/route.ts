import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json()

  // Aquí normalmente enviarías un email o guardarías en una base de datos
  console.log("Datos del formulario recibidos:", data)

  // Simular un delay para demostración
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json({ message: "Mensaje enviado con éxito" })
}

