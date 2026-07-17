export type Locale = "es" | "en"

export const LOCALES: Locale[] = ["es", "en"]
export const DEFAULT_LOCALE: Locale = "es"

/**
 * UI copy for the whole site. Project/experience data descriptions live in
 * `src/config/*` as { es, en } fields and are picked with the current locale.
 */
export const messages = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Stack",
      experience: "Experiencia",
      testimonials: "Testimonios",
      contact: "Contacto",
    },
    header: {
      cv: "Descargar CV",
      langLabel: "Idioma",
      themeLabel: "Cambiar tema",
      menu: "Menú",
    },
    hero: {
      badge: "Disponible para nuevos proyectos",
      greeting: "Hola, soy",
      roles: [
        "Fullstack Developer",
        "Especialista en Laravel",
        "React & Next.js",
        "Apps móviles & IA",
      ],
      tagline:
        "Construyo aplicaciones web y móviles rápidas, escalables y centradas en el usuario. +7 años transformando ideas en productos reales.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Hablemos",
      scroll: "Deslizá",
    },
    stats: {
      title: "Números que respaldan el trabajo",
      years: "Años de experiencia",
      projects: "Proyectos entregados",
      apps: "Apps publicadas",
      techs: "Tecnologías dominadas",
    },
    about: {
      kicker: "Sobre mí",
      title: "Desarrollo producto de punta a punta",
      p1: "Soy Alejo Bocanegra, desarrollador fullstack con más de 7 años creando soluciones web y móviles. Me muevo con comodidad tanto en el frontend (React, Next.js, Vue) como en el backend (PHP/Laravel, Node), y disfruto llevar un proyecto desde la idea hasta producción.",
      p2: "Trabajé en sistemas de gestión con facturación electrónica y pasarelas de pago, portales de noticias autoadministrables, apps Android publicadas en Play Store y hasta experiencias web con Realidad Aumentada e IA. Me obsesiona el detalle, el rendimiento y que el usuario final la pase bien.",
      highlightsTitle: "Lo que me diferencia",
      highlights: [
        "Autonomía total: del diseño y la arquitectura al deploy.",
        "Foco en performance, accesibilidad y experiencia de usuario.",
        "Experiencia real integrando pagos, facturación electrónica e IA.",
        "Comunicación clara y entregas consistentes.",
      ],
    },
    projects: {
      kicker: "Portfolio",
      title: "Proyectos destacados",
      subtitle:
        "Una selección de trabajos reales: sistemas a medida, portales, apps móviles y experiencias interactivas.",
      featured: "Destacado",
      viewDemo: "Ver demo",
      viewCode: "Código",
      viewMore: "Ver más proyectos",
      viewLess: "Ver menos",
      noDemo: "Proyecto privado",
      filterAll: "Todos",
    },
    categories: {
      web: "Web",
      app: "Apps móviles",
    },
    skills: {
      kicker: "Stack técnico",
      title: "Tecnologías con las que trabajo",
      subtitle:
        "Herramientas que uso a diario para llevar productos de la idea a producción.",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        ia: "IA & Agentes",
        databases: "Bases de datos",
        tools: "Tools & DevOps",
        cms: "CMS & No-code",
      },
    },
    experience: {
      kicker: "Trayectoria",
      title: "Experiencia laboral",
      present: "Actualidad",
    },
    testimonials: {
      kicker: "Testimonios",
      title: "Lo que dicen mis clientes",
      subtitle:
        "Opiniones reales de clientes con los que trabajé, todas con calificación de 5 estrellas.",
    },
    contact: {
      kicker: "Contacto",
      title: "¿Tenés un proyecto en mente?",
      subtitle:
        "Estoy abierto a nuevas oportunidades y colaboraciones. Escribime y te respondo a la brevedad.",
      directTitle: "Vías directas",
      emailLabel: "Email",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Contame sobre tu proyecto...",
        send: "Enviar mensaje",
        sending: "Enviando...",
        successTitle: "¡Mensaje enviado!",
        successBody: "Gracias por escribir. Te respondo pronto.",
        errorTitle: "Ups, algo falló",
        errorBody: "No se pudo enviar. Probá de nuevo o escribime por email.",
        invalidTitle: "Revisá los datos",
        invalidBody: "Completá nombre, un email válido y tu mensaje.",
      },
    },
    footer: {
      ctaTitle: "Construyamos algo juntos",
      ctaSubtitle:
        "¿Buscás un dev que se haga cargo del producto de principio a fin? Hablemos.",
      ctaButton: "Iniciar conversación",
      nav: "Navegación",
      social: "Redes",
      madeWith: "Diseñado y desarrollado por Alejo Bocanegra",
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba",
    },
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Stack",
      experience: "Experience",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    header: {
      cv: "Download CV",
      langLabel: "Language",
      themeLabel: "Toggle theme",
      menu: "Menu",
    },
    hero: {
      badge: "Available for new projects",
      greeting: "Hi, I'm",
      roles: [
        "Fullstack Developer",
        "Laravel Specialist",
        "React & Next.js",
        "Mobile apps & AI",
      ],
      tagline:
        "I build fast, scalable and user-focused web and mobile apps. 7+ years turning ideas into real products.",
      ctaProjects: "View projects",
      ctaContact: "Let's talk",
      scroll: "Scroll",
    },
    stats: {
      title: "Numbers behind the work",
      years: "Years of experience",
      projects: "Projects delivered",
      apps: "Published apps",
      techs: "Technologies mastered",
    },
    about: {
      kicker: "About me",
      title: "I ship products end to end",
      p1: "I'm Alejo Bocanegra, a fullstack developer with 7+ years building web and mobile solutions. I'm comfortable across the frontend (React, Next.js, Vue) and the backend (PHP/Laravel, Node), and I love taking a project from idea to production.",
      p2: "I've built management systems with e-invoicing and payment gateways, self-managed news portals, Android apps published on the Play Store, and even web experiences with Augmented Reality and AI. I obsess over detail, performance and a great end-user experience.",
      highlightsTitle: "What sets me apart",
      highlights: [
        "Full autonomy: from design and architecture to deploy.",
        "Focus on performance, accessibility and user experience.",
        "Real experience integrating payments, e-invoicing and AI.",
        "Clear communication and consistent delivery.",
      ],
    },
    projects: {
      kicker: "Portfolio",
      title: "Featured projects",
      subtitle:
        "A selection of real work: custom systems, portals, mobile apps and interactive experiences.",
      featured: "Featured",
      viewDemo: "Live demo",
      viewCode: "Code",
      viewMore: "Show more projects",
      viewLess: "Show less",
      noDemo: "Private project",
      filterAll: "All",
    },
    categories: {
      web: "Web",
      app: "Mobile apps",
    },
    skills: {
      kicker: "Tech stack",
      title: "Technologies I work with",
      subtitle: "Tools I use daily to take products from idea to production.",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        ia: "AI & Agents",
        databases: "Databases",
        tools: "Tools & DevOps",
        cms: "CMS & No-code",
      },
    },
    experience: {
      kicker: "Career",
      title: "Work experience",
      present: "Present",
    },
    testimonials: {
      kicker: "Testimonials",
      title: "What my clients say",
      subtitle:
        "Real reviews from clients I worked with, all rated 5 stars.",
    },
    contact: {
      kicker: "Contact",
      title: "Got a project in mind?",
      subtitle:
        "I'm open to new opportunities and collaborations. Drop me a line and I'll get back to you quickly.",
      directTitle: "Direct channels",
      emailLabel: "Email",
      form: {
        name: "Name",
        email: "Email",
        message: "Tell me about your project...",
        send: "Send message",
        sending: "Sending...",
        successTitle: "Message sent!",
        successBody: "Thanks for reaching out. I'll reply soon.",
        errorTitle: "Oops, something failed",
        errorBody: "Couldn't send. Try again or reach me by email.",
        invalidTitle: "Check your details",
        invalidBody: "Please add a name, a valid email and your message.",
      },
    },
    footer: {
      ctaTitle: "Let's build something together",
      ctaSubtitle:
        "Looking for a dev who owns the product from start to finish? Let's talk.",
      ctaButton: "Start a conversation",
      nav: "Navigation",
      social: "Social",
      madeWith: "Designed and built by Alejo Bocanegra",
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
}

export type Messages = (typeof messages)["es"]
