import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#top" className="text-base font-semibold text-white transition hover:text-mint">
          Kalyaan
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-white/15 text-white transition hover:border-mint hover:text-mint md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-mint focus:outline-none focus:ring-2 focus:ring-mint/60"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      {isOpen ? (
        <div className="border-t border-white/10 bg-ink px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-mint focus:outline-none focus:ring-2 focus:ring-mint/60"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
