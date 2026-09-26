"use client";
import { useState } from "react";

export default function Vendors() {
  const stats = [
    { label: "Vendors", value: "8" },
    { label: "Countries", value: "7" },
  ];

  type Vendor = {
    description: string;
    vendor: string;
    country: string;
    region: string;
    payment: string;
    trust: "Trusted" | "Watch";
  };

  const VENDORS: Vendor[] = [
    {
      vendor: "CoinMining Central",
      description: "UK-based official distributor providing worldwide shipping and customs clearance.",
      country: "United Kingdom",
      region: "Europe",
      payment: "Crypto, Wire, Card",
      trust: "Trusted",
    },
    {
      vendor: "PrintCrypto",
      description: "US reseller specializing in turnkey mining setups, hosting, and ASIC repairs.",
      country: "United States",
      region: "Americas",
      payment: "Crypto, Wire, ACH",
      trust: "Trusted",
    },
    {
      vendor: "Kaboomracks",
      description: "Premier US broker known for transparent market pricing and hardware liquidation.",
      country: "United States",
      region: "Americas",
      payment: "BTC, Wire",
      trust: "Trusted",
    },
    {
      vendor: "AKMiner",
      description: "Hong Kong supplier offering direct factory pricing on Bitmain and Canaan units.",
      country: "Hong Kong",
      region: "Asia",
      payment: "Crypto, Wire",
      trust: "Watch",
    },
    {
      vendor: "BT-Miners",
      description: "New York distributor providing physical showroom inventory and technical support.",
      country: "United States",
      region: "Americas",
      payment: "Crypto, Wire, Card",
      trust: "Trusted",
    },
    {
      vendor: "Vipera Tech",
      description: "UAE distributor specializing in large-scale containerized mining solutions.",
      country: "United Arab Emirates",
      region: "MENA",
      payment: "Crypto, Wire, Escrow",
      trust: "Trusted",
    },
    {
      vendor: "Cryptominer Bros",
      description: "Hong Kong reseller providing global shipping with verified batch tracking.",
      country: "Hong Kong",
      region: "Asia",
      payment: "Crypto, Wire",
      trust: "Watch",
    },
    {
      vendor: "Mining Cave",
      description: "Canadian supplier offering pre-configured home mining setups and GPUs.",
      country: "Canada",
      region: "Americas",
      payment: "Crypto, Wire, Card",
      trust: "Watch",
    },
  ];

  const [regions] = useState(["All", "Americas", "Europe", "Asia", "MENA"]);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchedVendor, setSearchedVendor] = useState("");

  // Corrected parameter name and type
  const handleSelectRegion = (region: string) => {
    setSelectedRegion((prev) => (prev === region ? "All" : region));
  };

  const filtered = VENDORS.filter((v) => {
    const matchesRegion = selectedRegion === "All" || v.region === selectedRegion;
    const query = searchedVendor.toLowerCase();
    const matchesSearch =
      v.vendor.toLowerCase().includes(query) ||
      v.description.toLowerCase().includes(query) ||
      v.country.toLowerCase().includes(query);
    return matchesRegion && matchesSearch;
  });

  return (
    <section className="px-4 pt-12 pb-24 mt-8 grid sm:grid-cols-4 md:grid-cols-8 md:px-6 md:pt-16 xl:grid-cols-12 gap-6">
      <div className="col-span-full lg:col-start-1 lg:col-end-4 xl:col-start-1 xl:col-end-4 flex flex-col mb-6 lg:mb-0 gap-4">
        <h4 className="text-xs font-medium tracking-[0.15em] text-gold uppercase">Personally Verified</h4>
        <h1>Trusted vendors.</h1>
        <p className="mt-2 max-w-[44ch]">Directory of official distributors and resellers. Each is manually audited — we strike anyone who ships late, ghosts support, or misrepresents inventory.</p>
        <div className="grid gap-px grid-cols-2 overflow-hidden rounded-2xl bg-border ring-1 ring-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-4 text-left">
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
              <div className="text-lg font-medium tabular-nums">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-full min-w-0 flex flex-col gap-6 lg:col-start-4 lg:col-end-9 xl:col-start-4 xl:col-end-13">
        <div className="flex flex-wrap gap-2">
          {regions.map((r) => {
            const active = selectedRegion === r;
            return (
              <button
                key={r}
                onClick={() => handleSelectRegion(r)}
                className={`py-1.5 px-4 rounded-2xl text-xs font-medium transition-colors border ${active
                    ? "bg-foreground text-background border-foreground font-semibold"
                    : "bg-surface text-muted-foreground hover:text-foreground border-border"
                  }`}
              >
                {r}
              </button>
            );
          })}
        </div>

        <div className="relative w-full">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            width="16"
            height="16"
            className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.45 4.39l3.08 3.08a.75.75 0 11-1.06 1.06l-3.08-3.08A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
          <input
            id="search-vendor"
            aria-label="Search Vendors"
            className="bg-surface text-foreground placeholder:text-muted-foreground rounded-2xl w-full py-3 pl-9 pr-3 text-sm focus:outline-none"
            type="text"
            value={searchedVendor}
            onChange={(e) => setSearchedVendor(e.target.value)}
            placeholder="Search vendors"
          />
        </div>

        <div className="bg-surface rounded-2xl overflow-hidden w-full">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-elevated border-b border-border text-xs uppercase tracking-wider text-muted-foreground font-medium">
                <th className="py-4 px-4">VENDOR</th>
                <th className="py-4 px-4">COUNTRY</th>
                <th className="py-4 px-4 hidden lg:table-cell">PAYMENT</th>
                <th className="py-4 px-4 text-right">TRUST</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {filtered.map((v) => (
                <tr key={v.vendor} className="hover:bg-surface-elevated/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-medium text-foreground">{v.vendor}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{v.description}</div>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">{v.country}</td>
                  <td className="py-4 px-4 text-muted-foreground hidden lg:table-cell">{v.payment}</td>
                  <td className="py-4 px-4 text-right">
                    <span className={`inline-block text-xs border border-border px-2.5 py-1 rounded-md font-medium ${v.trust === "Trusted" ? "bg-background text-gold" : "bg-background text-muted-foreground"
                      }`}>
                      {v.trust}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-xs text-muted-foreground">
                    No vendors match your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}