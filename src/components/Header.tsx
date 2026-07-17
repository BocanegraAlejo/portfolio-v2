"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Github, Menu, X, FileDown } from "lucide-react"
import { useI18n } from "@/i18n/provider"
import { useActiveSection } from "@/hooks/useActiveSection"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/ThemeToggle"
import LanguageToggle from "@/components/LanguageToggle"

const NAV = [
  { id: "sobre-mi", key: "about" },
  { id: "proyectos", key: "projects" },
  { id: "stack", key: "skills" },
  { id: "experiencia", key: "experience" },
  { id: "testimonios", key: "testimonials" },
  { id: "contacto", key: "contact" },
] as const

const NAV_IDS = NAV.map((n) => n.id)

export default function Header() {
  const { t } = useI18n()
  const active = useActiveSection(NAV_IDS)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link
          href="#inicio"
          className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Alejo Bocanegra — inicio"
        >
          <Image
            src="/images/logo.png"
            alt="Logo Alejo Bocanegra"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const isActive = active === item.id
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand/10 ring-1 ring-brand/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {t.nav[item.key]}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:inline-flex" />
          <ThemeToggle />
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground sm:inline-flex"
          >
            <Github className="h-4 w-4" />
          </a>
          {siteConfig.hasCv && (
            <a
              href={siteConfig.cvUrl}
              download
              className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] md:inline-flex"
            >
              <FileDown className="h-4 w-4" />
              {t.header.cv}
            </a>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.header.menu}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border/70 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {NAV.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    active === item.id
                      ? "bg-brand/10 text-foreground"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {t.nav[item.key]}
                </Link>
              ))}
              <div className="mt-3 flex items-center gap-2 px-4">
                <LanguageToggle />
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground"
                >
                  <Github className="h-4 w-4" />
                </a>
                {siteConfig.hasCv && (
                  <a
                    href={siteConfig.cvUrl}
                    download
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                  >
                    <FileDown className="h-4 w-4" />
                    {t.header.cv}
                  </a>
                )}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
