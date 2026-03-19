const experiences = [
  {
    period: "2024 — Present",
    title: "Senior UI Developer, Principal Associate",
    company: "Capital One",
    bullets: [
      "Independently architected and delivered multiple greenfield micro frontend applications, each recognized with internal awards.",
      "Led migration of a legacy Angular application to a modern LitElement-based MFE with modular, reusable component patterns.",
      "Refactored core codebases to enforce single-responsibility principles and eliminate algorithmic inefficiencies.",
      "Expanded E2E test coverage on a high-traffic auto dealership platform.",
    ],
    tech: "React · LitElement · Angular · Jest · Cypress · Module Federation",
  },
  {
    period: "2023 — 2024",
    title: "Lead Engineer",
    company: "Vanguard",
    bullets: [
      "Led a cross-functional team of 6 developers, setting coding standards and mentoring on clean architecture.",
      "Designed modular card components within an Angular micro frontend architecture.",
      "Refactored Node.js backend services for significant latency and throughput improvements.",
    ],
    tech: "Angular · Node.js · TypeScript · MFE Architecture",
  },
  {
    period: "2021 — 2023",
    title: "Senior Full-Stack Developer",
    company: "Upstart",
    bullets: [
      "Built key features for an auto loan origination platform and a CMS managing 50+ client sites.",
      "Led accessibility improvements and engineered a dynamic SCSS recompilation pipeline for white-label theming at scale.",
      "Developed trade-in payoff integrations and maintained React Native tablet applications.",
    ],
    tech: "React · React Native · Node.js · SCSS · Jest",
  },
  {
    period: "2020 — 2021",
    title: "Senior UI Developer, Principal Associate",
    company: "Capital One",
    bullets: [
      "UI Lead on the prequalified calculator project using micro frontends and web components.",
      "Drove Angular v7–v10 migration across multiple applications.",
    ],
    tech: "Angular 7–11 · LitElement · Web Components · Jest",
  },
  {
    period: "2018 — 2020",
    title: "Senior UI Developer",
    company: "Dell Technologies",
    contract: true,
    bullets: [
      "Refactored Dell.com product detail page and checkout components at enterprise scale.",
      "Built custom Angular directives for address validation across checkout flows.",
    ],
    tech: "Angular 1.5 & 5 · Jasmine",
  },
  {
    period: "2016 — 2018",
    title: "Senior UI Developer",
    company: "Disney Parks and Resorts",
    contract: true,
    bullets: [
      "Built a custom date range picker and refactored core SPA templates for Disney's parks booking platform.",
    ],
    tech: "Angular 1.5 · Jasmine · Grunt",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-12 md:py-32">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-accent sm:mb-12">
          Experience
        </h2>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group rounded-lg border border-border p-5 transition-colors hover:border-border-hover sm:p-6 md:p-8"
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-muted sm:hidden">
                  {exp.period}
                </span>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-muted sm:text-base">
                      {exp.company}
                      {exp.contract && (
                        <span className="ml-1 text-xs text-muted/60 sm:text-sm">
                          (Contract)
                        </span>
                      )}
                    </p>
                  </div>
                  <span className="hidden shrink-0 font-mono text-xs text-muted sm:inline">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="mt-3 space-y-2 sm:mt-4">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="relative pl-4 text-xs leading-relaxed text-muted sm:text-sm before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent/50 sm:before:top-2.5"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              <p className="mt-3 font-mono text-[11px] text-muted/70 sm:mt-4 sm:text-xs">
                {exp.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
