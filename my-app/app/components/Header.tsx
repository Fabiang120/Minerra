export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="col-span-full w-full">
      {children}
    </header>
  );
}