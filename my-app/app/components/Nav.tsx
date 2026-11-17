"use client"
import Link from 'next/link';
import { useState, useEffect } from "react";

const links = [
  { href: "/miners", label: "MINERS" },
  { href: "/vendors", label: "VENDORS" },
  { href: "/prices", label: "PRICES" },
  { href: "/youtubers", label: "YOUTUBERS" },
  { href: "/events", label: "EVENTS" },
  { href: "/learn", label: "LEARN" },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300"
      aria-hidden="true"
    >
      <path
        d="M1 1H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        className="origin-center transition-transform duration-300"
        style={{
          transform: open ? "translateY(6px) rotate(45deg)" : "none",
        }}
      />
      <path
        d="M1 7H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        className="transition-opacity duration-300"
        style={{ opacity: open ? 0 : 1 }}
      />
      <path
        d="M1 13H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        className="origin-center transition-transform duration-300"
        style={{
          transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
        }}
      />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  

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
        <div className="hidden items-center gap-3 md:flex">
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
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="block md:hidden"
        >
          <MenuIcon open={open} />
        </button>
      </div>
    </nav>
  );
}