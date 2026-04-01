import Image from "next/image"

export default function ImageAutoSize({ src, alt, className, sizes, loading }: {
  src: string,
  alt: string,
  className?: string,
  sizes?: string,
  loading?: "eager" | "lazy" | undefined
}) {
  return (
    <div className="w-full h-full relative">
      <Image src={src} alt={alt} fill className={className} sizes={sizes} loading={loading} />
    </div>
  )
}