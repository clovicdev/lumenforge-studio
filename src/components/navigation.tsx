import { ArrowUpRight } from "lucide-react";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 shadow-lg shadow-foreground/5 backdrop-blur-2xl"
      >
        <a href="#" className="focus-ring rounded-full text-base font-semibold tracking-normal">
          Lumenforge
        </a>
        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-foreground/5 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-[#3073ff]"
        >
          Brief
          <ArrowUpRight aria-hidden className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}
