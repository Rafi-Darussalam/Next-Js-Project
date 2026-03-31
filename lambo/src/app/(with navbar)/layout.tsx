import Navbar from "@/Components/Navbar/Navbar"

export default function NavbarLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="sticky left-0 top-0 pointer-events-none z-50">
        <Navbar />
      </header>
      {children}
    </>
  )
}