type StepCardProps = {
  step: string;
  title: string;
  linkText: string;
}

export function StepCard({ step, title, linkText }: StepCardProps) {
  return (
    <div className="flex flex-col items-start ring-1 ring-border transition-all duration-500 hover:ring-gold px-12 w-full h-60 justify-start lg:hover:w-90 lg:justify-between lg:w-80 lg:h-65 lg:px-12 lg:py-12">
      <span className="mt-auto lg:mt-0 text-gold tracking-widest">STEP {step}</span>
      <h1 className="mt-6 mb-12 lg:mt-0 lg:mb-6">{title}</h1>
      <div className="mb-auto lg:mb-0 flex items-center gap-3 text-xs tracking-wider font-medium text-muted-foreground uppercase">
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

