"use client";
import { useState } from "react";

export default function Prices() {
  const [algorithms] = useState(["All","SHA-256", "Equihash", "RandomX"]);
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
      <div>
        {algorithms.map((a) => {
          return <button key={a} onClick={() => handleSelectedAlgorithm(a)}>{a}</button>
        })}
      </div>
    </section>
  );
}