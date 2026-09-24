const stats = [
  { label: "Vendors verified", value: "12" },
  { label: "Rejected this year", value: "47" },
  { label: "ASIC models tracked", value: "60+" },
];

export default function Home() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mx-auto mb-8 max-w-[22ch] text-balance text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
          Verified mining hardware, without the noise or scams.
        </h1>
        <p className="mx-auto mb-16 max-w-[56ch] text-pretty text-base leading-relaxed text-muted-foreground">
          Minerra is a personally verified directory of real ASIC suppliers, honest hardware data, and clear guides for people starting out.
        </p>

        <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl bg-surface outline outline-1 -outline-offset-1 outline-border md:aspect-[21/9]">
          <img
            src="./image.png"
            alt="Premium bitcoin ASIC mining hardware in studio lighting"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border ring-1 ring-border sm:grid-cols-3">
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
      </div>
    </section>
  );
}