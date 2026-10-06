"use client";
import { useState } from "react";

export default function Learn() {
  type learning = {
    name: string;
    type: string;
    description: string;
    Experience: string;
  };

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
  };

  const filteredlearnings = learnings.filter((l) => {
    const matchesExperience = selectedExperience === "All" || l.Experience === selectedExperience;
    return matchesExperience;
  });

  const getTypeColor = (type: string) => {
    if (type.toLowerCase().includes("book")) return "text-[color:var(--success)]";
    if (type.toLowerCase().includes("paper")) return "text-muted-foreground";
    return "text-gold";
  };

  return (
    <section className="px-4 pt-12 pb-24 mt-8 grid sm:grid-cols-4 md:grid-cols-8 md:px-6 md:pt-16 xl:grid-cols-12 gap-6">
      <div className="col-span-full lg:px-3 lg:col-start-1 lg:col-end-4 xl:col-start-1 xl:col-end-4 flex flex-col mb-6 lg:mb-0 gap-4">
        <h4 className="text-xs font-medium tracking-[0.15em] text-gold uppercase">LEARN BITCOIN</h4>
        <h1>Start here.</h1>
        <p className="mt-2 max-w-[44ch] text-sm leading-relaxed text-muted-foreground">Hand-Picked resources that explain Bitcoin honestly, from the absolute basics to advanced monetary thesis material and protocol internals.</p>
      </div>
      <div className="col-span-full min-w-0 flex flex-col gap-6 lg:col-start-4 lg:col-end-9 xl:col-start-4 xl:col-end-13">
        <div className="flex flex-wrap items-center gap-2">
          {experience.map((e) => {
            const active = selectedExperience === e;
            return (
              <button
                key={e}
                onClick={() => handleSelectedExperience(e)}
                className={`px-3.5 py-1.5 text-xs font-medium ring-1 ${active
                    ? "bg-foreground text-background ring-foreground"
                    : "bg-surface text-muted-foreground ring-border hover:text-foreground"
                  }`}
              >
                {e}
              </button>
            );
          })}
        </div>
        <div className="col-span-full min-w-0 grid gap-4 sm:grid-cols-2 lg:col-start-4 lg:col-end-9 xl:col-start-4 xl:col-end-13">
          {filteredlearnings.map((l) => {
            return (
              <div
                key={l.name}
                className="flex flex-col bg-surface p-6 ring-1 ring-border"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="bg-background px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-gold ring-1 ring-border">
                    {l.Experience}
                  </span>
                  <span className={`text-xs font-semibold uppercase tracking-wider ${getTypeColor(l.type)}`}>
                    {l.type}
                  </span>
                </div>
                <h3 className="text-base font-medium text-foreground">{l.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{l.description}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-foreground/80">
                  Open Resource
                  <svg viewBox="0 0 20 20" fill="currentColor" className="size-3.5">
                    <path fillRule="evenodd" d="M7.21 4.47a.75.75 0 011.06 0l5 5a.75.75 0 010 1.06l-5 5a.75.75 0 11-1.06-1.06L11.69 10 7.21 5.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}