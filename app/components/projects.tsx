"use client"

import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"

const techIcons: Record<string, string> = {
  React: "⚛️",
  "Next.js": "▲",
  TypeScript: "TS",
  "Tailwind CSS": "🎨",
  "Node.js": "⬢",
  OpenAI: "✨",
  Claude: "🤖",
  Prisma: "🔷",
  PostgreSQL: "🐘",
  Supabase: "🟢",
  Inngest: "⚡",
  "AI SDK": "🧠",
  "Go/Golang": "🐹",
  Laravel: "🔴",
  MySQL: "🐬",
}

export function Projects() {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null)

  const projects = [
    {
      title: "Certifyi AI",
      description:
        "AI-powered Governance, Risk, and Compliance (GRC) solution that simplifies compliance, mitigates risks, and builds trust through innovative technology.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Go/Golang", "PostgreSQL", "OpenAI", "Claude"],
      link: "https://certifyi.ai",
      github: "#",
    },
    {
      title: "Inficurex",
      description:
        "NDIS management software that transforms healthcare delivery for providers through innovative, user-centric technology enabling better quality care.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Laravel", "MySQL", "Supabase"],
      link: "https://inficurex.com",
      github: "#",
    },
    {
      title: "Spiny Babbler 100",
      description:
        "AI-powered SaaS application that generates full fetch websites with complete codebase using system prompts and user input.",
      technologies: ["Next.js", "React", "Inngest", "AI SDK", "Tailwind CSS", "TypeScript"],
      link: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-fade-in">Featured Projects</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Building scalable applications that solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-primary/20 animate-fade-in rounded-lg transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-4 sm:p-6 h-full flex flex-col justify-between">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2 sm:pt-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <div key={i} className="relative group/tech transition-all duration-300 cursor-default">
                        <span className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 bg-secondary/40 text-accent rounded-full hover:bg-secondary/60 transition-all duration-300 flex items-center gap-1 font-medium hover:shadow-md">
                          <span className="text-base sm:text-lg">{techIcons[tech] || "•"}</span>
                          <span className="hidden sm:inline">{tech}</span>
                          <span className="sm:hidden">{tech.slice(0, 3)}</span>
                        </span>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover/tech:block bg-card border border-primary rounded-lg px-2.5 py-1.5 text-xs text-foreground shadow-lg z-50 animate-fade-in whitespace-nowrap">
                          {tech}
                        </div>
                      </div>
                    ))}
                    {project.technologies.length > 3 && (
                      <div className="relative group/more">
                        <span className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 bg-primary/30 text-primary rounded-full hover:bg-primary/50 transition-all duration-300 cursor-pointer font-semibold hover:shadow-md transform hover:scale-110">
                          +{project.technologies.length - 3}
                        </span>
                        <div className="absolute bottom-full right-0 mb-2 hidden group-hover/more:block bg-card border border-primary rounded-lg p-3 text-xs text-foreground shadow-xl z-50 animate-fade-in min-w-max">
                          <div className="font-semibold mb-2 text-primary">More Technologies:</div>
                          <div className="space-y-2">
                            {project.technologies.slice(3).map((tech, i) => (
                              <div
                                key={i}
                                className="text-muted-foreground flex items-center gap-2 hover:text-foreground transition-colors"
                              >
                                <span className="text-base">{techIcons[tech] || "•"}</span>
                                <span>{tech}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 sm:gap-3 pt-4 sm:pt-6 mt-auto flex-wrap">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:text-accent transition-all duration-300 group/link hover:scale-110 transform hover:shadow-md px-2 py-1 rounded hover:bg-primary/10"
                    >
                      Visit{" "}
                      <ExternalLink
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform duration-300"
                      />
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:text-accent transition-all duration-300 group/link hover:scale-110 transform hover:shadow-md px-2 py-1 rounded hover:bg-primary/10"
                    >
                      Code{" "}
                      <Github size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
