export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="px-12 py-[3vw] grid col-span-full border-b border-neutral-600 sm:grid-cols-4 md:grid-cols-8 lg:px-0 md:py-[1.6vw] xl:grid-cols-12">
      {children}
    </header>
  )
}