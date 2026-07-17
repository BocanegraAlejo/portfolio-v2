"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { useI18n } from "@/i18n/provider"
import { siteConfig } from "@/config/site"
import SectionHeading from "@/components/SectionHeading"
import ContactForm from "@/components/ContactForm"

export default function Contact() {
  const { t } = useI18n()

  const channels = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/alejo-bocanegra",
      href: siteConfig.social.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/bocanegraAlejo",
      href: siteConfig.social.github,
    },
  ]

  return (
    <section id="contacto" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          kicker={t.contact.kicker}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Direct channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t.contact.directTitle}
            </h3>
            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="gradient-border group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-colors hover:border-brand/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">
                    {label}
                  </span>
                  <span className="block truncate text-sm font-medium text-foreground group-hover:text-brand">
                    {value}
                  </span>
                </span>
              </a>
            ))}
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="text-sm text-muted-foreground">
                {siteConfig.location}
              </span>
            </div>
          </motion.div>

          {/* Form */}
          <div className="gradient-border rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
