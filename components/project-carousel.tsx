"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import inventoryImage from "@/public/inventory.jpeg";
import btcImage from "@/public/BTC-tracker.jpeg";
import portfolioImage from "@/public/portfolio.jpeg";
import messageImage from "@/public/messages.jpeg";

// Datos de ejemplo para los proyectos
const projects = [
  {
    id: 1,
    title: "Inventory Management",
    description:
      "An inventory management platform with dashboard, login system, product categories, etc.",
    image: inventoryImage,
    technologies: ["Angular", "NestJS", "PostgreSQL", "Node.js"],
    githubUrl: "https://github.com/Frynox/gestion-inventario",
    liveUrl: "https://github.com/Frynox/gestion-inventario",
  },
  {
    id: 2,
    title: "BTC/USDT Tracker",
    description:
      "A BTC/USDT tracker using the Binance API.",
    image: btcImage,
    technologies: ["Angular", "NestJS", "Binance API", "TypeScript"],
    githubUrl: "https://github.com/Frynox/btc-usdt-tracker",
    liveUrl: "https://github.com/Frynox/btc-usdt-tracker",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio website with smooth animations and responsive design.",
    image: portfolioImage,
    technologies: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/Frynox",
    liveUrl: "https://github.com/Frynox",
  },
  {
    id: 4,
    title: "Message board",
    description: "A small system designed to send messages through a user, similar to X posts.",
    image: messageImage,
    technologies: ["Angular", "NestJS", "PostgreSQL", "Sequelize"],
    githubUrl: "https://github.com/Frynox/tablero-mensajes-nest-angular",
    liveUrl: "https://github.com/Frynox/tablero-mensajes-nest-angular",
  },
]

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <Card key={project.id} className="min-w-full bg-gray-900 border-gray-800">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-[300px] md:h-[400px]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-gray-800 text-xs px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github size={16} />
                          Código
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-gray-700 hover:bg-black/80"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-gray-700 hover:bg-black/80"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center mt-4 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-600"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

