import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { ProjectCarousel } from "@/components/project-carousel"
import { Github } from "lucide-react"
import { TechnologyBadges } from "@/components/technology-badges"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <header className="py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold">
              PORTAFOLIO
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <Link href="/" className="text-sm sm:text-l font-bold mt-1">
              NEIL MONTANO
            </Link>
          </div>
        </header>

        <section className="py-12 sm:py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight">
              FULLSTACK
              <br />
              <span className="text-gray-500">DEVELOPER</span>
            </h1>
            <div className="mt-6 sm:mt-10">
              <p className="text-gray-400 max-w-2xl text-sm sm:text-base">SCALABLE WEB SOLUTIONS.</p>
              <p className="mt-4 sm:mt-8 text-gray-400 max-w-2xl text-sm sm:text-base">
                Full-stack developer driven by a passion for building efficient, secure applications that stand the test of time. My expertise spans the entire web development stack, where I blend creative front-end solutions with robust back-end architecture.
                I specialize in crafting scalable systems that grow alongside business needs while maintaining optimal performance. My approach prioritizes clean code, security-first design, and performance optimization at every step of the development process.
                Constantly pushing technical boundaries, I transform complex challenges into elegant solutions that make a difference in todays digital landscape.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-10 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">FEATURED PROJECTS</h2>
          <ProjectCarousel />
        </section>


        {/* Tecnologías */}
        <section className="py-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-8">TECHNOLOGIES</h2>
          <div className="bg-gray-900/30 p-8 rounded-lg border border-gray-800">
            <TechnologyBadges />
          </div>
        </section>

        <section id="contact" className="py-10 sm:py-20 my-10 sm:my-20 flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">CONTACT</h2>
          <div className="max-w-2xl mx-auto w-full bg-gray-900/50 p-6 sm:p-10 rounded-lg border border-gray-800">
            <p className="text-gray-300 mb-6 sm:mb-8 text-center text-base sm:text-lg">
              Interested in working together? Contact me through the following means:
            </p>
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <p className="text-lg sm:text-xl">
                Email:{" "}
                <a href="mailto:neiljosuemontano@gmail.com" className="text-white hover:underline text-sm sm:text-base break-all">
                  neiljosuemontano@gmail.com
                </a>
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto justify-center">
                <Link href="https://github.com/Frynox" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" size="default" className="gap-2 w-full sm:w-auto">
                    <Github size={18} />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/neil-montaño/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" size="default" className="gap-2 w-full sm:w-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
                <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" size="default" className="gap-2 w-full sm:w-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    CV
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-6 sm:py-8 border-t border-gray-800 mt-10 sm:mt-20">
          <div className="flex justify-between items-center">
            <p className="text-xs sm:text-sm text-gray-500"> 2025.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
