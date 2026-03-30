import MobileNavMenu from "./MobileNavMenu"
import Navlink from "./Navlink"

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 flex justify-between items-center h-13 px-2.5 bg-[#1A1C1E] text-white z-100">

      <div className="font-bold text-2xl">Lamborghini</div>

      <Navlink />

      <MobileNavMenu />

    </nav>
  )
}