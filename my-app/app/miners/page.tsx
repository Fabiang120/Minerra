"use client"
import { useState } from 'react';

export default function Miners() {
  const [coins] = useState(["BTC", "ZEC", "LTC", "DOGE", "ETC", "XMR", "KDA", "ALEO", "RXD", "GRIN"]);
  const [miners] = useState([
    {
      id: "1",
      name: "Antminer S21 Hyd.",
      coin: "BTC",
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
    <section className="px-6 py-[2vw] mt-8 grid sm:grid-cols-4 md:grid-cols-8 md:py-[1.2vw] xl:grid-cols-12 gap-3">
      <div className="col-span-full max-w-[50%] md:max-w-[40%] lg:max-w-[58%] lg:col-start-1 lg:col-end-4 xl:max-w-[70%] xl:col-start-1 xl:col-end-4 flex flex-col gap-6 mb-6 lg:mb-0">
        <h4 className="text-xs font-medium tracking-[0.15em] text-gold uppercase">
          Profitability
        </h4>
        <h2 className="text-foreground tracking-tight">
          ASIC miners.
        </h2>
        <p className="text-muted-foreground">
          Every modern ASIC ranked by daily net profitability at industrial pricing of $0.06 / kWh.
        </p>
        <div className="flex items-center gap-1">
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

        <div className="bg-surface overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground py-4 px-4">MODEL</th>
                <th className="text-left text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground py-4 px-4 ">HASHRATE</th>
                <th className="text-left text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground py-4 px-4 ">POWER</th>
                <th className="text-left text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground py-4 px-4 ">PROFIT / DAY</th>
                <th className="text-left text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground py-4 px-4 ">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {miners.map((m) => {
                return (
                  <tr key={m.id} className="border-b border-border hover:bg-surface-elevated transition-colors">
                    <td className="text-left text-xs tracking-wider text-foreground py-3 px-4 ">{m.name}</td>
                    <td className="text-left text-xs tracking-wider tabular-nums text-foreground py-6 px-4 ">{m.hashrate}</td>
                    <td className="text-left text-xs tracking-wider tabular-nums text-muted-foreground py-6 px-4 ">{m.power}</td>
                    <td className="text-left text-xs tracking-wider tabular-nums font-medium text-success py-6 px-4 ">{m.profit}</td>
                    <td className="text-left text-xs tracking-wider text-muted-foreground py-6 px-4 ">{m.status}</td>
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