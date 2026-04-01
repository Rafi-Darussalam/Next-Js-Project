import Link from "next/link"

export default function FooterLinksComp({ title, className, linkArr }: {
  title: string,
  className?: string,
  linkArr: {title: string, page: string}[]
}) {
  const links = linkArr

  return (
    <div className={`${className}`}>
      <p className="font-bold pb-1.5">{title}</p>
      <div className="flex flex-col gap-1 text-[0.8rem] opacity-50">
        {links.map((link, index) => (
          <Link href={link.page} key={index}>{link.title}</Link>
        ))}
      </div>
    </div>
  )
}