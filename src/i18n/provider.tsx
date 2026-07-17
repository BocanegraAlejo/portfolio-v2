"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import {
  messages,
  DEFAULT_LOCALE,
  LOCALES,
  type Locale,
  type Messages,
} from "./messages"

export type Localized = { es: string; en: string }

interface I18nContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  toggleLocale: () => void
  /** Localized UI copy for the current locale. */
  t: Messages
  /** Pick a { es, en } field for the current locale. */
  tf: (field: Localized) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = "portfolio-locale"

function isLocale(value: string | null): value is Locale {
  return value === "es" || value === "en"
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  // Hydrate the stored preference after mount (keeps SSR === first client render).
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored) && stored !== locale) {
      setLocaleState(stored)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    window.localStorage.setItem(STORAGE_KEY, l)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "es" ? "en" : "es"
      window.localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: messages[locale],
      tf: (field: Localized) => field[locale],
    }),
    [locale, setLocale, toggleLocale]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return ctx
}

export { LOCALES }
