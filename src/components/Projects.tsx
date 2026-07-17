"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Github,
  Lock,
  Sparkles,
} from "lucide-react"
import { useI18n } from "@/i18n/provider"
import { projects, type Project } from "@/config/projects"
import type { ProjectCategory } from "@/config/types"
import SectionHeading from "@/components/SectionHeading"
import { cn } from "@/lib/utils"

const CATEGORY_ORDER: ProjectCategory[] = ["web", "app"]
const PAGE_SIZE = 6

function TagChip({ tag, highlight }: { tag: string; highlight?: boolean }) {
  return (
    <span
      className={cn(
        "rounded-full border px-2.5 py-1 text-xs font-medium",
        highlight
          ? "border-brand/40 bg-brand/10 text-brand"
          : "border-border bg-muted/50 text-muted-foreground"
      )}
    >
      {tag}
    </span>
  )
}

const AI_TAGS = new Set(["OpenAI API", "IA", "AI"])

function FeaturedProject({ project }: { project: Project }) {
  const { t, tf } = useI18n()

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="gradient-border group relative mb-8 overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden lg:aspect-auto lg:min-h-[22rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent lg:bg-gradient-to-r" />
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10">
          <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <Sparkles className="h-3.5 w-3.5" />
            {t.projects.featured}
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {tf(project.description)}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TagChip key={tag} tag={tag} highlight={AI_TAGS.has(tag)} />
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                {t.projects.viewDemo}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:border-brand/50"
              >
                <Github className="h-4 w-4" />
                {t.projects.viewCode}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, tf } = useI18n()

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: (index % PAGE_SIZE) * 0.05 }}
      className="gradient-border group flex flex-col overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm transition-colors"
    >
      <div className="relative aspect-video overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur">
          {t.categories[project.category]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {tf(project.description)}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <TagChip key={tag} tag={tag} highlight={AI_TAGS.has(tag)} />
          ))}
        </div>
        <div className="mt-5 border-t border-border/60 pt-4">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-brand"
            >
              {t.projects.viewDemo}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Lock className="h-3.5 w-3.5" />
              {t.projects.noDemo}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<ProjectCategory | "all">("all")
  const [visible, setVisible] = useState(PAGE_SIZE)

  const featured = useMemo(() => projects.find((p) => p.featured), [])

  const availableCategories = useMemo(
    () =>
      CATEGORY_ORDER.filter((cat) =>
        projects.some((p) => p.category === cat)
      ),
    []
  )

  const gridProjects = useMemo(() => {
    if (filter === "all") return projects.filter((p) => !p.featured)
    return projects.filter((p) => p.category === filter)
  }, [filter])

  const shown =
    filter === "all" ? gridProjects.slice(0, visible) : gridProjects

  const changeFilter = (next: ProjectCategory | "all") => {
    setFilter(next)
    setVisible(PAGE_SIZE)
  }

  const filters: Array<{ key: ProjectCategory | "all"; label: string }> = [
    { key: "all", label: t.projects.filterAll },
    ...availableCategories.map((c) => ({ key: c, label: t.categories[c] })),
  ]

  return (
    <section id="proyectos" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          kicker={t.projects.kicker}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => changeFilter(f.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === f.key
                  ? "border-brand bg-brand/10 text-brand"
                  : "border-border text-muted-foreground hover:border-brand/40 hover:text-foreground"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {featured && filter === "all" && (
            <FeaturedProject project={featured} />
          )}

          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {shown.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {filter === "all" && gridProjects.length > PAGE_SIZE && (
          <div className="mt-12 text-center">
            {visible < gridProjects.length ? (
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/50"
              >
                {t.projects.viewMore}
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setVisible(PAGE_SIZE)}
                className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/50"
              >
                {t.projects.viewLess}
                <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
