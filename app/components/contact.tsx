"use client"

import type React from "react"

import { Mail, Linkedin, Github, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")
  const [statusType, setStatusType] = useState<"success" | "error" | "">("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")
    setStatusType("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("✓ Email sent successfully! I'll get back to you soon.")
        setStatusType("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => {
          setStatus("")
          setStatusType("")
        }, 5000)
      } else {
        setStatus(`✕ ${data.error || "Failed to send email. Please try again."}`)
        setStatusType("error")
      }
    } catch (error) {
      console.log("[v0] Error during submission:", error)
      setStatus("✕ Error sending email. Please check your connection and try again.")
      setStatusType("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Let's Connect</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-card border border-border rounded-lg p-5 sm:p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 transform hover:scale-105 hover:-translate-y-1 animate-fade-in">
            <Mail className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-bold mb-2">Email</h3>
            <a
              href="mailto:milanbm09@gmail.com"
              className="text-primary hover:text-accent transition-colors text-sm sm:text-base break-all"
            >
              milanbm09@gmail.com
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-5 sm:p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 transform hover:scale-105 hover:-translate-y-1 animate-fade-in">
            <Phone className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-bold mb-2">Phone</h3>
            <a href="tel:+9818267642" className="text-primary hover:text-accent transition-colors text-sm sm:text-base">
              +977 9818267642
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-primary/30 rounded-lg p-5 sm:p-8 mb-6 sm:mb-8 backdrop-blur-sm animate-fade-in"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Me a Message</h3>
          <div className="space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 sm:py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base duration-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 sm:py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base duration-300"
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 sm:py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base duration-300 resize-none"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 sm:py-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <span className="animate-spin mr-2">⏳</span>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
            {status && (
              <p
                className={`text-center text-xs sm:text-sm p-3 rounded-lg animate-fade-in font-medium transition-all ${
                  statusType === "success"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>

        <div className="bg-card border border-primary/30 rounded-lg p-5 sm:p-8 text-center animate-fade-in">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Connect with me on social media</h3>
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent transition-all duration-300 text-xs sm:text-base hover:scale-110 transform hover:shadow-lg hover:shadow-primary/30"
            >
              <a href="https://github.com/Milan35959" target="_blank" rel="noopener noreferrer">
                <Github size={16} className="sm:mr-2" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent transition-all duration-300 text-xs sm:text-base hover:scale-110 transform hover:shadow-lg hover:shadow-primary/30"
            >
              <a href="https://linkedin.com/in/milan-budha-magar-87602337b" target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} className="sm:mr-2" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </Button>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 text-xs sm:text-base hover:scale-110 transform hover:shadow-lg hover:shadow-primary/40"
            >
              <a href="#contact">
                <Mail size={16} className="sm:mr-2" />
                <span className="hidden sm:inline">Send Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
