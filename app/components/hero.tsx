"use client"

import { Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Hero() {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownloadResume = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/download-resume")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Milan-Budha-Magar-Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download failed:", error)
      alert("Failed to download resume. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-30" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-balance">
                Milan Budha <span className="text-primary">Magar</span>
              </h1>
              <p className="text-xl text-primary font-semibold">Frontend Developer</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about building beautiful, responsive web applications with React, Next.js, and modern
                technologies. Specialized in creating scalable solutions with clean UI/UX and robust error handling.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleDownloadResume}
                disabled={isLoading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center gap-2 cursor-pointer"
              >
                <Download size={18} />
                {isLoading ? "Generating..." : "Download Resume"}
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8">
              <a
                href="https://github.com/Milan35959"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary/20 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/milan-budha-magar-87602337b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary/20 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#contact"
                className="p-3 rounded-lg bg-secondary/20 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Visual */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl border border-primary/30 p-8 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-primary mb-4">👨‍💻</div>
                  <p className="text-sm text-muted-foreground">Frontend Developer</p>
                  <p className="text-xs text-muted-foreground mt-2">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
