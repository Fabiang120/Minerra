"use client";

export default function Youtubers() {
  type youtuber = {
    name: string;
    description: string;
    subcount: number;
    url: string;
  };

  const youtubers: youtuber[] = [
    {
      name: "Davinci Jeremie",
      description: "Early Bitcoin pioneer (davincij15) analyzing price action, self-custody, and monetary freedom.",
      subcount: 923,
      url: "https://www.youtube.com/@davincij15",
    },
    {
      name: "Mark Moss",
      description: "Macroeconomic cycles, monetary history, and long-term Bitcoin game theory.",
      subcount: 835,
      url: "https://www.youtube.com/@1MarkMoss",
    },
    {
      name: "Anthony Pompliano",
      description: "Interviews with institutional investors, energy executives, and macro analysts on Bitcoin adoption.",
      subcount: 651,
      url: "https://www.youtube.com/@AnthonyPompliano",
    },
    {
      name: "VoskCoin",
      description: "ASIC hardware unboxings, residential mining setups, and live power draw and efficiency tests.",
      subcount: 645,
      url: "https://www.youtube.com/@VoskCoin",
    },
    {
      name: "MMCrypto",
      description: "Daily technical analysis, on-chain chart structures, and short-to-mid-term Bitcoin price setups.",
      subcount: 620,
      url: "https://www.youtube.com/@MMCryptoTube",
    },
    {
      name: "The Moon (Carl Runefelt)",
      description: "Daily Bitcoin market updates, breaking news coverage, and technical price patterns.",
      subcount: 613,
      url: "https://www.youtube.com/c/TheMoonCarl",
    },
    {
      name: "BTC Sessions",
      description: "Hands-on tutorials on full nodes (Umbrel, Start9), hardware wallets, and UTXO privacy.",
      subcount: 406,
      url: "https://www.youtube.com/@BTCSessions",
    },
    {
      name: "aantonop (Andreas Antonopoulos)",
      description: "Foundational talks on peer-to-peer consensus, protocol security, and open money systems.",
      subcount: 349,
      url: "https://www.youtube.com/@aantonop",
    },
    {
      name: "Red Panda Mining",
      description: "ASIC and GPU farm builds, immersion cooling setups, 240V power, and thermal management.",
      subcount: 294,
      url: "https://www.youtube.com/@RedPandaMining",
    },
    {
      name: "Bitcoin University (Matthew Kratter)",
      description: "Concise analysis of mining pool centralization, node validation, and network attack vectors.",
      subcount: 276,
      url: "https://www.youtube.com/@Bitcoin_University",
    },
    {
      name: "Bitcoin Magazine",
      description: "Keynote speeches, miner roundtables, industry interviews, and global conference coverage.",
      subcount: 261,
      url: "https://www.youtube.com/@BitcoinMagazine",
    },
    {
      name: "Natalie Brunell (Coin Stories)",
      description: "Long-form interviews on Bitcoin energy grids, monetary policy, and institutional adoption.",
      subcount: 245,
      url: "https://www.youtube.com/@nataliebrunell",
    },
    {
      name: "Swan Bitcoin",
      description: "In-depth discussions with Bitcoin Core contributors, macro strategists, and mining leaders.",
      subcount: 229,
      url: "https://www.youtube.com/@Swan_Bitcoin",
    },
    {
      name: "The Hobbyist Miner",
      description: "Home ASIC mining guides focusing on sound suppression boxes, CFM airflow, and breaker panels.",
      subcount: 176,
      url: "https://www.youtube.com/@TheHobbyistMiner",
    },
    {
      name: "Son of a Tech",
      description: "ASIC firmware flashing, power metering, algorithm benchmarks, and hardware repair.",
      subcount: 171,
      url: "https://www.youtube.com/@SonofaTech",
    },
    {
      name: "Simply Bitcoin",
      description: "Daily breakdowns covering mempool statistics, node counts, and network hash rate trends.",
      subcount: 129,
      url: "https://www.youtube.com/@SimplyBitcoin",
    },
    {
      name: "TFTC (Marty Bent)",
      description: "Interviews focused on stranded-gas mining, energy infrastructure, and Bitcoin freedom tech.",
      subcount: 101,
      url: "https://www.youtube.com/@TFTC",
    },
    {
      name: "Crypto Currently",
      description: "Market commentary, macro sentiment, and updates on ongoing Bitcoin market cycles.",
      subcount: 97,
      url: "https://www.youtube.com/@cryptocurrentlyYT",
    },
    {
      name: "Rabid Mining",
      description: "Hash rate efficiency testing, rig builds, undervolting, and small-scale mining experiments.",
      subcount: 82,
      url: "https://www.youtube.com/@RabidMining",
    },
    {
      name: "Crypto Kid",
      description: "Daily chart analysis, technical setups, and perspectives on emerging Bitcoin trends.",
      subcount: 68,
      url: "https://www.youtube.com/@cryptokid",
    },
    {
      name: "Braiins",
      description: "Stratum V2 protocol development, mining pool architecture, and Braiins OS autotuning firmware.",
      subcount: 45,
      url: "https://www.youtube.com/@BraiinsMining",
    },
    {
      name: "DJ Mines",
      description: "Commercial facility builds, containerized ASIC deployments, and 480V three-phase electrical work.",
      subcount: 42,
      url: "https://www.youtube.com/@DJMines",
    },
    {
      name: "Chasing Bitcoin",
      description: "ASIC hashboard troubleshooting, micro-soldering diagnostics, and power supply repairs.",
      subcount: 36,
      url: "https://www.youtube.com/@ChasingBitcoin",
    },
  ];

  return (
    <section className="px-4 pt-12 pb-24 mt-8 grid sm:grid-cols-4 md:grid-cols-8 md:px-6 md:pt-16 xl:grid-cols-12 gap-6">
      <div className="col-span-full lg:mr-3 lg:px-3 lg:col-start-1 lg:col-end-4 xl:col-start-1 xl:col-end-4 flex flex-col mb-6 lg:mb-0 gap-4">
        <h4 className="text-xs font-medium tracking-[0.15em] text-gold uppercase">HAND-PICKED</h4>
        <h1>Bitcoin creators.</h1>
        <p className="mt-2 max-w-[44ch]">
          Top creators covering ASIC mining hardware, node operations, market dynamics, and protocol engineering.
        </p>
      </div>
      <div className="col-span-full min-w-0 grid gap-4 md:grid-cols-2 xl:grid-cols-3 lg:col-start-4 lg:col-end-9 xl:col-start-4 xl:col-end-13">
        {youtubers.map((y) => {
          return (
            <a
              key={y.name}
              href={y.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-between bg-surface rounded-2xl p-6 ring-1 ring-border transition-transform hover:bg-surface-elevated hover:-translate-y-0.5 hover:cursor-pointer"
            >
              <div className="flex flex-col items-start gap-3">
                <div className="flex justify-between items-center w-full">
                  <div className="grid size-10 place-items-center rounded-lg bg-[#ff0000]/15 text-[#ff5252] ring-1 ring-[#ff0000]/30">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path d="M23 7.5a4 4 0 00-2.8-2.83C18.4 4 12 4 12 4s-6.4 0-8.2.67A4 4 0 001 7.5 41.6 41.6 0 00.5 12 41.6 41.6 0 001 16.5a4 4 0 002.8 2.83C5.6 20 12 20 12 20s6.4 0 8.2-.67A4 4 0 0023 16.5 41.6 41.6 0 0023 7.5zM9.75 15.5v-7l6 3.5-6 3.5z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {y.subcount}K subs
                  </span>
                </div>
                <h3 className="text-base font-medium text-foreground">{y.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{y.description}</p>
              </div>

              <div className="mt-5 flex items-center gap-1 text-xs font-medium text-foreground/80">
                Watch on YouTube
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-3.5">
                  <path
                    fillRule="evenodd"
                    d="M7.21 4.47a.75.75 0 011.06 0l5 5a.75.75 0 010 1.06l-5 5a.75.75 0 11-1.06-1.06L11.69 10 7.21 5.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}