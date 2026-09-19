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
    <nav className="col-span-full w-full xl:col-start-2 xl:col-end-12">
      <menu className="flex items-center justify-between w-full">
        <Link href="/" aria-label="Minerra home" className="shrink-0">
          <span
            className="text-3xl leading-none text-foreground"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            Minerra
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6 mx-auto">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className="text-sm hover:text-foreground text-muted-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/getstarted" className="text-sm">
          <button className="border-steel border-2 px-4 py-1">
            GET STARTED
          </button>
        </Link>
      </menu>
    </nav>
  )
}