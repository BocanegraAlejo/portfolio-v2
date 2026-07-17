"use client"

import Link from "next/link"
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import { useI18n } from "@/i18n/provider"
import { siteConfig } from "@/config/site"

const NAV = [
  { id: "sobre-mi", key: "about" },
  { id: "proyectos", key: "projects" },
  { id: "stack", key: "skills" },
  { id: "experiencia", key: "experience" },
  { id: "contacto", key: "contact" },
] as const

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-border/60">
      {/* CTA band */}
      <div className="relative">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="aurora-blob left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-brand/20" />
          <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
        </div>
        <div className="container py-16 text-center sm:py-20">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t.footer.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {t.footer.ctaSubtitle}
          </p>
          <Link
            href="#contacto"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            {t.footer.ctaButton}
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-border/60">
        <div className="container flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <span className="font-display text-lg font-bold">
              Alejo Bocanegra<span className="text-brand">.</span>
            </span>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.role} · {siteConfig.location}
            </p>
          </div>

          <div className="flex gap-14">
            <nav>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t.footer.nav}
              </h3>
              <ul className="space-y-2">
                {NAV.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className="text-sm text-foreground/80 transition-colors hover:text-brand"
                    >
                      {t.nav[item.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t.footer.social}
              </h3>
              <div className="flex gap-2">
                {[
                  { href: siteConfig.social.github, icon: Github, label: "GitHub" },
                  {
                    href: siteConfig.social.linkedin,
                    icon: Linkedin,
                    label: "LinkedIn",
                  },
                  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/60">
          <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
            <p>
              © {year} · {t.footer.madeWith}. {t.footer.rights}
            </p>
            <Link
              href="#inicio"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
            >
              {t.footer.backToTop}
              <ArrowUp className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
