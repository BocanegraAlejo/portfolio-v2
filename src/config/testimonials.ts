import type { Localized } from "./types"

export interface Testimonial {
  /** Nombre del cliente tal como figura en la reseña. */
  name: string
  /** Reseña textual. `es` = original del cliente; `en` = traducción fiel. */
  quote: Localized
  /** Puntaje sobre 5. */
  rating: number
  /** Proyecto o contexto del trabajo. */
  project: Localized
  /** Antigüedad relativa de la reseña. */
  date: Localized
  /** Skills asociadas al trabajo (opcional). */
  tags?: string[]
}

// Opiniones reales de clientes. Todas con calificación 5/5.
export const testimonials: Testimonial[] = [
  {
    name: "Sofía Mariatti",
    quote: {
      es: "Excelente trabajo, muy predispuesto a solucionar todo tipo de problema. ¡Seguiremos trabajando con él en otros proyectos!",
      en: "Excellent work, very willing to solve any kind of problem. We'll keep working with him on other projects!",
    },
    rating: 5,
    project: {
      es: "Streaming en la web de una radio",
      en: "Streaming on a radio website",
    },
    date: { es: "Hace 4 años", en: "4 years ago" },
    tags: ["JavaScript", "PHP", "MySQL", "WordPress"],
  },
  {
    name: "Samira Raed",
    quote: {
      es: "¡Excelente experiencia! Rápido, resolutivo, bien predispuesto y sobre todo excelente calidad del proyecto final. Súper recomendable.",
      en: "Great experience! Fast, resourceful, easy to work with and above all excellent quality in the final project. Highly recommended.",
    },
    rating: 5,
    project: {
      es: "Configuración de Tienda Nube",
      en: "Tiendanube store setup",
    },
    date: { es: "Hace 5 años", en: "5 years ago" },
    tags: ["PHP", "WordPress", "Magento"],
  },
  {
    name: "Ayelen Ferreyra",
    quote: {
      es: "¡Alejo entendió muy bien lo que se le pedía! Manejó excelente los tiempos y demostró mucha responsabilidad. Quedamos muy contentos con su desempeño.",
      en: "Alejo understood exactly what was needed! Great time management and a lot of responsibility. We were very happy with his work.",
    },
    rating: 5,
    project: { es: "Mejoras en PHP", en: "PHP improvements" },
    date: { es: "Hace 6 años", en: "6 years ago" },
    tags: ["PHP", "JavaScript", "MySQL", "AJAX", "HTML"],
  },
  {
    name: "Matias Maldonado",
    quote: {
      es: "Más que excelente, solucionó todo rápido. Y asesoró.",
      en: "More than excellent — solved everything fast. And gave great advice.",
    },
    rating: 5,
    project: {
      es: "CRM con plantilla AdminLTE / Bootstrap",
      en: "CRM with AdminLTE / Bootstrap template",
    },
    date: { es: "Hace 5 años", en: "5 years ago" },
    tags: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
  },
  {
    name: "Ayelen Ferreyra",
    quote: {
      es: "Alejo es un desarrollador muy serio. Sabe entender las urgencias y es súper efectivo. Lo recomiendo.",
      en: "Alejo is a very serious developer. He understands urgencies and is super effective. I recommend him.",
    },
    rating: 5,
    project: { es: "Contratación directa", en: "Direct hire" },
    date: { es: "Hace 6 años", en: "6 years ago" },
  },
  {
    name: "Martin",
    quote: {
      es: "Excelente profesional, atento y muy amable.",
      en: "Excellent professional, attentive and very kind.",
    },
    rating: 5,
    project: {
      es: "IPN de Mercado Pago con PHP",
      en: "Mercado Pago IPN with PHP",
    },
    date: { es: "Hace 5 años", en: "5 years ago" },
    tags: ["PHP", "MySQL"],
  },
  {
    name: "Sofia",
    quote: {
      es: "¡Impecable como siempre!",
      en: "Flawless as always!",
    },
    rating: 5,
    project: { es: "Contratación directa", en: "Direct hire" },
    date: { es: "Hace 6 años", en: "6 years ago" },
  },
  {
    name: "Ayelen Ferreyra",
    quote: {
      es: "Alejo, ¡como siempre impecable! Resuelve en tiempo récord.",
      en: "Alejo, flawless as always! He delivers in record time.",
    },
    rating: 5,
    project: { es: "Contratación directa", en: "Direct hire" },
    date: { es: "Hace 6 años", en: "6 years ago" },
  },
]
