import Link from 'next/link';
const links = [
  { to: "/miners", label: "MINERS" },
  { to: "/vendors", label: "VENDORS" },
  { to: "/prices", label: "PRICES" },
  { to: "/youtubers", label: "YOUTUBERS" },
  { to: "/events", label: "EVENTS" },
  { to: "/learn", label: "LEARN" },
] as const;

export default function Nav() {
  return (
    <nav className="col-span-full w-full">
      <menu className="flex items-center justify-between">
        <Link href="/" aria-label="Minerra home" className="shrink-0">
          <span
            className="text-3xl leading-none text-foreground"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            Minerra
          </span>
        </Link>
        {links.map((l) => (
          <Link
            className="hidden md:block text-sm"
            key={l.to}
            href={l.to}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/getstarted" className="text-sm">
          <button>
            GET STARTED
          </button>
        </Link>
      </menu>
    </nav>
  )
}