const stats = [
  { label: "Vendors verified", value: "12" },
  { label: "Rejected this year", value: "47" },
  { label: "ASIC models tracked", value: "60+" },
];

export default function Home() {
  return (
    <section className="px-12 py-[3vw] mt-20 grid gap-8 justify-center items-center sm:grid-cols-4 md:grid-cols-8 md:py-[1.4vw] xl:px-0 xl:grid-cols-12">
      <h1 className="col-span-full max-w-[90%] justify-self-center text-center md:max-w-[80%] lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-11">Verified mining companies, without the uncertainty or scams.</h1>
      <p className="col-span-full  max-w-[80%] justify-self-center text-center md:max-w-[70%] lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-11">Minerra is a personally verified directory of real ASIC suppliers, honest hardware data, and clear guides for people starting out.</p>
      <img src="./image.png" alt="Image of a btc miner" className="col-span-full justify-self-center object-cover rounded-md md:aspect-12/5 lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-11"></img>
      {/* Stats strip */}
      <div className="col-span-full mt-12 grid gap-px overflow-hidden rounded-md bg-darksteel ring-1 ring-darksteel sm:grid-cols-3 max-w-6xl lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-11">
        {stats.map((s) => (
          /* Card background set to solid black */
          <div key={s.label} className="bg-background p-6 text-left">
            <div className="text-xl font-medium tabular-nums md:text-3xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-steel">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
