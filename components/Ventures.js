export default function Ventures() {
  return (
    <section id="ventures" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-12 md:py-32">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-accent sm:mb-12">
          Ventures
        </h2>

        <div className="rounded-lg border border-accent/30 bg-surface p-5 sm:p-6 md:p-10">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                CPJ Association Management
              </h3>
              <p className="text-sm text-accent sm:text-base">Founder & Lead Engineer</p>
            </div>
            <span className="shrink-0 font-mono text-xs text-muted">
              2018 — Present
            </span>
          </div>

          <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted sm:mt-6 sm:space-y-4 sm:text-sm">
            <p>
              Founded and architected a production SaaS platform serving{" "}
              <span className="text-foreground">100+ association clients</span>{" "}
              with tools for online awards programs, event management, and Parade
              of Homes tours.
            </p>
            <p>
              Built a full-stack application using React, Next.js, and
              Node.js/Express with role-based auth, RESTful APIs, and a
              multi-tenant CMS. Designed and operates AWS cloud infrastructure
              with CI/CD pipelines for zero-downtime deployments.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MySQL",
              "AWS",
              "CI/CD",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded border border-accent/20 px-3 py-1 font-mono text-xs text-accent/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
