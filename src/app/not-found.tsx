import ImageAutoSize from "@/Components/ImageAutoSize";
import Link from "next/link";
import Button from "@/Components/Button";

export default function NotFound() {
  return (
    <div className="relative w-full h-screen bg-bg-primary">
      <div className="w-full h-full absolute brightness-50">
        <ImageAutoSize src="/NotFoundBackground.png" alt="" className="object-cover" loading="eager" />
      </div>
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="relative flex flex-col items-center w-90 h-60">
          <div className="w-full h-full absolute flex justify-center">
            <p className="text-[1000%] leading-30 text-white font-bold opacity-20">404</p>
          </div>
          <div className="relative">
            <p className="flex flex-col text-[2.5rem] font-bold text-white text-center leading-10">
              YOU'VE GONE
              <span className="text-accent text-glow">
                OFF TRACK
              </span>
            </p>
            <p className="text-white text-[0.8rem] text-center">
              THE ROAD ENDS HERE. POWER IS NOTHING WITHOUT CONTROL
            </p>
            <div className="flex justify-center pt-3.5 gap-2.5">
              <Link href="/fleet">
                <Button title="EXPLORE THE FLEET" className="border-accent bg-accent" />
              </Link>
              <Link href="/">
                <Button title="BACK TO HOME" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}