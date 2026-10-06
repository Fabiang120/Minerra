import { StepCard, StepArrow } from "../components/StepCard"
export default function GetStarted() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-4 px-6 py-30">
      <StepCard step="01" title="Learn" linkText="Open Library" />
      <StepArrow />
      <StepCard step="02" title="Compare" linkText="See Miners" />
      <StepArrow />
      <StepCard step="03" title="Buy safe" linkText="Browse Vendors" />
    </section>
  );
}