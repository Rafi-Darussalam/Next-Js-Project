"use client";
import { motion } from 'motion/react';
import Link from "next/link";

const links = [
  {title: "Home", page: "/"},
  {title: "Fleet", page: "/fleet"},
  {title: "Customization", page: "/customization"},
  {title: "Heritage", page: "/heritage"},
  {title: "Experience", page: "/experience"},
];

const itemVariants = {
  hidden: { y:40 },
  visible: (index: number) => ({
    y: 0,
    transition: {
      duration: 0.3,
      delay: index * 0.08,
    }
  })
};

export default function Navlink() {
  return(
    <motion.ul className='hidden md:flex gap-3 overflow-hidden'>
      {links.map((link, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          <Link href={link.page}>
            {link.title}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}