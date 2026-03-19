export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/daniel-bradburry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="mailto:me@danielbradburry.com"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Email
            </a>
            <a
              href="/DanielBradburry.docx"
              download
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Resume
            </a>
          </div>

          <p className="text-xs text-muted/60">
            Daniel Bradburry · McKinney, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
