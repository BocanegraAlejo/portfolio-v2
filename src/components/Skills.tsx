"use client"

import { motion } from "framer-motion"
import {
  Database,
  LayoutTemplate,
  MonitorSmartphone,
  Server,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useI18n } from "@/i18n/provider"
import { skillGroups, type SkillGroupKey } from "@/config/skills"
import SectionHeading from "@/components/SectionHeading"

const GROUP_ICONS: Record<SkillGroupKey, LucideIcon> = {
  frontend: MonitorSmartphone,
  backend: Server,
  mobile: Smartphone,
  ia: Sparkles,
  databases: Database,
  tools: Wrench,
  cms: LayoutTemplate,
}

export default function Skills() {
  const { t } = useI18n()

  return (
    <section
      id="stack"
      className="scroll-mt-24 border-y border-border/60 bg-muted/20 py-20 sm:py-28"
    >
      <div className="container">
        <SectionHeading
          kicker={t.skills.kicker}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = GROUP_ICONS[group.key]
            return (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
                className="gradient-border group rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {t.skills.groups[group.key]}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {group.skills.length}{" "}
                      {group.skills.length === 1 ? "skill" : "skills"}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
