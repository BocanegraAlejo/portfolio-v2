"use client"

import { motion } from "framer-motion"
import { CalendarClock, FolderGit2, Smartphone, Layers } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useI18n } from "@/i18n/provider"
import { siteConfig, type StatKey } from "@/config/site"
import { useCountUp } from "@/hooks/useCountUp"

const ICONS: Record<StatKey, LucideIcon> = {
  years: CalendarClock,
  projects: FolderGit2,
  apps: Smartphone,
  techs: Layers,
}

function StatCard({
  statKey,
  value,
  suffix,
  label,
  index,
}: {
  statKey: StatKey
  value: number
  suffix: string
  label: string
  index: number
}) {
  const { value: current, ref } = useCountUp(value)
  const Icon = ICONS[statKey]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="gradient-border group relative overflow-hidden rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm"
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <div className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        <span ref={ref}>{current}</span>
        <span className="text-brand">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </motion.div>
  )
}

export default function Stats() {
  const { t } = useI18n()

  return (
    <section className="border-y border-border/60 bg-muted/20 py-16 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {siteConfig.stats.map((stat, i) => (
            <StatCard
              key={stat.key}
              statKey={stat.key}
              value={stat.value}
              suffix={stat.suffix}
              label={t.stats[stat.key]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
