"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { useI18n } from "@/i18n/provider"
import { experiences } from "@/config/experience"
import SectionHeading from "@/components/SectionHeading"

export default function Experience() {
  const { t, tf } = useI18n()

  return (
    <section id="experiencia" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container">
        <SectionHeading kicker={t.experience.kicker} title={t.experience.title} />

        <div className="relative mt-14 max-w-3xl">
          {/* Vertical line */}
          <span
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-brand/60 via-border to-transparent"
            aria-hidden
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative pl-14"
              >
                <span className="absolute left-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand">
                  <Briefcase className="h-4 w-4" />
                </span>

                <div className="gradient-border rounded-xl border border-border bg-card/60 p-5 backdrop-blur-sm sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {tf(exp.role)}
                    </h3>
                    {exp.period && (
                      <span className="text-xs font-medium text-muted-foreground">
                        {exp.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-brand">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {tf(exp.description)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
