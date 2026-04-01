import Link from "next/link"

const links = [
  { title: "Home", page: "/" },
  { title: "Fleet", page: "/fleet" },
  { title: "Customization", page: "/customization" },
  { title: "Heritage", page: "/heritage" },
  { title: "Experience", page: "/experience" },
];

export default function NavLink({ className }: {
  className?: string
}) {
  return (
    <>
      {links.map((link, index) => (
        <li key={index} className="list-none">
          <Link className={`
            relative before:content-'' before:bottom-0 before:left-0 before:w-0 before:h-1 before:absolute
            before:bg-white before:rounded-2xl hover:before:w-full before:translate-y-1 before:transition-all
            ${className}`} href={link.page}>
            {link.title}
          </Link>
        </li>
      ))}
    </>
  )
}