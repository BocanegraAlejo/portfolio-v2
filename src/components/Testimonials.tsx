"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { useI18n } from "@/i18n/provider"
import { testimonials, type Testimonial } from "@/config/testimonials"
import SectionHeading from "@/components/SectionHeading"
import { cn } from "@/lib/utils"

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground/30"
          )}
          aria-hidden
        />
      ))}
    </div>
  )
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial
  index: number
}) {
  const { tf } = useI18n()

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="gradient-border group relative flex h-full flex-col rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm"
    >
      <Quote
        className="absolute right-5 top-5 h-8 w-8 text-brand/15"
        aria-hidden
      />

      <Stars rating={testimonial.rating} />

      <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
        &ldquo;{tf(testimonial.quote)}&rdquo;
      </blockquote>

      <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-sm font-bold text-white">
          {testimonial.name.charAt(0).toUpperCase()}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {tf(testimonial.project)}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default function Testimonials() {
  const { t } = useI18n()

  return (
    <section id="testimonios" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          kicker={t.testimonials.kicker}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={item.name + index}
              testimonial={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
