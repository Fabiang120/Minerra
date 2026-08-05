export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="px-4 py-[3vw] grid col-span-full border-b border-neutral-600 sm:grid-cols-4 md:grid-cols-8 md:py-[1.4vw] lg:grid-cols-12">
      {children} 
    </header>
  )
}