import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { MotionConfig } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/i18n/provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
})

const siteUrl = "https://alejobocanegra.dev"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alejo Bocanegra — Fullstack Developer",
    template: "%s | Alejo Bocanegra",
  },
  description:
    "Desarrollador Web Fullstack con +7 años de experiencia. Especializado en React, Next.js, Laravel y desarrollo de apps móviles. Portafolio de proyectos y experiencia.",
  keywords: [
    "Fullstack Developer",
    "Desarrollador Web",
    "React",
    "Next.js",
    "Laravel",
    "PHP",
    "React Native",
    "Alejo Bocanegra",
    "Argentina",
  ],
  authors: [{ name: "Alejo Bocanegra" }],
  creator: "Alejo Bocanegra",
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
    url: siteUrl,
    title: "Alejo Bocanegra — Fullstack Developer",
    description:
      "Desarrollador Web Fullstack con +7 años de experiencia. React, Next.js, Laravel y apps móviles.",
    siteName: "Alejo Bocanegra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejo Bocanegra — Fullstack Developer",
    description:
      "Desarrollador Web Fullstack con +7 años de experiencia. React, Next.js, Laravel y apps móviles.",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <MotionConfig reducedMotion="user">
              <Header />
              {children}
              <Footer />
              <Toaster />
            </MotionConfig>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
