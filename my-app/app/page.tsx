import Image from "next/image";

export default function Home() {
  return (
    <section className="px-4 py-[3vw] grid justify-center items-center border-b border-neutral-600 sm:grid-cols-4 md:grid-cols-8 md:py-[1.4vw] lg:grid-cols-12">
      <h1>Verified mining companies, without the uncertainty or scams.</h1>
      <h2>Minerra is a personally verified directory of real ASIC suppliers, honest hardware data, and clear guides for people starting out.</h2>
      <img></img>
      {/* Table with verified, rejecetd and asic models tracked */}
      <dl>
        <dd>VENDORS VERIFIED </dd>
        <dt>12</dt>
        <dd>REJECTED THIS YEAR</dd>
        <dt>47</dt>
        <dd>ASIC MODELS TRACKED THIS YEAR</dd>
        <dt>60+</dt>
      </dl>
    </section>
  );
}
