const skillGroups = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / SCSS"],
  },
  {
    category: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Angular (v1–v14)",
      "LitElement",
      "Node.js",
      "Express"
    ],
  },
  {
    category: "Architecture",
    items: [
      "Micro Frontend Architecture",
      "Web Components",
      "Module Federation"
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (S3, ECS, CloudFront, Route 53)",
      "Docker",
      "CI/CD",
      "CodePipeline"
    ],
  },
  {
    category: "Testing",
    items: ["Jest", "Cypress", "Playwright"],
  },
  {
    category: "Practices",
    items: [
      "Responsive Design",
      "A11Y / WCAG",
      "MVC",
      "Code Reviews"
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-12 md:py-32">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-accent sm:mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-3">
          {skillGroups.map(({ category, items }) => (
            <div key={category}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
