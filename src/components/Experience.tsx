"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    
    {
      title: "Fullstack Developer",
      company: "Traders Business School",
      period: "2024 - Presente",
      description:"desarrollo de solucion web completa, utilizando CodeIgniter para el backend y Next.js para el frontend. También contribuyo al desarrollo de la app mobile.",
    },
    {
      title: "Founder",
      company: "Sitios Para Radios",
      period: "2023 - Presente",
      description:
        "Marca registrada bajo mi nombre, ofrezco Servicios de Portales de noticias para emisoras de Radio y Desarrollo de Aplicaciones Android.",
    },
    {   
      title: "Chatbot Developer",
      company: "Automation Tech Studio",
      period: "2023 - Presente",
      description:"Colaboro en el desarrollo de chatbots utilizando Botmaker y desarrollo APIs para integrarlos con otras soluciones",
    },
    {
      title: "FullStack Developer",
      company: "SQL System S.A",
      period: "2021 - Presente",
      description:
        "Desarrollo de sistemas web para instituciones educativas, integrando ARCA para facturación electrónica, pasarelas de pago como MercadoPago y Roela, y herramientas para la generación de reportes en PDF y envío de correos con Mailgun, mejorando la eficiencia administrativa y la experiencia del usuario",
    },

  ]

  return (
    <section id="experiencia" className="py-20">
      <div className="container">
        <h2 className="mb-16 text-3xl font-bold text-white sm:text-4xl">Experiencia Laboral</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-orange-500"
            >
              <Briefcase className="absolute -left-3 top-0 h-6 w-6 bg-zinc-950 text-orange-500" />
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <p className="text-orange-500">{exp.company}</p>
              <p className="text-sm text-zinc-400">{exp.period}</p>
              <p className="mt-2 text-zinc-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

