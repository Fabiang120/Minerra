export default function Youtubers() {
  type youtuber = {
    name: string;
    description: string;
    subcount: number;
  }
  const youtubers: youtuber[] = [
    {
      name: "VoskCoin",
      description: "ASIC hardware reviews, residential setup guides, and daily profitability breakdowns.",
      subcount: 645,
    },
    {
      name: "Red Panda Mining",
      description: "GPU farm builds, industrial ASIC hosting, and live power draw testing.",
      subcount: 162,
    },
    {
      name: "Son of a Tech",
      description: "In-depth GPU benchmarks, algorithm overclocks, and OS configurations.",
      subcount: 155,
    },
    {
      name: "Rabid Mining",
      description: "CPU and GPU altcoin mining tutorials, node setups, and power efficiency tests.",
      subcount: 82,
    },
    {
      name: "The Hobbyist Miner",
      description: "Guides for home miners focusing on 240V power, thermals, and noise suppression.",
      subcount: 58,
    },
    {
      name: "DJ Mines",
      description: "Large-scale farm builds, containerized ASIC setups, and hardware logistics.",
      subcount: 42,
    },
    {
      name: "Chasing Bitcoin",
      description: "ASIC repair guides, power supply modifications, and immersion cooling experiments.",
      subcount: 36,
    },
  ]
  return (
    <section className="px-8 pt-12 pb-24 mt-8 gap-4 lg:gap-18 grid sm:grid-cols-4 md:grid-cols-8 md:px-12 md:pt-16 xl:grid-cols-12">
      <div className="col-span-full lg:col-start-1 lg:col-end-4 xl:col-start-1 xl:col-end-4 flex flex-col mb-6 lg:mb-0 gap-4">
        <h4 className="text-xs font-medium tracking-[0.15em] text-gold uppercase">HAND-PICKED</h4>
        <h1>Mining creators.</h1>
        <p className="mt-2 max-w-[44ch]">The YouTubers we actually watch, people who teach mining honestly, with real numbers and real rigs.</p>
      </div>
      <div className="col-span-full min-w-0 grid gap-3 md:grid-cols-2 xl:grid-cols-3 lg:col-start-4 lg:col-end-9 xl:col-start-4 xl:col-end-13">
        {youtubers.map((y) => {
          return (
            <div
              key={y.name}
              className="bg-surface rounded-2xl px-6 py-6"
            >
              <div className="flex flex-col items-start gap-3">
                <div className="flex justify-between items-center w-full">
                  <div className="grid size-10 place-items-center rounded-lg bg-[#ff0000]/15 text-[#ff5252] ring-1 ring-[#ff0000]/30">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M23 7.5a4 4 0 00-2.8-2.83C18.4 4 12 4 12 4s-6.4 0-8.2.67A4 4 0 001 7.5 41.6 41.6 0 00.5 12 41.6 41.6 0 001 16.5a4 4 0 002.8 2.83C5.6 20 12 20 12 20s6.4 0 8.2-.67A4 4 0 0023 16.5 41.6 41.6 0 0023.5 12 41.6 41.6 0 0023 7.5zM9.75 15.5v-7l6 3.5-6 3.5z" /></svg>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">{y.subcount}K subs</span>
                </div>
                <h3>{y.name}</h3>
                <p>{y.description}</p>
                <div className="flex items-center gap-1 text-xs font-medium text-foreground/80">
                  Watch on YouTube
                  <svg viewBox="0 0 20 20" fill="currentColor" className="size-3.5"><path fillRule="evenodd" d="M7.21 4.47a.75.75 0 011.06 0l5 5a.75.75 0 010 1.06l-5 5a.75.75 0 11-1.06-1.06L11.69 10 7.21 5.53a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}