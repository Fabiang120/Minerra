"use client";
import { useState } from "react";

export default function Prices() {
  const stats = [
    { label: "TOTAL MARKET CAP", value: "$1.32T" },
    { label: "24H Volume", value: "$34.61B" },
    { label: "GAINERS", value: "7" },
    { label: "LOSERS", value: "5" },
  ];

  type cryptocurrency = {
    Coin: string;
    description: string;
    Algorithm: string;
    Price: number;
    twentyfour: string;
    sevenday: string;
    volume: string;
    marketcap: string;
  };

  const cryptocurrencies: cryptocurrency[] = [
    {
      Coin: "Bitcoin",
      description: "BTC",
      Algorithm: "SHA-256",
      Price: 64281.00,
      twentyfour: "+2.4%",
      sevenday: "+5.1%",
      volume: "$24.6B",
      marketcap: "$1.26T",
    },
    {
      Coin: "Kaspa",
      description: "KAS",
      Algorithm: "kHeavyHash",
      Price: 0.165,
      twentyfour: "+4.2%",
      sevenday: "+12.8%",
      volume: "$142M",
      marketcap: "$4.1B",
    },
    {
      Coin: "Litecoin",
      description: "LTC",
      Algorithm: "Scrypt",
      Price: 68.40,
      twentyfour: "-0.8%",
      sevenday: "+1.2%",
      volume: "$310M",
      marketcap: "$5.1B",
    },
    {
      Coin: "Monero",
      description: "XMR",
      Algorithm: "RandomX",
      Price: 142.20,
      twentyfour: "-1.2%",
      sevenday: "+0.8%",
      volume: "$62M",
      marketcap: "$2.6B",
    },
    {
      Coin: "Zcash",
      description: "ZEC",
      Algorithm: "Equihash",
      Price: 31.50,
      twentyfour: "+0.5%",
      sevenday: "+3.4%",
      volume: "$48M",
      marketcap: "$510M",
    },
    {
      Coin: "Dash",
      description: "DASH",
      Algorithm: "X11",
      Price: 25.80,
      twentyfour: "+1.0%",
      sevenday: "-1.5%",
      volume: "$28M",
      marketcap: "$305M",
    },
    {
      Coin: "Kadena",
      description: "KDA",
      Algorithm: "Blake2S",
      Price: 0.58,
      twentyfour: "-2.1%",
      sevenday: "-4.3%",
      volume: "$12M",
      marketcap: "$165M",
    },
    {
      Coin: "Alephium",
      description: "ALPH",
      Algorithm: "Blake3",
      Price: 1.85,
      twentyfour: "+6.4%",
      sevenday: "+18.2%",
      volume: "$8M",
      marketcap: "$140M",
    },
    {
      Coin: "Radiant",
      description: "RXD",
      Algorithm: "SHA-512/256",
      Price: 0.0012,
      twentyfour: "-3.5%",
      sevenday: "+2.1%",
      volume: "$1.2M",
      marketcap: "$14M",
    },
  ];

  const [algorithms] = useState([
    "All",
    "SHA-256",
    "Equihash",
    "RandomX",
    "Scrypt",
    "kHeavyHash",
    "X11",
    "Blake2S",
    "Blake3",
    "SHA-512/256",
  ]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("All");
  const [searchedCoin, setSearchedCoin] = useState("");

  const handleSelectedAlgorithm = (Algorithm: string) => {
    setSelectedAlgorithm(Algorithm);
  };

  const filteredcryptocurrencies = cryptocurrencies.filter((c) => {
    const matchesAlgorithm =
      selectedAlgorithm === "All" || c.Algorithm === selectedAlgorithm;
    const query = searchedCoin.toLowerCase();
    const searchedAlgo =
      c.Coin.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query) ||
      c.Algorithm.toLowerCase().includes(query);
    return matchesAlgorithm && searchedAlgo;
  });

  return (
    <section className="px-4 pt-12 pb-24 mt-8 grid sm:grid-cols-4 md:grid-cols-8 md:px-6 md:pt-16 xl:grid-cols-12 gap-6">
      <div className="col-span-full lg:col-start-1 lg:col-end-4 xl:col-start-1 xl:col-end-4 flex flex-col mb-6 lg:mb-0 gap-4">
        <h4 className="text-xs font-medium tracking-[0.15em] text-gold uppercase">
          LIVE MARKET
        </h4>
        <h1>Prices that matter to mining.</h1>
        <p className="mt-2 max-w-[44ch]">
          The cryptocurrencies most relevant to ASIC and GPU mining economics — with 24h and 7d motion, volume, market cap and per-algorithm filtering.
        </p>
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
        <div className="flex flex-wrap gap-1">
          {algorithms.map((a) => {
            const active = selectedAlgorithm === a;
            return (
              <button
                key={a}
                onClick={() => handleSelectedAlgorithm(a)}
                className={`py-1.5 px-2 text-xs font-medium transition-colors border-border border-0.5 ${active
                    ? "bg-foreground text-background"
                    : "bg-surface text-muted-foreground hover:text-foreground border border-border"
                  }`}
              >
                {a}
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
            id="search-coin"
            aria-label="Search coin"
            className="bg-surface text-foreground placeholder:text-muted-foreground rounded-2xl w-full py-3 pl-9 pr-3 text-sm focus:outline-none"
            type="text"
            value={searchedCoin}
            onChange={(e) => setSearchedCoin(e.target.value)}
            placeholder="Search coin name or ticker"
          />
        </div>

        <div className="bg-surface rounded-2xl overflow-hidden w-full">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-elevated border-b border-border text-xs uppercase tracking-wider text-muted-foreground font-medium">
                <th className="py-4 px-4">COIN</th>
                <th className="py-4 px-4">ALGORITHM</th>
                <th className="py-4 px-4">PRICE</th>
                <th className="py-4 px-4 hidden lg:table-cell">24H</th>
                <th className="py-4 px-4 hidden lg:table-cell">7D</th>
                <th className="py-4 px-4">VOLUME</th>
                <th className="py-4 px-4 text-right">MARKET CAP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {filteredcryptocurrencies.map((c) => (
                <tr key={c.Coin} className="hover:bg-surface-elevated/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold bg-border text-foreground">
                        {c.description}
                      </span>
                      <div>
                        <div className="text-foreground font-medium">{c.Coin}</div>
                        <div className="text-xs text-muted-foreground">{c.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">{c.Algorithm}</td>
                  <td className="py-4 px-4 text-foreground tabular-nums font-medium">
                    ${c.Price < 1 ? c.Price.toFixed(4) : c.Price.toLocaleString()}
                  </td>
                  <td className={`py-4 px-4 tabular-nums hidden lg:table-cell ${c.twentyfour.startsWith("+") ? "text-emerald-400" : "text-red-400"
                    }`}>
                    {c.twentyfour}
                  </td>
                  <td className={`py-4 px-4 tabular-nums hidden lg:table-cell ${c.sevenday.startsWith("+") ? "text-emerald-400" : "text-red-400"
                    }`}>
                    {c.sevenday}
                  </td>
                  <td className="py-4 px-4 text-muted-foreground tabular-nums">{c.volume}</td>
                  <td className="py-4 px-4 text-muted-foreground tabular-nums text-right">{c.marketcap}</td>
                </tr>
              ))}
              {filteredcryptocurrencies.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-xs text-muted-foreground">
                    No coins match your criteria.
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