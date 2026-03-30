import Navbar from "@/Components/Navbar/Navbar"

export default function LayoutWithNavbar({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {children}
    </>
  )
}