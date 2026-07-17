export const siteConfig = {
  name: "Alejo Bocanegra",
  role: "Fullstack Developer",
  email: "alejoezequiel0909@gmail.com",
  location: "Argentina · Remoto / Remote",

  /**
   * Foto para la sección "Sobre mí".
   * Dejá tu imagen en: public/images/alejo.jpg (recomendado: cuadrada, 800x800+).
   * Si el archivo no existe, se muestra un avatar con iniciales como fallback.
   */
  photo: "/images/alejo.jpg",

  /**
   * CV descargable. Cuando tengas el PDF, dejalo en public/cv/ y poné hasCv en true.
   * Mientras esté en false, el botón "Descargar CV" no se muestra (evita links rotos).
   */
  hasCv: false,
  cvUrl: "/cv/alejo-bocanegra-cv.pdf",

  // Enlaces sociales. TODO: reemplazá la URL de LinkedIn por la tuya real.
  social: {
    github: "https://github.com/bocanegraAlejo",
    linkedin: "https://www.linkedin.com/in/alejo-bocanegra/",
  },

  /** Métricas de impacto (sección Stats). value = número, suffix = decorador. */
  stats: [
    { key: "years", value: 7, suffix: "+" },
    { key: "projects", value: 30, suffix: "+" },
    { key: "apps", value: 3, suffix: "" },
    { key: "techs", value: 20, suffix: "+" },
  ],
} as const

export type StatKey = (typeof siteConfig.stats)[number]["key"]
