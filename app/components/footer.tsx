export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-primary">Milan Budha Magar</h3>
            <p className="text-sm text-muted-foreground">Frontend Developer & Full Stack Enthusiast</p>
          </div>

          <div className="text-center md:text-right mt-6 md:mt-0">
            <p className="text-sm text-muted-foreground">© {currentYear} Milan Budha Magar. All rights reserved.</p>
            <p className="text-xs text-muted-foreground mt-2">Crafted with React & Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
