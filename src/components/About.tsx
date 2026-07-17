"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, MapPin, Sparkles } from "lucide-react"
import { useI18n } from "@/i18n/provider"
import { siteConfig } from "@/config/site"
import SectionHeading from "@/components/SectionHeading"

function Avatar() {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand/25 via-brand-3/15 to-brand-2/20">
        <span className="font-display text-7xl font-bold text-foreground/80">
          AB
        </span>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={siteConfig.photo}
      alt="Alejo Bocanegra"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  )
}

export default function About() {
  const { t, locale } = useI18n()

  return (
    <section id="sobre-mi" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/20 via-transparent to-brand-2/20 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border bg-muted shadow-card">
            <Avatar />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Floating chips */}
          <div className="absolute -bottom-5 left-4 flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2 text-sm font-medium shadow-card backdrop-blur">
            <MapPin className="h-4 w-4 text-brand" />
            {siteConfig.location}
          </div>
          <div className="absolute -right-3 top-6 flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1.5 text-xs font-semibold shadow-card backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            +7 {locale === "en" ? "yrs" : "años"}
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <SectionHeading kicker={t.about.kicker} title={t.about.title} />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground"
          >
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.about.highlightsTitle}
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {t.about.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
