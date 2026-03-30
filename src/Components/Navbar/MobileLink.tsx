import Link from "next/link";

const links = [
  { title: "Home", page: "/" },
  { title: "Fleet", page: "/fleet" },
  { title: "Customization", page: "/customization" },
  { title: "Heritage", page: "/heritage" },
  { title: "Experience", page: "/experience" },
];

export default function MobileLink() {
  return (
    <>
      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <Link key={index} href={link.page}
            className="text-4xl"
          >{link.title}</Link>
        ))}
      </div>
    </>
  )
}