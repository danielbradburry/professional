"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#ventures", label: "Ventures" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="flex h-16 items-center justify-between">
          <div />

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:me@danielbradburry.com"
              className="rounded border border-accent px-4 py-1.5 text-sm text-accent transition-colors hover:bg-accent hover:text-background"
            >
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="border-t border-border bg-background/95 backdrop-blur-md px-6 py-6">
          <div className="flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-muted transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:me@danielbradburry.com"
              onClick={() => setMenuOpen(false)}
              className="w-fit rounded border border-accent px-4 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-background"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
