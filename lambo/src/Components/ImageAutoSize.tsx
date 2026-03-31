import Image from "next/image"

export default function ImageAutoSize({ src, alt, className }: {
  src: string,
  alt: string,
  className?: string
}) {
  return (
    <div className="w-full h-full relative">
      <Image src={src} alt={alt} fill className={className} />
    </div>
  )
}