export default function HamburgerMenu({isOpen}: {
  isOpen: boolean
}) {
  return (
    <div className="flex flex-col justify-between w-6 h-4 ">
      <span className={`
        ${isOpen ? "rotate-45 translate-y-1.75" : ""}
        w-full h-0.5 bg-white`}>
      </span>

      <span className={`
        ${isOpen ? "opacity-0" : ""}
        w-full h-0.5 bg-white`}>
      </span>

      <span className={`
        ${isOpen ? "-rotate-45 -translate-y-1.75" : ""}
        w-full h-0.5 bg-white`}>
      </span>
    </div>
  )
}