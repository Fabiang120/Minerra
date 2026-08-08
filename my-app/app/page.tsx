const stats = [
  { label: "Vendors verified", value: "12" },
  { label: "Rejected this year", value: "47" },
  { label: "ASIC models tracked", value: "60+" },
];

export default function Home() {
  return (
    <section className="px-4 py-[3vw] mt-20 grid gap-8 justify-center items-center sm:grid-cols-4 md:grid-cols-8 md:py-[1.4vw] lg:grid-cols-12">
      <h1 className="col-span-full max-w-[58%] justify-self-center text-center">Verified mining companies, without the uncertainty or scams.</h1>
      <p className="col-span-full max-w-[58%] justify-self-center text-center">Minerra is a personally verified directory of real ASIC suppliers, honest hardware data, and clear guides for people starting out.</p>
      <img src="./image.png" alt="Image of a btc miner" className="col-span-full w-[70%] justify-self-center object-cover aspect-12/5 rounded-md"></img>
      {/* Stats strip */}
      <div className="col-span-full mt-12 grid rounded-md bg-border max-w-6xl ring-1 ring-border sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-background p-6 text-left">
            <div className="text-xl font-medium text-foreground tabular-nums md:text-3xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
