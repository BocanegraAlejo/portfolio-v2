"use client"

import Link from "next/link"
import { Code2, Github } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background ">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-primary hover:text-primary/80">
          <Code2 className="h-8 w-8" />
          <span className="sr-only">Inicio</span>
        </Link>
        <nav className="hidden space-x-8 text-sm font-medium md:flex">
          <Link href="#proyectos" className="hover:text-primary">
            Proyectos
          </Link>
          <Link href="#habilidades" className="hover:text-primary">
            Habilidades
          </Link>
          <Link href="#experiencia" className="hover:text-primary">
            Experiencia
          </Link>
          <Link href="#contacto" className="hover:text-primary">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/bocanegraAlejo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  )
}

