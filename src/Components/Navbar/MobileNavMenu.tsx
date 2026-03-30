"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import MobileLink from "./MobileLink"

const menuVariants = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
    transition: {
      duration: 0.3
    }
  }
}

export default function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (<>
    <div
      className="flex flex-col justify-between w-6 h-4 md:hidden z-3"
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

    <AnimatePresence>
      {isOpen &&
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="h-full w-full bg-[#1A1C1E] fixed top-0 left-0 z-1 md:hidden"
        >
          <div className="w-full h-full flex items-center pl-14">
            <MobileLink />
          </div>
        </motion.div>
      }
    </AnimatePresence>
  </>)
}