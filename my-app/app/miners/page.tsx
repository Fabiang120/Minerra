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
    <section className="px-12 py-[3vw] mt-20 grid justify-center items-center sm:grid-cols-4 md:grid-cols-8 md:py-[1.4vw] xl:px-0 xl:grid-cols-12">
      <div className="col-span-full lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-11 flex flex-col gap-3 mb-6">
        <h4 className="text-xs font-medium tracking-[0.15em] text-gold uppercase">
          Profitability
        </h4>
        <h2 className="text-foreground tracking-tight">
          ASIC miners.
        </h2>
        <p className="max-w-[70%] md:max-w-[60%] text-muted-foreground">
          Every modern ASIC ranked by daily net profitability at industrial pricing of $0.06 / kWh.
        </p>
      </div>

      <div className="col-span-full lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-11 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-2">
  {coins.map((c) => {
    return (
      <button 
        className="w-full py-2 rounded-full bg-surface text-muted-foreground hover:text-foreground text-xs font-medium text-center" 
        key={c} 
        onClick={() => handleSelectCoin(c)}
      >
        {c}
      </button>
    );
  })}
</div>

      <span className="col-span-full lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-11 bg-surface text-foreground font-medium text-xs rounded-sm py-2 block">BTC $64,281.00</span>
      <span className="col-span-full lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-11 bg-surface text-muted-foreground font-medium text-xs rounded-sm py-2 block">$0.06 / kWh</span>

      <div className="col-span-full lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-11 relative w-full">
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
          className="bg-surface text-foreground placeholder:text-muted-foreground rounded-sm w-full py-2 pl-9 pr-3 text-sm focus:outline-none"
          type="text"
          value={searchedMiner}
          onChange={(e) => handleSearchedMiner(e.target.value)}
          placeholder="Search miners"
        />
      </div>

      <div className="col-span-full lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-11 bg-surface">
        <table>
          <thead className="border-b border-border">
            <tr>
              <th className="text-left text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground py-3 px-4 ">MODEL</th>
              <th className="text-left text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground py-3 px-4 ">HASHRATE</th>
              <th className="text-left text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground py-3 px-4 ">POWER</th>
              <th className="text-left text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground py-3 px-4 ">PROFIT / DAY</th>
              <th className="text-left text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground py-3 px-4 ">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {miners.map((m) => {
              return (
                <tr key={m.id} className="border-b border-border hover:bg-surface-elevated transition-colors">
                  <th className="text-left text-xs tracking-wider text-foreground py-3 px-4 ">{m.name}</th>
                  <th className="text-left text-xs tracking-wider tabular-nums text-foreground py-3 px-4 ">{m.hashrate}</th>
                  <th className="text-left text-xs tracking-wider tabular-nums text-muted-foreground py-3 px-4 ">{m.power}</th>
                  <th className="text-left text-xs tracking-wider tabular-nums font-medium text-success py-3 px-4 ">{m.profit}</th>
                  <th className="text-left text-xs tracking-wider text-muted-foreground py-3 px-4 ">{m.status}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}