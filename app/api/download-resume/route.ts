import { NextResponse } from "next/server"
import { jsPDF } from "jspdf"

export async function GET() {
  try {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    })

    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 12
    const contentWidth = pageWidth - 2 * margin
    let yPosition = margin

    doc.setFillColor(255, 255, 255) // White background
    doc.rect(0, 0, pageWidth, pageHeight, "F")

    // Header - Name
    doc.setTextColor(0, 0, 0) // Black text
    doc.setFontSize(24)
    doc.setFont("Helvetica", "bold")
    doc.text("Milan Budha", margin, yPosition)
    yPosition += 7
    doc.text("Magar", margin, yPosition)
    yPosition += 8

    // Subtitle
    doc.setFontSize(11)
    doc.setFont("Helvetica", "normal")
    doc.setTextColor(80, 80, 80)
    doc.text("Frontend Developer", margin, yPosition)
    yPosition += 10

    // Contact Info
    doc.setFontSize(9)
    doc.setTextColor(100, 100, 100)
    doc.text("Email: milanbm09@gmail.com | Phone: +977-9818267642", margin, yPosition)
    yPosition += 4
    doc.text(
      "Location: Kathmandu, Nepal | GitHub: Milan35959 | LinkedIn: milan-budha-magar-87602337b",
      margin,
      yPosition,
    )
    yPosition += 10

    // Divider line
    doc.setDrawColor(150, 150, 150)
    doc.line(margin, yPosition, pageWidth - margin, yPosition)
    yPosition += 6

    // Summary Section
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(11)
    doc.setFont("Helvetica", "bold")
    doc.text("SUMMARY", margin, yPosition)
    yPosition += 5

    doc.setFontSize(9)
    doc.setFont("Helvetica", "normal")
    doc.setTextColor(60, 60, 60)
    const summaryText =
      "Front-end developer with strong expertise in React, Next.js, and TypeScript, and working knowledge across the full stack including Node.js, Express, PostgreSQL, Prisma, tRPC, and Docker. Skilled in building responsive, scalable applications with clean UI/UX, efficient API integrations, and robust error handling."
    const splitSummary = doc.splitTextToSize(summaryText, contentWidth - 4)
    doc.text(splitSummary, margin + 2, yPosition)
    yPosition += splitSummary.length * 3.3 + 4

    // Skills Section
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(11)
    doc.setFont("Helvetica", "bold")
    doc.text("SKILLS & TECHNOLOGIES", margin, yPosition)
    yPosition += 5

    doc.setFontSize(9)
    doc.setFont("Helvetica", "normal")
    doc.setTextColor(60, 60, 60)
    const skills = [
      "Frontend: React JS, Next.js, TypeScript, Tailwind CSS, Responsive Design",
      "Backend: Node.js, Express, PostgreSQL, MySQL, Prisma ORM, Laravel",
      "Tools & Services: Git, Docker, Inngest, tRPC, Neon DB, Supabase",
      "AI/Advanced: OpenAI Integration, Claude API, Prompt Engineering, AI Model Integration",
    ]
    skills.forEach((skill) => {
      doc.text(`• ${skill}`, margin + 2, yPosition)
      yPosition += 3.5
    })
    yPosition += 2

    // Experience Section
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(11)
    doc.setFont("Helvetica", "bold")
    doc.text("WORK EXPERIENCE", margin, yPosition)
    yPosition += 5

    doc.setFontSize(9)
    doc.setFont("Helvetica", "bold")
    doc.setTextColor(0, 0, 0)
    doc.text("Junior Frontend Developer", margin + 2, yPosition)
    doc.setFont("Helvetica", "normal")
    doc.setTextColor(100, 100, 100)
    doc.setFontSize(8)
    doc.text("Dignep Pvt. Ltd. | January 2025 - Present", margin + 2, yPosition + 4)
    yPosition += 8

    doc.setFont("Helvetica", "bold")
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    doc.text("Frontend Developer Intern", margin + 2, yPosition)
    doc.setFont("Helvetica", "normal")
    doc.setTextColor(100, 100, 100)
    doc.setFontSize(8)
    doc.text("Dignep Group Pvt. Ltd. | August 2024 - January 2025", margin + 2, yPosition + 4)
    yPosition += 8

    // Education Section
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(11)
    doc.setFont("Helvetica", "bold")
    doc.text("EDUCATION", margin, yPosition)
    yPosition += 5

    doc.setFont("Helvetica", "bold")
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    doc.text("Bachelor in Computer Application", margin + 2, yPosition)
    doc.setFont("Helvetica", "normal")
    doc.setTextColor(100, 100, 100)
    doc.setFontSize(8)
    doc.text("Kantipur City College | September 2020 - September 2025", margin + 2, yPosition + 4)
    yPosition += 8

    doc.setFont("Helvetica", "bold")
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    doc.text("NEB", margin + 2, yPosition)
    doc.setFont("Helvetica", "normal")
    doc.setTextColor(100, 100, 100)
    doc.setFontSize(8)
    doc.text("Little Angels' College | May 2018 - June 2020", margin + 2, yPosition + 4)
    yPosition += 8

    doc.setFont("Helvetica", "bold")
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    doc.text("SEE", margin + 2, yPosition)
    doc.setFont("Helvetica", "normal")
    doc.setTextColor(100, 100, 100)
    doc.setFontSize(8)
    doc.text("White Heaven Academy | Kathmandu", margin + 2, yPosition + 4)
    yPosition += 10

    // Projects Section
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(11)
    doc.setFont("Helvetica", "bold")
    doc.text("FEATURED PROJECTS", margin, yPosition)
    yPosition += 5

    doc.setFontSize(9)
    const projects = [
      {
        name: "Certifyi AI",
        description:
          "AI-powered Governance, Risk, and Compliance (GRC) solution that simplifies compliance, mitigates risks, and builds trust through innovative technology.",
        tech: "React, Next.js, TypeScript, Go, PostgreSQL, OpenAI",
      },
      {
        name: "Inficurex",
        description:
          "NDIS management software that transforms healthcare delivery for providers through innovative, user-centric technology.",
        tech: "React, Next.js, TypeScript, Laravel, MySQL, Responsive Design",
      },
      {
        name: "Spiny Babbler 100",
        description:
          "AI-powered SaaS application that generates full fetch websites with complete codebase using system prompts.",
        tech: "Next.js, React, Inngest, AI Integration, Claude API, Tailwind CSS",
      },
    ]

    projects.forEach((project) => {
      doc.setFont("Helvetica", "bold")
      doc.setTextColor(0, 0, 0)
      doc.text(project.name, margin + 2, yPosition)
      yPosition += 4

      doc.setFont("Helvetica", "normal")
      doc.setTextColor(60, 60, 60)
      doc.setFontSize(8)
      const descriptionText = doc.splitTextToSize(project.description, contentWidth - 6)
      doc.text(descriptionText, margin + 4, yPosition)
      yPosition += descriptionText.length * 2.8 + 1

      doc.setTextColor(100, 100, 100)
      const techText = doc.splitTextToSize(`Technologies: ${project.tech}`, contentWidth - 6)
      doc.text(techText, margin + 4, yPosition)
      yPosition += techText.length * 2.5 + 4

      doc.setFontSize(9)
    })

    // Generate PDF
    const pdfBuffer = Buffer.from(doc.output("arraybuffer"))

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Milan-Budha-Magar-Resume.pdf"',
      },
    })
  } catch (error) {
    console.error("PDF Generation Error:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}
