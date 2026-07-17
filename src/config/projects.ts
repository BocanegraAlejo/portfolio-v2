import type { Localized, ProjectCategory } from "./types"

export interface Project {
  title: string
  category: ProjectCategory
  featured?: boolean
  description: Localized
  tags: string[]
  image: string
  /** URL de demo/live. Vacío = proyecto privado (no se renderiza link roto). */
  demo?: string
  /** URL de repositorio (opcional). */
  repo?: string
}

export const projects: Project[] = [
  {
    title: "Trapito",
    category: "web",
    featured: true,
    description: {
      es: "App que conecta a quien deja libre un lugar de estacionamiento con quien lo necesita: reportás un espacio, otro conductor lo toma y sumás puntos canjeables por beneficios, todo sobre un mapa en tiempo real.",
      en: "App that connects drivers leaving a parking spot with those looking for one: report a space, another driver takes it and you earn points redeemable for perks, all on a real-time map.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/project-trapito.png",
    demo: "https://trapito.app/",
  },
  {
    title: "Cheqauto",
    category: "web",
    description: {
      es: "Plataforma web con IA para la inspección de vehículos usados. Automatiza el análisis de estado del auto a partir de fotos y genera reportes, integrando OpenAI, colas con Qstash y Firebase.",
      en: "AI-powered web platform for used-car inspection. It automates vehicle condition analysis from photos and generates reports, integrating OpenAI, Qstash queues and Firebase.",
    },
    tags: ["Next.js", "Firebase", "Qstash", "OpenAI API"],
    image: "/images/projects/project-cheqauto.png",
    demo: "https://www.cheqauto.com/",
  },
  {
    title: "InquilinoProtegido",
    category: "web",
    description: {
      es: "Plataforma web que analiza contratos de alquiler con IA y explica cada cláusula en lenguaje simple, señalando qué conviene negociar y qué puede perjudicarte. Incluye reporte y pago con Mercado Pago.",
      en: "Web platform that analyzes rental contracts with AI and explains each clause in plain language, flagging what to negotiate and what could hurt you. Includes a report and Mercado Pago checkout.",
    },
    tags: ["Next.js", "OpenAI API", "Tailwind", "Mercado Pago"],
    image: "/images/projects/project-inquilinoprotegido.png",
    demo: "https://inquilinoprotegido.com.ar/",
  },
  {
    title: "ReservaOK",
    category: "web",
    description: {
      es: "Plataforma para publicar alquileres temporales y gestionar reservas de punta a punta: link único por propiedad, consultas de inquilinos sin registro, seña, calendario automático y panel de administración.",
      en: "Platform to list short-term rentals and manage bookings end to end: a unique link per property, guest requests without sign-up, deposits, an automatic calendar and an admin dashboard.",
    },
    tags: ["Next.js", "Tailwind", "Mercado Pago"],
    image: "/images/projects/project-reservaok.png",
    demo: "https://reservaok.com.ar/",
  },
  {
    title: "FM 102.1 Elevate",
    category: "web",
    description: {
      es: "Sitio web con reproductor de streaming en vivo, incluyendo la maquetación completa de la interfaz.",
      en: "Website with a live streaming player, including the full interface layout and build.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/project-elevatefm.png",
    demo: "https://1021elevate.com.ar/",
  },
  {
    title: "Radio En La Costa",
    category: "web",
    description: {
      es: "Sitio de streaming en vivo con reproductor propio de audio y video para la primera radio inclusiva del Partido de La Costa, con transmisión las 24 horas.",
      en: "Live streaming site with a custom audio and video player for the first inclusive radio of Partido de La Costa, broadcasting 24/7.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/project-radioenlacosta.png",
    demo: "https://radioenlacosta.com.ar/",
  },
  {
    title: "Búsqueda del Tesoro AR",
    category: "web",
    description: {
      es: "Juego web de Realidad Aumentada enfocado en dispositivos móviles, con escaneo de marcadores y lógica de juego en tiempo real.",
      en: "Augmented Reality web game focused on mobile devices, with marker scanning and real-time game logic.",
    },
    tags: ["Vue.js", "AR.js", "A-Frame", "Firebase"],
    image: "/images/projects/project-busquedatesoro.png",
  },
  {
    title: "Redtl Radios",
    category: "web",
    description: {
      es: "Ajustes y nuevas funciones sobre el sitio: streaming de video, sección Museo, entre otros.",
      en: "Enhancements and new features on the site: video streaming, a Museum section, and more.",
    },
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/images/projects/project-redtl.png",
    demo: "https://redtl.com.ar/",
  },
  {
    title: "AM 1330 Rosario",
    category: "web",
    description: {
      es: "Ajustes visuales del sitio e implementación de streaming de video para la emisora.",
      en: "Visual refinements to the site and video streaming implementation for the station.",
    },
    tags: ["WordPress"],
    image: "/images/projects/project-am1330.png",
    demo: "https://am1330rosario.com.ar/",
  },
  {
    title: "Grupogon",
    category: "web",
    description: {
      es: "Sistema de gestión de préstamos: administración de clientes, usuarios, cuotas y reportes.",
      en: "Loan management system: handling clients, users, installments and reports.",
    },
    tags: ["PHP", "Laravel", "Livewire", "Tailwind", "MySQL"],
    image: "/images/projects/project-grupogon.png",
  },
  {
    title: "FM Laberinto",
    category: "web",
    description: {
      es: "Portal de noticias autoadministrable completo, con panel de gestión de contenidos.",
      en: "Full self-managed news portal with a content management dashboard.",
    },
    tags: ["Laravel", "Livewire", "Filament", "MySQL"],
    image: "/images/projects/project-fmlaberinto.png",
    demo: "https://fmlaberinto.com.ar/",
  },
  {
    title: "App FM Laberinto",
    category: "app",
    description: {
      es: "Aplicación Android publicada en Play Store con reproducción de streaming en vivo.",
      en: "Android app published on the Play Store with live streaming playback.",
    },
    tags: ["React Native"],
    image: "/images/projects/project-appfmlaberinto.png",
    demo: "https://play.google.com/store/apps/details?id=com.fmlaberinto",
  },
  {
    title: "App FM del Mar",
    category: "app",
    description: {
      es: "Aplicación Android publicada en Play Store con reproducción de streaming en vivo.",
      en: "Android app published on the Play Store with live streaming playback.",
    },
    tags: ["React Native"],
    image: "/images/projects/project-appfmdelmar.png",
    demo: "https://play.google.com/store/apps/details?id=com.fmdelmar",
  },
  {
    title: "App Radio En La Costa",
    category: "app",
    description: {
      es: "Aplicación Android de la radio escolar inclusiva del Partido de La Costa, con streaming en vivo las 24 horas y grilla de programas. Publicada en Play Store.",
      en: "Android app for the inclusive school radio of Partido de La Costa, with 24/7 live streaming and a program schedule. Published on the Play Store.",
    },
    tags: ["React Native"],
    image: "/images/projects/project-appradioenlacosta.png",
    demo: "https://play.google.com/store/apps/details?id=com.radioenlacosta.tallermunicipalradioapp",
  },
  {
    title: "Laberinto Las Toninas",
    category: "web",
    description: {
      es: "Sitio dinámico completo con panel de administración a medida.",
      en: "Full dynamic website with a custom admin dashboard.",
    },
    tags: ["React", "Laravel", "JavaScript", "MySQL"],
    image: "/images/projects/project-laberintolastoninas.png",
    demo: "https://www.laberintolastoninas.com.ar/",
  },
  {
    title: "Starfeet",
    category: "web",
    description: {
      es: "Rediseño de secciones de la tienda usando el motor de plantillas de Tiendanube.",
      en: "Redesign of store sections using Tiendanube's templating engine.",
    },
    tags: ["Tiendanube", "Liquid", "CSS"],
    image: "/images/projects/project-starfeet.png",
    demo: "https://www.starfeetoficial.com/",
  },
]
