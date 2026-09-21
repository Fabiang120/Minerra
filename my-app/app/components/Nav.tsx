"use client"
import Link from 'next/link';

const links = [
  { href: "/miners", label: "MINERS" },
  { href: "/vendors", label: "VENDORS" },
  { href: "/prices", label: "PRICES" },
  { href: "/youtubers", label: "YOUTUBERS" },
  { href: "/events", label: "EVENTS" },
  { href: "/learn", label: "LEARN" },
] as const;

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklch, var(--gold) 45%, transparent), transparent)",
        }}
      />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/" aria-label="Minerra home" className="shrink-0">
          <span
            className="text-3xl leading-none text-foreground"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            Minerra
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/getstarted"
          className="hidden shrink-0 border border-border/80 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-foreground transition-colors hover:border-gold hover:text-gold md:inline-block"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}