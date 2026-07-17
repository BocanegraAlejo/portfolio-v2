"use client"

import { Languages } from "lucide-react"
import { useI18n } from "@/i18n/provider"
import { cn } from "@/lib/utils"

export default function LanguageToggle({ className }: { className?: string }) {
  const { locale, toggleLocale, t } = useI18n()

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.header.langLabel}
      title={t.header.langLabel}
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-xs font-semibold text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground",
        className
      )}
    >
      <Languages className="h-4 w-4" />
      <span className="tabular-nums">{locale.toUpperCase()}</span>
    </button>
  )
}
