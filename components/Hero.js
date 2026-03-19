export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-28 pb-16 sm:pt-32 sm:pb-24 md:px-12 md:pt-44 md:pb-32">
      <p className="mb-3 font-mono text-sm text-accent sm:mb-4">Hi, my name is</p>
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl">
        Daniel Bradburry.
      </h1>
      <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-muted sm:text-4xl md:text-6xl">
        I build things for the web.
      </h2>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
        Senior UI/Full-Stack Engineer with 10+ years of experience specializing
        in micro frontend architecture, React, and Node.js. Currently at{" "}
        <span className="text-foreground">Capital One</span>.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
        <a
          href="#experience"
          className="rounded border border-accent px-6 py-3 text-center text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
        >
          View my work
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-bradburry"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-border px-6 py-3 text-center text-sm font-medium text-muted transition-colors hover:border-foreground hover:text-foreground"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
