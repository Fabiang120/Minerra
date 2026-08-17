"use client";
import { useState } from "react";

export default function Prices() {
  const [algorithms] = useState(["All","SHA-256", "Equihash", "RandomX", "Scrypt", "kHeavyHash", "X11", "Blake2S", "Blake3", "SHA-512/256"]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("All");
  const [searchedCoin, setSearchedCoin] = useState("");
  const handleSelectedAlgorithm = (Alogorithm : string) => {
    setSelectedAlgorithm(Alogorithm);
  }
  return (
    <section>
      <h4>LIVE MARKET</h4>
      <h2>Prices that matter to mining.</h2>
      <p>The cryptocurrencies most relevant to ASIC and GPU mining economics — with 24h and 7d motion, volume, market cap and per-algorithm filtering.</p>
      <button>Submit an event</button>
      <div className="grid grid-flow-col auto-cols-fr gap-2">
        {algorithms.map((a) => {
          return <button className="w-full py-2 rounded-sm bg-button-gray" key={a} onClick={() => handleSelectedAlgorithm(a)}>{a}</button>
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
          className="bg-button-gray rounded-sm w-full py-2 pl-9 pr-3"
          type="text"
          value={searchedCoin}
          onChange={(e) => setSearchedCoin(e.target.value)}
          placeholder="Search coin name or ticker"
        />
      </div>
    </section>
  );
}