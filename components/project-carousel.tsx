"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import inventoryImage from "@/public/inventory.jpeg";
import btcImage from "@/public/BTC-tracker.jpeg";
import portfolioImage from "@/public/portfolio.jpeg";
import messageImage from "@/public/messages.jpeg";
import hotelImage from "@/public/lasolas-image.jpeg";
import crmImage from "@/public/crmweb.jpeg";
import dashboardImage from "@/public/Dashboard.jpg";

// Datos de ejemplo para los proyectos
const projects = [
  {
    id: 6,
    title: "Omnichannel customer service automation platform with AI. - CRM",
    description:
      "A CRM for user management and message exchange with OpenAI + Whatsapp. Made with Microservices Architecture.",
    image: crmImage,
    technologies: [
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Kafka",
      "whatsapp-web.js",
      "OpenAI API",
      "Redis",
    ],
    githubUrl: "https://github.com/Frynox/",
    liveUrl: "https://github.com/Frynox/",
  },
  {
    id: 7,
    title: "Omnichannel customer service automation platform with AI. - Dashboard",
    description:
      "Dashboard for real-time monitoring and analysis.Its scalable architecture facilitates business growth integration and evaluation.",
    image: dashboardImage,
    technologies: [
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Kafka",
      "whatsapp-web.js",
      "OpenAI API",
      "Redis",
    ],
    githubUrl: "https://github.com/Frynox/",
    liveUrl: "https://github.com/Frynox/",
  },
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
    description: "A BTC/USDT tracker using the Binance API.",
    image: btcImage,
    technologies: ["Angular", "NestJS", "Binance API", "TypeScript"],
    githubUrl: "https://github.com/Frynox/btc-usdt-tracker",
    liveUrl: "https://github.com/Frynox/btc-usdt-tracker",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio website with smooth animations and responsive design.",
    image: portfolioImage,
    technologies: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/Frynox",
    liveUrl: "https://github.com/Frynox",
  },
  {
    id: 4,
    title: "Message board",
    description:
      "A small system designed to send messages through a user, similar to X posts.",
    image: messageImage,
    technologies: ["Angular", "NestJS", "PostgreSQL", "Sequelize"],
    githubUrl: "https://github.com/Frynox/tablero-mensajes-nest-angular",
    liveUrl: "https://github.com/Frynox/tablero-mensajes-nest-angular",
  },
  {
    id: 5,
    title: "Hotel Upgrades",
    description: "Hotel UI upgrades and backend modifications.",
    image: hotelImage,
    technologies: ["Next.js", "NestJS", "Nodemailer", "Zoho Mail", "Railway"],
    githubUrl: "https://www.lasolaslecheria.com",
    liveUrl: "https://www.lasolaslecheria.com",
  },
];

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <Card
              key={project.id}
              className="min-w-full bg-gray-900 border-gray-800"
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="relative h-[200px] sm:h-[250px] md:h-[400px]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-800 text-xs px-2 sm:px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 sm:gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="text-xs sm:text-sm"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 sm:gap-2"
                        >
                          <Github size={14} className="sm:size-16" />
                          Code
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="text-xs sm:text-sm"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 sm:gap-2"
                        >
                          <ExternalLink size={14} className="sm:size-16" />
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
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 border-gray-700 hover:bg-black/80 h-8 w-8 sm:h-10 sm:w-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 border-gray-700 hover:bg-black/80 h-8 w-8 sm:h-10 sm:w-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
      </Button>

      <div className="flex justify-center mt-3 sm:mt-4 gap-1 sm:gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
