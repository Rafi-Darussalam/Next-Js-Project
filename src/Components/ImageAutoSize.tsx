import Image from "next/image"

export default function ImageAutoSize({ src, alt, className, sizes }: {
  src: string,
  alt: string,
  className?: string,
  sizes?: string
}) {
  return (
    <div className="w-full h-full relative">
      <Image src={src} alt={alt} fill className={className} sizes={sizes} />
    </div>
  )
}