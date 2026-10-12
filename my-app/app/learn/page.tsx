"use client";
import { useState } from "react";

export default function Learn() {
  type learning = {
    name: string;
    type: string;
    whenToStudy: string;
    Experience: string;
    url: string;
  };

  const learnings: learning[] = [
    {
      name: "How Does Bitcoin Actually Work?",
      type: "YouTube Video",
      whenToStudy: "Visual guide to proof-of-work, hashes, and block history.",
      Experience: "Basics",
      url: "https://youtu.be/bBC-nXj3Nag?si=p3qtlhTKLMAPpnLs",
    },
    {
      name: "How Bitcoin Works (Bitcoin.org)",
      type: "Educational Guide",
      whenToStudy: "Quick overview of wallets, transactions, and network basics.",
      Experience: "Basics",
      url: "https://bitcoin.org/en/how-it-works",
    },
    {
      name: "How Open-Source Bitcoin Development Works",
      type: "Educational Guide",
      whenToStudy: "How Bitcoin Core's C++ codebase is stored on GitHub, reviewed, and maintained globally.",
      Experience: "Basics",
      url: "https://bitcoincore.org/en/about/",
    },
    {
      name: "Public & Private Keys Explained",
      type: "YouTube Video",
      whenToStudy: "Simple breakdown of public keys, private keys, and digital signatures.",
      Experience: "Basics",
      url: "https://www.youtube.com/watch?v=0CbjGaFoitQ",
    },
    {
      name: "How Bitcoin Mining Works",
      type: "YouTube Video",
      whenToStudy: "Beginner guide to puzzles, energy, and block rewards.",
      Experience: "Basics",
      url: "https://www.youtube.com/watch?v=lHipE05v4jg",
    },
    {
      name: "Bitcoin Fees & Mempool Explained",
      type: "YouTube Video",
      whenToStudy: "Visual breakdown of mempool space, fee estimation, and unconfirmed transactions.",
      Experience: "Basics",
      url: "https://www.youtube.com/watch?v=DW4_zDSufhQ",
    },
    {
      name: "Why Run a Full Node?",
      type: "Educational Guide",
      whenToStudy: "Understand validation vs mining and why non-mining nodes protect consensus.",
      Experience: "Basics",
      url: "https://bitcoin.org/en/full-node",
    },
    {
      name: "Visualizing Mempool & Block Propagation",
      type: "Tool Guide",
      whenToStudy: "Live visual explorer for mempool transactions, blocks, and fees.",
      Experience: "Basics",
      url: "https://mempool.space",
    },
    {
      name: "Bitcoin Whitepaper",
      type: "Research Paper",
      whenToStudy: "Satoshi's original proposal on consensus and double-spending.",
      Experience: "Intermediate",
      url: "https://bitcoin.org/bitcoin.pdf",
    },
    {
      name: "Understanding Bitcoin Core Architecture",
      type: "YouTube Video",
      whenToStudy: "How P2P, mempool, and storage connect in bitcoind.",
      Experience: "Intermediate",
      url: "https://www.youtube.com/watch?v=wLYdcH37phE",
    },
    {
      name: "Bitcoin Core Source Repository & Development",
      type: "GitHub Repository",
      whenToStudy: "Explore the open-source C++ codebase, pull requests, and commit history on GitHub.",
      Experience: "Intermediate",
      url: "https://github.com/bitcoin/bitcoin",
    },
    {
      name: "Bitcoin Transactions & The UTXO Model",
      type: "Educational Guide",
      whenToStudy: "Deep dive into UTXOs, scripts, and transaction fees.",
      Experience: "Intermediate",
      url: "https://river.com/learn/bitcoins-utxo-model/",
    },
    {
      name: "Bitcoin Developer Guide: Transactions",
      type: "Technical Documentation",
      whenToStudy: "Official spec on inputs, outputs, locking scripts, and sequence numbers.",
      Experience: "Intermediate",
      url: "https://developer.bitcoin.org/devguide/transactions.html",
    },
    {
      name: "Bitcoin P2P Network Protocol",
      type: "Technical Documentation",
      whenToStudy: "Official guide on node discovery, version handshakes, and inventory relay.",
      Experience: "Intermediate",
      url: "https://developer.bitcoin.org/devguide/p2p_network.html",
    },
    {
      name: "Hard Forks & Soft Forks Explained",
      type: "Educational Guide",
      whenToStudy: "How protocol upgrades, backward compatibility, and consensus rules work.",
      Experience: "Intermediate",
      url: "https://bitcoin.org/en/posts/soft-forks-and-hard-forks",
    },
    {
      name: "Mastering Bitcoin (Open Source)",
      type: "Technical Book",
      whenToStudy: "Reference for keys, addresses, and transaction structures.",
      Experience: "Advanced",
      url: "https://github.com/bitcoinbook/bitcoinbook",
    },
    {
      name: "Programming Bitcoin",
      type: "Code Workshop",
      whenToStudy: "Python guide to parsing raw blocks, scripts, and ECDSA signatures.",
      Experience: "Advanced",
      url: "https://github.com/jimmysong/programmingbitcoin",
    },
    {
      name: "Bitcoin Script & Opcode Execution",
      type: "Technical Guide",
      whenToStudy: "Stack-based smart contract execution, scriptPubKey, and scriptSig verification.",
      Experience: "Advanced",
      url: "https://learnmeabitcoin.com/technical/script",
    },
    {
      name: "LSM-Trees & LevelDB Storage Mechanics",
      type: "Technical Guide",
      whenToStudy: "LevelDB write amplification, compaction, MemTables, and SSTables.",
      Experience: "Advanced",
      url: "https://www.usenix.org/system/files/conference/fast16/fast16-papers-lim.pdf",
    },
    {
      name: "UTXO Set Fragmentation & Chainlet Analysis",
      type: "Research Paper",
      whenToStudy: "UTXO bloat, dust outputs, and memory bottlenecks.",
      Experience: "Advanced",
      url: "https://deic.uab.cat/~gnavarro/files/papers/2019.financial-crypto.pdf",
    },
    {
      name: "Security & Propagation Latency in Proof-of-Work",
      type: "Research Paper",
      whenToStudy: "Gervais et al. paper on block propagation delay, stale blocks, and network security.",
      Experience: "Research",
      url: "https://eprint.iacr.org/2016/555.pdf",
    },
    {
      name: "Empirical Study on Bitcoin Core Performance and Decentralization",
      type: "Honors Thesis",
      whenToStudy: "UF Honors Thesis by Fabian Garcia (Me) on RAM limits (2GB–12GB), LevelDB I/O, and node validation.",
      Experience: "Research",
      url: "/thesis.pdf",
    },
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
    if (type.toLowerCase().includes("paper") || type.toLowerCase().includes("thesis")) return "text-muted-foreground";
    if (type.toLowerCase().includes("video")) return "text-gold";
    return "text-gold";
  };

  return (
    <section className="px-4 pt-12 pb-24 mt-8 grid sm:grid-cols-4 md:grid-cols-8 md:px-6 md:pt-16 xl:grid-cols-12 gap-6">
      <div className="col-span-full lg:px-3 lg:col-start-1 lg:col-end-4 xl:col-start-1 xl:col-end-4 flex flex-col mb-6 lg:mb-0 gap-4">
        <h4 className="text-xs font-medium tracking-[0.15em] text-gold uppercase">LEARN BITCOIN</h4>
        <h1>Start here.</h1>
        <p className="mt-2 max-w-[44ch] text-sm leading-relaxed text-muted-foreground">Hand-picked, open-access resources that explain Bitcoin honestly, from the absolute basics to advanced monetary thesis material and protocol internals.</p>
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
              <a
                key={l.name}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col bg-surface p-6 ring-1 ring-border transition-transform hover:bg-surface-elevated hover:-translate-y-0.5 hover:cursor-pointer"
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
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.whenToStudy}</p>
                <div className="mt-5 flex-1 flex items-end justify-start">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-foreground/80">
                    Open Resource
                    <svg viewBox="0 0 20 20" fill="currentColor" className="size-3.5">
                      <path fillRule="evenodd" d="M7.21 4.47a.75.75 0 011.06 0l5 5a.75.75 0 010 1.06l-5 5a.75.75 0 11-1.06-1.06L11.69 10 7.21 5.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}