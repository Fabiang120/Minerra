export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="px-12 py-[3vw] grid border-b [border-image:linear-gradient(90deg,var(--color-black)_0%,var(--color-gold-dark)_25%,var(--color-gold-bright)_50%,var(--color-gold-dark)_75%,var(--color-black)_100%)_1] sm:grid-cols-4 md:grid-cols-8 xl:px-0 md:py-[1.6vw] xl:grid-cols-12">
      {children}
    </header>
  )
}