import type { Localized } from "./types"

export interface Experience {
  role: Localized
  company: string
  /** Período, ej: "2023 — Actualidad". Dejalo vacío para no mostrar la fecha. */
  period?: string
  description: Localized
}

// TODO: completá los `period` con tus fechas reales para reforzar el CV.
export const experiences: Experience[] = [
  {
    role: { es: "Desarrollador Web Freelance", en: "Freelance Web Developer" },
    company: "Freelance",
    period: "",
    description: {
      es: "Desarrollo de sitios, sistemas y apps a medida para clientes de distintos rubros, gestionando cada proyecto de punta a punta. Integración de pagos, streaming e IA, con foco en entregas rápidas y clientes satisfechos.",
      en: "Custom websites, systems and apps for clients across different industries, owning each project end to end. Payment, streaming and AI integrations, with a focus on fast delivery and satisfied clients.",
    },
  },
  {
    role: { es: "Fullstack Developer", en: "Fullstack Developer" },
    company: "SQL System S.A",
    period: "",
    description: {
      es: "Desarrollo de sistemas web para instituciones educativas: integración de ARCA para facturación electrónica, pasarelas de pago (MercadoPago, Roela), generación de reportes en PDF y envío de correos con Mailgun, mejorando la eficiencia administrativa y la experiencia de usuario.",
      en: "Web systems for educational institutions: ARCA e-invoicing integration, payment gateways (MercadoPago, Roela), PDF report generation and email delivery with Mailgun — improving administrative efficiency and user experience.",
    },
  },
  {
    role: { es: "Chatbot Developer", en: "Chatbot Developer" },
    company: "Automation Tech Studio",
    period: "",
    description: {
      es: "Desarrollo de chatbots con Botmaker y creación de APIs para integrarlos con otras soluciones y automatizar flujos de atención.",
      en: "Built chatbots with Botmaker and developed APIs to integrate them with other solutions and automate support flows.",
    },
  },
  {
    role: { es: "Founder", en: "Founder" },
    company: "Sitios Para Radios",
    period: "",
    description: {
      es: "Marca registrada bajo mi nombre. Ofrezco portales de noticias para emisoras de radio y desarrollo de aplicaciones Android, gestionando el proyecto de punta a punta.",
      en: "My own registered brand. I provide news portals for radio stations and Android app development, owning each project end to end.",
    },
  },
]
