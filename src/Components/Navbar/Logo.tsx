import Image from "next/image"

export default function Logo() {
  return (
    <div className="invert-100">
      <Image src="/Logo.png" alt="" width={124} height={50} />
    </div>
  )
}