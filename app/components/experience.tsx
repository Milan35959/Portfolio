"use client"

import { Card } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      role: "Junior Front End Developer",
      company: "Dignep Pvt. Ltd.",
      location: "Kathmandu",
      period: "January 2025 - Present",
      description: "Developing responsive web applications and maintaining frontend codebases using React and Next.js",
    },
    {
      role: "Front End Developer Intern",
      company: "Dignep Group Pvt. Ltd.",
      location: "Kathmandu",
      period: "August 2024 - January 2025",
      description:
        "Collaborated on frontend development projects, implementing UI components and optimizing user experience",
    },
  ]

  const education = [
    {
      degree: "Bachelor in Computer Application",
      institution: "Kantipur City College",
      location: "Kathmandu",
      period: "September 2020 - September 2025",
    },
    {
      degree: "NEB",
      institution: "Little Angels' College",
      location: "Lalitpur",
      period: "May 2018 - June 2020",
    },
  ]

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Work Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <Card key={idx} className="bg-card border-border p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-primary">{exp.role}</h3>
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="font-semibold text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <Card key={idx} className="bg-card border-border p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-primary">{edu.degree}</h3>
                    <span className="text-xs text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="font-semibold text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
