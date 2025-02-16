import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import ContactForm from "@/components/ContactForm"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <section id="contacto" className="py-20">
        <div className="container">
          <h2 className="mb-16 text-3xl font-bold sm:text-4xl">Contacto</h2>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}

