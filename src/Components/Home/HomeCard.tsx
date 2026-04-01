import ImageAutoSize from "@/Components/ImageAutoSize"
import Link from "next/link"

export default function HomeCard({ title, subtitle, href, linkTitle, src, alt, className }: {
  title: string,
  subtitle: string,
  href: string,
  src: string,
  alt: string,
  linkTitle: string,
  className?: string,
}) {
  return(
    <div className={`flex-1 h-78 relative bg-black rounded-2xl overflow-hidden ${className}`}>
      <div className="absolute w-full h-full">
        <ImageAutoSize src={src} alt={alt} className="object-cover" />
      </div>
      <div className="w-full h-full absolute bg-linear-to-b from-transparent via-transparent to-[#000000]" />
      <div className="relative w-full h-full flex flex-col justify-end text-white pt-25 px-6 py-6">
        <h3 className="text-[1.9rem] font-bold">{title}</h3>
        <p>{subtitle}</p>
        <Link href={href} className="text-accent">
          {linkTitle}
        </Link>
      </div>
    </div>
  )
}