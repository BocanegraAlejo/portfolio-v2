"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Next.js",
    "Node.js",
    "Express",
    "Astro",
    "Mysql",
    "Firebase",
    "Php",
    "Laravel",
    "Codeigniter",
    "Wordpress",
    "Livewire",
    "Bootstrap",
    "Tailwind",
    "REST APIs",
    "Git",
    "Docker",
    "Google Appscript"
  ]

  return (
    <section id="habilidades" className="py-20 bg-zinc-900">
      <div className="container">
        <h2 className="mb-16 text-3xl font-bold text-white sm:text-4xl">Habilidades</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="inline-block rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-500">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

