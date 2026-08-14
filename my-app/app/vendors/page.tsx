"use client";
import { useState } from "react";

export default function Vendors() {
  const stats = [
    { label: "Vendors", value: "8" },
    { label: "Countries", value: "7" },
  ];
  const [vendors] = useState(["All", "Americas", "Europe"]);
  const [selectedVendor, setSelectedVendor] = useState("All");
  const handleSelectedVendor = (vendor: string) => {
    setSelectedVendor(vendor);
  }
  return (
    <section>
      <h4>Personally Verified</h4>
      <h2>Trusted vendors.</h2>
      <p>Directory of official distributors and resellers. Each is manually audited — we strike anyone who ships late, ghosts support, or misrepresents inventory.</p>
      <div className="col-span-full mt-12 grid gap-px overflow-hidden rounded-md bg-darksteel ring-1 ring-darksteel sm:grid-cols-2 max-w-6xl lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-11">
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
      <div>
        {vendors.map((v) => {
          return <button key={v} onClick={() => handleSelectedVendor(v)}>{v}</button>
        })}
      </div>
    </section>
  );
}