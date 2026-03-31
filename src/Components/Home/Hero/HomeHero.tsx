import ImageAutoSize from "@/Components/ImageAutoSize";
import Stats from "./Stats";

export default function HomeHero() {
  return (
    <div className="relative w-full h-[calc(100vh-3.5rem)] bg-bg-primary">
      <div className="w-full h-full absolute overflow-hidden">
        <ImageAutoSize src="/HomeHeroBg.png" alt="Lamborghini Rear View" className="object-contain translate-y-30 md:translate-y-0" />
      </div>
      <div className="absolute w-full h-full bg-linear-to-b from-transparent to-bg-primary" />

      <div className="w-full h-full relative px-10 py-6 box-border flex flex-col justify-end">
        <div className="flex flex-col md:flex-row pb-15 gap-2.5">
          <div className="flex-3">
            <p className="text-accent">AUTOMOBILI LAMBORGHINI</p>
            <h1 className="text-white text-[10vw] font-bold italic leading-[8vw]">
              THE REVOLUTION OF POWER
            </h1>
          </div>

          <div className="flex flex-col justify-end md:items-center flex-1">
            <div className="flex md:flex-col gap-5">
              <Stats statsName="MAX POWER" value="1015" format="CV" />
              <Stats statsName="0-100 KM/H" value="2.5" format="S" />
              <Stats statsName="TOP SPEED" value=">350" format="KM/H" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}