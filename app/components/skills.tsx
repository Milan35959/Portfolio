"use client"

import { Card } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "Go/Golang", "Laravel", "MySQL"],
    },
    {
      category: "Tools & Services",
      skills: ["Git/GitHub", "Docker", "Supabase", "Neon DB", "Inngest", "Clerk"],
    },
    {
      category: "AI & Advanced",
      skills: ["OpenAI", "Claude API", "AI SDK", "Prompt Engineering", "API Integration"],
    },
  ]

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">Experienced with modern tools and frameworks</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
