import Logo from "./Logo";
import NavLink from "./Navlink";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return(
    <nav className="bg-nav-bg h-14 flex justify-between items-center px-3.5 pointer-events-auto">
      <Logo />

      <ul className="hidden md:flex gap-3">
        <NavLink className="text-white hover:opacity-80 transition-opacity" />
      </ul>

      <div>

      </div>

      <div className="md:hidden">
        <MobileMenu />
      </div>
    </nav>
  )
}