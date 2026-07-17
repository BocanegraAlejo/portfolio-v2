"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, MousePointerClick } from "lucide-react"
import { useI18n } from "@/i18n/provider"
import { siteConfig } from "@/config/site"

function RotatingRole({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length)
    }, 2600)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <span className="relative inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="text-gradient"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="ml-1 inline-block h-[0.9em] w-[3px] animate-blink bg-brand" />
    </span>
  )
}

export default function Hero() {
  const { t } = useI18n()

  const miniStats = [
    { value: "+7", label: t.stats.years },
    { value: "30+", label: t.stats.projects },
    { value: "Play Store", label: t.stats.apps },
  ]

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16"
    >
      {/* Aurora background */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="aurora-blob left-[-5%] top-[-12%] h-[40rem] w-[40rem] animate-aurora-drift bg-brand/40 dark:bg-brand/35" />
        <div className="aurora-blob right-[-8%] top-[-2%] h-[36rem] w-[36rem] animate-aurora-drift-slow bg-brand-2/35 dark:bg-brand-2/30" />
        <div className="aurora-blob bottom-[-15%] left-[18%] h-[38rem] w-[38rem] animate-aurora-drift bg-brand-3/30 dark:bg-brand-3/25" />
        <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_5%,transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_48%,hsl(var(--background))_92%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Availability badge */}
        <motion.a
          href="#contacto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:border-brand/40"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          {t.hero.badge}
        </motion.a>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-3 text-base font-medium text-muted-foreground"
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Alejo Bocanegra
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 font-display text-2xl font-semibold sm:text-3xl md:text-4xl"
        >
          <RotatingRole roles={t.hero.roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="#proyectos"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            {t.hero.ctaProjects}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contacto"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card/40 px-7 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-brand/50"
          >
            {t.hero.ctaContact}
          </Link>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center gap-3"
        >
          {[
            { href: siteConfig.social.github, icon: Github, label: "GitHub" },
            { href: siteConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </motion.div>

        {/* Mini stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {miniStats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-8">
              {i > 0 && <span className="hidden h-8 w-px bg-border sm:block" />}
              <div className="text-center">
                <div className="font-display text-xl font-bold text-foreground">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex"
      >
        <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest">
          <MousePointerClick className="h-3.5 w-3.5" />
          {t.hero.scroll}
        </span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.6 }}
            className="h-1.5 w-1.5 rounded-full bg-brand"
          />
        </div>
      </motion.div>
    </section>
  )
}
