"use client"
import { useState } from 'react';
export default function Miners() {
  const [coins] = useState(["Bitcoin", "zCash"]);
  const [selectedCoin, setSelectedCoin] = useState("Bitcoin");
  const [searchedMiner, setSearchedMiner] = useState("");
  const handleSearchedMiner = (miner: string) => {
    setSearchedMiner(miner);
  }
  const handleSelectCoin = (coin: string) => {
    setSelectedCoin(coin);
    console.log("Selected Coin: ", coin);
  }
  return (
    <section>

      <h4>Profitability</h4>
      <h2>ASIC miners.</h2>
      <p>Every modern ASIC ranked by daily net profitability at industrial pricing of $0.06 / kWh.</p>
      <div>
        {coins.map((c) => {
          return <button key={c} onClick={() => handleSelectCoin(c)}>{c}</button>
        })}
      </div>
      <div>
        <label htmlFor="search-miner"></label>
        <input
          id="search-miner"
          type="text"
          value={searchedMiner}
          onChange={(e) => handleSearchedMiner(e.target.value)}
          placeholder="e.g. Antminer S21..."
        />
      </div>
    </section>
  );
}