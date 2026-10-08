export default function Events() {
  type Event = {
    name: string;
    year: number;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
  };

  const events: Event[] = [
    {
      name: "MINEXCHANGE: SME Annual Conference & Expo",
      year: 2027,
      startDate: "Feb 28",
      endDate: "Mar 03",
      location: "Denver, Colorado, USA",
      description: "One of the world's premier mining engineering conferences, uniting industry leaders, operators, and innovators."
    },
    {
      name: "CIM Convention + Expo",
      year: 2027,
      startDate: "May 02",
      endDate: "May 05",
      location: "Montreal, Quebec, Canada",
      description: "The Canadian Institute of Mining, Metallurgy and Petroleum annual gathering showcasing technological advancements and sustainable mining practices."
    },
    {
      name: "World Mining Congress",
      year: 2026,
      startDate: "Oct 18",
      endDate: "Oct 22",
      location: "Brisbane, Queensland, Australia",
      description: "Global forum discussing the future of mineral resources, automation, extraction technologies, and ESG compliance."
    },
    {
      name: "MinExpo International",
      year: 2028,
      startDate: "Sep 24",
      endDate: "Sep 26",
      location: "Las Vegas, Nevada, USA",
      description: "The massive global showcase for state-of-the-art mining equipment, heavy machinery, and digital fleet management systems."
    }
  ];

  return (
    <section className="px-4 pt-12 pb-24 mt-8 grid gap-6 sm:grid-cols-4 md:grid-cols-8 md:px-6 md:pt-16 xl:grid-cols-12 lg:gap-20">
      <div className="col-span-full lg:px-3 lg:col-start-1 lg:col-end-4 xl:col-start-1 xl:col-end-4 flex flex-col mb-6 lg:mb-0 gap-4">
        <h4 className="text-xs font-medium tracking-[0.15em] text-gold uppercase">AROUND THE WORLD</h4>
        <h1>Mining events.</h1>
        <p className="mt-2 max-w-[44ch]">Conferences, summits and meetups worth your flight. We update this calendar quarterly.</p>
        <a
          href="mailto:hello@hashrate.dev"
          className="w-fit inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-xs font-medium text-foreground ring-1 ring-border hover:ring-white/15"
        >
          Submit an event
        </a>
      </div>
      <div className="col-span-full min-w-0 grid gap-3 lg:col-start-4 lg:col-end-9 xl:col-start-4 xl:col-end-13">
        {events.map((e) => {
          return (
            <div
              key={e.name}
              className="group flex items-stretch gap-5 rounded-2xl bg-surface p-5 ring-1 ring-border transition-all hover:-translate-y-0.5 hover:bg-surface-elevated hover:cursor-pointer hover:ring-white/15"
            >
              <div className="grid w-fit px-6 shrink-0 place-items-center rounded-xl bg-background ring-1 ring-border">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{e.startDate.split(' ')[0]}</div>
                <div className="text-xl font-medium tabular-nums text-foreground">{e.startDate.split(' ')[1]}</div>
              </div>
              <div className="min-w-0 flex-1 flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h5 className="font-medium text-foreground">{e.name}</h5>
                  <span className="text-xs text-muted-foreground">{e.startDate} – {e.endDate}, {e.year}</span>
                </div>
                <div className="text-sm text-muted-foreground flex items-center">
                  {e.location}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{e.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}