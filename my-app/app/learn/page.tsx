"use client";
import { useState } from "react";

export default function Learn() {
  type learning = {
    name: string;
    type: string;
    description: string;
    Experience: string;
  }
  const learnings: learning[] = [
    {
      name: "Bitcoin Whitepaper",
      type: "Research Paper",
      description: "Satoshi Nakamoto's foundational 9-page paper outlining a peer-to-peer electronic cash system and the proof-of-work mechanism.",
      Experience: "Basics"
    },
    {
      name: "The Bitcoin Standard",
      type: "Book",
      description: "An economic exploration of Bitcoin as sound money, tracing the history of monetary evolution and hard currencies.",
      Experience: "Basics"
    },
    {
      name: "Mastering Bitcoin",
      type: "Technical Book",
      description: "Andreas Antonopoulos's comprehensive guide into cryptography, keys, addresses, wallets, and the transaction lifecycle.",
      Experience: "Intermediate"
    },
    {
      name: "Layered Money",
      type: "Book",
      description: "An analysis of how monetary systems scale across layers, from gold and central bank reserves to Bitcoin and the Lightning Network.",
      Experience: "Intermediate"
    },
    {
      name: "Programming Bitcoin",
      type: "Code Workshop",
      description: "Build a Bitcoin library from scratch in Python, implementing elliptic curve cryptography, transaction serialization, and script execution.",
      Experience: "Advanced"
    },
    {
      name: "Bitcoin Core LevelDB & UTXO Performance",
      type: "Research Documentation",
      description: "Low-level technical breakdowns of node reindexing, database caching mechanisms, and RAM optimization under fixed memory limits.",
      Experience: "Research"
    }
  ];
  const [experience] = useState(["All", "Basics", "Intermediate", "Advanced", "Research"]);
  const [selectedExperience, setSelectedExperience] = useState("All");
  const handleSelectedExperience = (exp: string) => {
    setSelectedExperience(exp);
  }
  const filteredlearnings = learnings.filter((l) => {
    const matchesExperience = selectedExperience === "All" || l.Experience === selectedExperience;
    return matchesExperience;
  })
  return (
    <section className="px-4 pt-12 pb-24 mt-8 grid sm:grid-cols-4 md:grid-cols-8 md:px-6 md:pt-16 xl:grid-cols-12 gap-6">
      <div className="col-span-full lg:px-3 lg:col-start-1 lg:col-end-4 xl:col-start-1 xl:col-end-4 flex flex-col mb-6 lg:mb-0 gap-4">
        <h4 className="text-xs font-medium tracking-[0.15em] text-gold uppercase">LEARN BITCOIN</h4>
        <h1>Start here.</h1>
        <p className="mt-2 max-w-[44ch]">Hand-Picked resources that explain Bitcoin honestly, from the absolute basics to advanced montetary thesis material and protocol internals.</p>
      </div>
      <div className="col-span-full min-w-0 flex flex-col gap-6 lg:col-start-4 lg:col-end-9 xl:col-start-4 xl:col-end-13">
        <div className="flex flex-wrap gap-1">
          {experience.map((e) => {
            const active = selectedExperience === e;
            return (
              <button
                key={e}
                onClick={() => handleSelectedExperience(e)}
                className={`py-1.5 px-2 text-xs font-medium transition-colors border-border border-0.5 ${active
                  ? "bg-foreground text-background"
                  : "bg-surface text-muted-foreground hover:text-foreground border border-border"
                  }`}
              >
                {e}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}