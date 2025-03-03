import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { ProjectCarousel } from "@/components/project-carousel"
import { Github } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <header className="py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              PORTAFOLIO
            </Link>
          </div>
        </header>

        <section className="py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              FULLSTACK
              <br />
              <span className="text-gray-500">DEVELOPER</span>
            </h1>
            <div className="mt-4 text-sm text-gray-400">
              <p>Neil Montaño</p>
            </div>
            <div className="mt-16">
              <p className="text-gray-400 max-w-2xl">  SCALABLE WEB SOLUTIONS.</p>
              <p className="mt-8 text-gray-400 max-w-2xl">
              Full-stack developer driven by a passion for building efficient, secure applications that stand the test of time. My expertise spans the entire web development stack, where I blend creative front-end solutions with robust back-end architecture.
I specialize in crafting scalable systems that grow alongside business needs while maintaining optimal performance. My approach prioritizes clean code, security-first design, and performance optimization at every step of the development process.
Constantly pushing technical boundaries, I transform complex challenges into elegant solutions that make a difference in today's digital landscape.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8">FEATURED PROJECTS</h2>
          <ProjectCarousel />
        </section>

        <section id="contact" className="py-20 my-20 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-12 text-center">CONTACTO</h2>
          <div className="max-w-2xl mx-auto w-full bg-gray-900/50 p-10 rounded-lg border border-gray-800">
            <p className="text-gray-300 mb-8 text-center text-lg">
              ¿Interesado en trabajar juntos? Contáctame a través de los siguientes medios:
            </p>
            <div className="flex flex-col items-center gap-6">
              <p className="text-xl">
                Email:{" "}
                <a href="mailto:neiljosuemontano@gmail.com" className="text-white hover:underline">
                  neiljosuemontano@gmail.com
                </a>
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Link href="https://github.com/Frynox" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Github size={20} />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/neil-montaño/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-gray-800 mt-20">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">© 2025.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}

