"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FM 102.1 Elevate",
    description:
      "Desarrollo de sitio web con reproductor de streaming, incluyendo la maquetación completa de la interfaz",
    tags: ["Html", "CSS", "Javascript"],
    image: "/images/projects/project-elevatefm.png",
    demo: "https://1021elevate.com.ar/",
  },
  {
    title: "Juego Busqueda del Tesoro AR",
    description:
      "Desarrollo de juego de Realidad Aumentada web, enfocado en dispositivos móviles",
    tags: ["Vue.js", "AR.js", "A-frame", "Firebase"],
    image: "/images/projects/project-busquedatesoro.png",
    demo: "https://laberinto.experiencia-ar.com.ar/",
  },

  {
    title: "Sitios Para Radios",
    description:
      "Desarrollo de Landing con formulario de contacto, para la marca registrada bajo mi nombre",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    image: "/images/projects/project-sitiospararadios.png",
    demo: "https://sitiospararadios.com.ar/",
  },
  {
    title: "Redtl Radios",
    description:
      "Diversos ajustes en el sitio web, implementación de streaming de video, sección Museo, entre otros.",
    tags: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
    image: "/images/projects/project-redtl.png",
    demo: "https://redtl.com.ar/",
  },
  {
    title: "AM 1330 Rosario",
    description:
      "Diversos ajustes visuales en el sitio web, implementación de streaming de video.",
    tags: ["Wordpress"],
    image: "/images/projects/project-am1330.png",
    demo: "https://am1330rosario.com.ar/",
  },
  {
    title: "Grupogon",
    description:
      "Desarrollo de Sistema para gestión de Prestamos, Clientes, Usuarios, entre otros.",
    tags: ["PHP", "Laravel", "Livewire", "Tailwind", "MySQL"],
    image: "/images/projects/project-grupogon.png",
    demo: "",
  },
  {
    title: "FM Laberinto",
    description:
      "Desarrollo completo de Portal de Noticias autoadministrable",
    tags: ["Laravel", "Livewire", "Filament", "MySQL"],
    image: "/images/projects/project-fmlaberinto.png",
    demo: "",
  },
  {
    title: "APP - FM Laberinto",
    description:
      "Desarrollo de Aplicación para Android, con funcionalidades de reproducción de streaming.",
    tags: ["React Native"],
    image: "/images/projects/project-appfmlaberinto.png",
    demo: "https://play.google.com/store/apps/details?id=com.fmlaberinto",
  },
  {
    title: "APP - FM del Mar",
    description:
      "Desarrollo de Aplicación para Android, con funcionalidades de reproducción de streaming.",
    tags: ["React Native"],
    image: "/images/projects/project-appfmdelmar.png",
    demo: "https://play.google.com/store/apps/details?id=com.fmdelmar",
  },
  {
    title: "Laberinto Las Toninas",
    description:
      "Desarrollo de Sitio dinámico completo con Panel de Administración ",
    tags: ["HTML", "CSS", "Javascript", "React.Js", "Laravel"],
    image: "/images/projects/project-laberintolastoninas.png",
    demo: "https://www.laberintolastoninas.com.ar/",
  },
  {
    title: "Starfeet",
    description:
      "Rediseño de algunas secciones de la web, Utilizando el motor de plantillas de Tiendanube",
    tags: ["Tiendanube"],
    image: "/images/projects/project-starfeet.png",
    demo: "https://www.starfeetoficial.com/",
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, projects.length));
  };

  const showLess = () => {
    setVisibleProjects(6);
  };

  return (
    <section id="proyectos" className="py-20">
      <div className="container">
        <h2 className="mb-16 text-3xl font-bold text-foreground sm:text-4xl">
          Proyectos Destacados
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-border bg-card transition-colors hover:border-primary/50">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Demo</span>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-12 text-center">
          {visibleProjects < projects.length ? (
            <Button onClick={loadMore} variant="outline" className="group">
              Ver más proyectos
              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          ) : (
            <Button onClick={showLess} variant="outline" className="group">
              Ver menos
              <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
