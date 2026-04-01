import Logo from "./Logo";
import NavLink from "./Navlink";
import MobileMenu from "./MobileMenu";
import { SiLamborghini } from "react-icons/si";

export default function Navbar() {
  return(
    <nav className="bg-nav-bg h-14 flex justify-between items-center px-10 pointer-events-auto">
      <Logo />

      <ul className="hidden md:flex gap-3">
        <NavLink className="text-white hover:opacity-80 transition-opacity" />
      </ul>

      <div className="hidden md:block text-white font-[1.2rem]">
        <SiLamborghini />
      </div>

      <div className="md:hidden">
        <MobileMenu />
      </div>
    </nav>
  )
}