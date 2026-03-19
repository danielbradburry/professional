export default function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-12 md:py-32">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-accent sm:mb-12">
          About
        </h2>

        <div className="grid gap-5 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              I&apos;ve spent the last decade building large-scale web applications
              at companies like Capital One, Vanguard, Upstart, Dell, and Disney.
              My specialty is{" "}
              <span className="text-foreground">
                micro frontend architecture
              </span>{" "}
              — I&apos;ve been repeatedly tapped to independently architect and
              deliver greenfield MFE rewrites, earning multiple internal
              recognition awards for execution quality.
            </p>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              I combine deep expertise in React, Angular, Next.js, and Node.js
              with a track record of measurable performance, accessibility, and
              code quality improvements. Outside of my day job, I founded and
              operate{" "}
              <span className="text-foreground">
                CPJ Association Management
              </span>{" "}
              — a production SaaS platform serving 100+ clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
