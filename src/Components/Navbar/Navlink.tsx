import Link from "next/link"

const links = [
  {title: "Home", page: "/"},
  {title: "Fleet", page: "/fleet"},
  {title: "Customization", page: "/customization"},
  {title: "Heritage", page: "/heritage"},
  {title: "Experience", page: "/experience"},
];

export default function NavLink({ className }: {
  className?: string
}) {
  return (
    <>
      {links.map((link, index) => (
        <li key={index} className="list-none">
          <Link className={`${className}`} href={link.page}>
            {link.title}
          </Link>
        </li>
      ))}
    </>
  )
}