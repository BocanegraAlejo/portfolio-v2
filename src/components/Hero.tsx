"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-purple-500/20 to-zinc-950 opacity-50" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block">Alejo Bocanegra</span>
          <span className="mt-2 block text-orange-500">
            Fullstack Developer
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          Más de 5 años de experiencia desarrollando aplicaciones web
          eficientes, escalables y orientadas a la experiencia del usuario.
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link href="#proyectos">
            <Button size="lg" className="group">
              Ver Proyectos
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="#contacto">
            <Button size="lg" variant="outline">
              Contactar
            </Button>
          </Link>
        </div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="h-8 w-8 text-zinc-500" />
        </motion.div>
      </div>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-6">
        {[
          "Desarrollo Web",
          "Apps Móviles",
          "Sistemas a Medida",
          "Portales de Noticias"
        ].map((service, index) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-800 px-4 py-2 shadow-lg hover:from-orange-950 hover:to-zinc-900"
          >
            <motion.span 
              className="relative z-10 text-sm font-medium text-zinc-300 transition-colors group-hover:text-orange-400"
              whileHover={{ scale: 1.05 }}
            >
              {service}
            </motion.span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-6">
        {[
          "5+ años exp.",
          "Full Stack Dev",
          "Freelance"
        ].map((achievement, index) => (
          <motion.div
            key={achievement}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-l from-zinc-900 to-zinc-800 px-4 py-2 shadow-lg hover:from-orange-950 hover:to-zinc-900"
          >
            <motion.span 
              className="relative z-10 text-sm font-medium text-zinc-300 transition-colors group-hover:text-orange-400"
              whileHover={{ scale: 1.05 }}
            >
              {achievement}
            </motion.span>
            <div className="absolute inset-0 bg-gradient-to-l from-orange-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
