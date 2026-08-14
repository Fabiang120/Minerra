"use client";
import { useState } from "react";

export default function Prices() {
  const [algorithms] = useState(["All","SHA-256", "Equihash", "RandomX", "Scrypt", "kHeavyHash", "X11", "Blake2S", "Blake3", "SHA-512/256"]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("All");
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
    </section>
  );
}