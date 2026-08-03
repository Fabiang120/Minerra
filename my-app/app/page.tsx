import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="site-hero">
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
    </>
  );
}
