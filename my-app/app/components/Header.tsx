export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="sm:grid-cols-4 px-4 py-[3vw] md:grid-cols-8 lg:grid-cols-12">
      {children}
    </header>
  )
}