import { StepCard, StepArrow } from "../components/StepCard";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-4 px-6 py-20">
      <Link className="block w-full md:w-auto" href="/learn">
        <StepCard step="01" title="Learn" linkText="Open Library" />
      </Link>
      <div className="shrink-0 rotate-90 md:rotate-0">
        <StepArrow />
      </div>
      <Link className="block w-full md:w-auto"  href="/miners">
        <StepCard step="02" title="Compare" linkText="See Miners" />
      </Link>
      <div className="shrink-0 rotate-90 md:rotate-0">
        <StepArrow />
      </div>
      <Link className="block w-full md:w-auto"  href="/vendors">
        <StepCard step="03" title="Buy safe" linkText="Browse Vendors" />
      </Link>
    </section>
  );
}