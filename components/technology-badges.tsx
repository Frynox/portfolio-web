"use client"

import type React from "react"

import { Database, Server, Code, FileJson, Globe, Cpu, Box, Coffee } from "lucide-react"

type Technology = {
  name: string
  icon: React.ReactNode
  color: string
  textColor: string
  borderColor: string
}

const technologies: Technology[] = [
  {
    name: "PostgreSQL",
    icon: <Database size={16} />,
    color: "#336791",
    textColor: "white",
    borderColor: "#1a3c5a",
  },
  {
    name: "MongoDB",
    icon: <Database size={16} />,
    color: "#4DB33D",
    textColor: "white",
    borderColor: "#3a8a2e",
  },
  {
    name: "JavaScript",
    icon: <FileJson size={16} />,
    color: "#F7DF1E",
    textColor: "black",
    borderColor: "#c4b018",
  },
  {
    name: "Node.js",
    icon: <Server size={16} />,
    color: "#339933",
    textColor: "white",
    borderColor: "#267326",
  },
  {
    name: "HTML",
    icon: <Globe size={16} />,
    color: "#E34F26",
    textColor: "white",
    borderColor: "#b33d1e",
  },
  {
    name: "CSS",
    icon: <Code size={16} />,
    color: "#1572B6",
    textColor: "white",
    borderColor: "#105a8c",
  },
  {
    name: "React.js",
    icon: <div className="text-xs font-bold">⚛️</div>,
    color: "#61DAFB",
    textColor: "black",
    borderColor: "#4db0c7",
  },
  {
    name: "Next.js",
    icon: <div className="text-xs font-bold">N</div>,
    color: "#000000",
    textColor: "white",
    borderColor: "#333333",
  },
  {
    name: "TypeScript",
    icon: <div className="text-xs font-bold">TS</div>,
    color: "#3178C6",
    textColor: "white",
    borderColor: "#265e9c",
  },
  {
    name: "Angular",
    icon: <div className="text-xs font-bold">A</div>,
    color: "#DD0031",
    textColor: "white",
    borderColor: "#a80025",
  },
  {
    name: "NestJS",
    icon: <div className="text-xs font-bold">N</div>,
    color: "#E0234E",
    textColor: "white",
    borderColor: "#b01c3e",
  },
  {
    name: "Docker",
    icon: <Box size={16} />,
    color: "#2496ED",
    textColor: "white",
    borderColor: "#1c77bd",
  },
  {
    name: "Redis",
    icon: <Database size={16} />,
    color: "#DC382D",
    textColor: "white",
    borderColor: "#b02c24",
  },
  {
    name: "Kafka",
    icon: <Cpu size={16} />,
    color: "#231F20",
    textColor: "white",
    borderColor: "#444444",
  },
  {
    name: "Python",
    icon: <Coffee size={16} />,
    color: "#3776AB",
    textColor: "white",
    borderColor: "#2c5d88",
  },
]

interface TechnologyBadgesProps {
  className?: string
  limit?: number
}

export function TechnologyBadges({ className = "", limit }: TechnologyBadgesProps) {
  const displayTechnologies = limit ? technologies.slice(0, limit) : technologies

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {displayTechnologies.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-transform hover:scale-105"
          style={{
            backgroundColor: tech.color,
            color: tech.textColor,
            border: `1px solid ${tech.borderColor}`,
          }}
        >
          {tech.icon}
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  )
}

