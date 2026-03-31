"use client"
import { useState, useEffect } from "react"
import NavLink from "./Navlink"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {setIsOpen(false)}
    }

    window.addEventListener('resize', handleResize)
    return () => {
     window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (<>
    <div className="relative flex flex-col justify-between w-6 h-4 z-2"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={`
        ${isOpen ? "rotate-45 translate-y-1.75" : ""}
        w-full h-0.5 bg-white transition-all`}>
      </span>

      <span className={`
        ${isOpen ? "opacity-0" : ""}
        w-full h-0.5 bg-white transition-all`}>
      </span>

      <span className={`
        ${isOpen ? "-rotate-45 -translate-y-1.75" : ""}
        w-full h-0.5 bg-white transition-all`}>
      </span>

    </div>

    {isOpen &&
      <div className="bg-nav-bg w-full h-screen fixed top-0 left-0 flex items-center">
        <div className="w-full h-[80%] border-y border-border flex flex-col justify-center pl-9">
          <NavLink className="text-white text-[3rem]" />
        </div>
      </div>
    }
  </>
  )
}