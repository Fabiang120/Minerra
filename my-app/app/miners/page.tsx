"use client"
import { useState } from 'react';

export default function Miners() {
  const [coins] = useState(["BTC", "ZEC", "LTC", "DOGE", "ETC", "XMR", "KDA", "ALEO", "RXD", "GRIN"]);
  const [miners] = useState([
    {
      id: "1",
      name: "Antminer S21 Hyd.",
      coin: "BTC",
      release: "May 2024",
      hashrate: "335 TH/s",
      power: "5360 W",
      algorithm: "SHA-256",
      profit: "$14.82",
      status: "Top Tier",
      coinBg: "bg-amber-500 text-black",
      coinSymbol: "₿",
    },
    {
      id: "2",
      name: "Whatsminer M66S",
      coin: "BTC",
      release: "Jan 2024",
      hashrate: "298 TH/s",
      power: "5513 W",
      algorithm: "SHA-256",
      profit: "$11.40",
      status: "Top Tier",
      coinBg: "bg-amber-500 text-black",
      coinSymbol: "₿",
    },
    {
      id: "3",
      name: "Antminer L7",
      coin: "LTC",
      release: "Aug 2021",
      hashrate: "9.5 GH/s",
      power: "3425 W",
      algorithm: "Scrypt",
      profit: "$8.40",
      status: "Popular",
      coinBg: "bg-slate-300 text-black",
      coinSymbol: "Ł",
    },
    {
      id: "4",
      name: "Antminer KS5 Pro",
      coin: "KAS",
      release: "Apr 2024",
      hashrate: "21 TH/s",
      power: "3150 W",
      algorithm: "kHeavyHash",
      profit: "$6.75",
      status: "Top Tier",
      coinBg: "bg-teal-500 text-black",
      coinSymbol: "K",
    },
    {
      id: "5",
      name: "iPollo V1 Mini",
      coin: "ETC",
      release: "Jun 2022",
      hashrate: "300 MH/s",
      power: "240 W",
      algorithm: "Etchash",
      profit: "$1.82",
      status: "Stable",
      coinBg: "bg-emerald-500 text-black",
      coinSymbol: "Ξ",
    },
  ]);
  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [searchedMiner, setSearchedMiner] = useState("");

  const handleSearchedMiner = (miner: string) => {
    setSearchedMiner(miner);
  }
  const handleSelectCoin = (coin: string) => {
    setSelectedCoin(coin);
    console.log("Selected Coin: ", coin);
  }

  return (
    <section className="px-4 pt-12 pb-24 mt-8 grid sm:grid-cols-4 md:grid-cols-8 md:px-6 md:pt-16 xl:grid-cols-12 gap-3">
      <div className="col-span-full lg:col-start-1 lg:col-end-4 xl:col-start-1 xl:col-end-4 flex flex-col mb-6 lg:mb-0 gap-4">
        <h4 className="text-xs font-medium tracking-[0.15em] text-gold uppercase">
          Profitability
        </h4>
        <h1>
          ASIC miners.
        </h1>
        <p className="mt-2 max-w-[44ch]">
          Every modern ASIC ranked by daily net profitability at industrial pricing of $0.06 / kWh.
        </p>
        <div className="mt-2 flex items-center gap-1">
          <span className="bg-surface text-foreground font-medium text-xs rounded-lg py-2 px-3">BTC $64,281.00</span>
          <span className="bg-surface text-muted-foreground font-medium text-xs rounded-lg py-2 px-3">$0.06 / kWh</span>
        </div>
      </div>

      <div className="col-span-full min-w-0 flex flex-col gap-6 lg:col-start-4 lg:col-end-9 xl:col-start-4 xl:col-end-13">
        <div className="flex flex-wrap gap-2 content-start items-start justify-start">
          {coins.map((c) => {
            return (
              <button
                className="py-1.5 px-4 rounded-2xl bg-surface text-muted-foreground hover:text-foreground text-xs font-medium text-center"
                key={c}
                onClick={() => handleSelectCoin(c)}
              >
                {c}
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
            id="search-miner"
            aria-label="Search miners"
            className="bg-surface text-foreground placeholder:text-muted-foreground rounded-2xl w-full py-3 pl-9 pr-3 text-sm focus:outline-none"
            type="text"
            value={searchedMiner}
            onChange={(e) => handleSearchedMiner(e.target.value)}
            placeholder="Search miners"
          />
        </div>

        <div className="bg-surface rounded-2xl overflow-hidden w-full">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-elevated border-b border-border text-xs uppercase tracking-wider text-muted-foreground font-medium">
                <th className="py-4 px-4">MODEL</th>
                <th className="py-4 px-4 hidden lg:block">RELEASE</th>
                <th className="py-4 px-4">HASHRATE</th>
                <th className="py-4 px-4">POWER</th>
                <th className="py-4 px-4 hidden lg:block">ALGORITHM</th>
                <th className="py-4 px-4">PROFIT / DAY</th>
                <th className="py-4 px-4">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {miners.map((m) => {
                return (
                  <tr key={m.id} className="hover:bg-surface-elevated/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${m.coinBg}`}>
                          {m.coinSymbol}
                        </span>
                        <div>
                          <div className="text-foreground">{m.name}</div>
                          <div className="text-xs text-muted-foreground">{m.coin}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground hidden lg:table-cell">{m.release}</td>
                    <td className="py-4 px-4 text-foreground tabular-nums">{m.hashrate}</td>
                    <td className="py-4 px-4 text-muted-foreground tabular-nums">{m.power}</td>
                    <td className="py-4 px-4 text-muted-foreground tabular-nums hidden lg:table-cell">{m.algorithm}</td>
                    <td className="py-4 px-4 text-success tabular-nums">{m.profit}</td>
                    <td className="py-4 px-4">
                      <span className="text-xs border border-border px-2.5 py-1 rounded-md text-muted-foreground">
                        {m.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}