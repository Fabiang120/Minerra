type StepCardProps = {
  step: string;
  title: string;
  linkText: string;
}

export function StepCard({ step, title, linkText }: StepCardProps) {
  return (
    <div className="flex flex-col px-12 py-12 w-80 h-80 items-start justify-between ring-1 ring-border">
      <span className="text-gold tracking-widest">STEP {step}</span>
      <h1>{title}</h1>
      <div className="flex items-center gap-3 text-xs tracking-wider font-medium text-muted-foreground uppercase">
        <span className="w-6 h-px bg-gold" />
        {linkText}
      </div>
    </div>
  )
}

export function StepArrow() {
  return (
    <svg className="hidden md:block size-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

