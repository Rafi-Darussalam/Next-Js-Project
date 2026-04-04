import Button from "@/Components/Button";
import ImageAutoSize from "@/Components/ImageAutoSize";
import Stats from "@/Components/Stats";

export default function CustomizationHero() {
  return (
    <div className="w-full h-[50vh] md:h-[calc(100vh-3.5rem)] relative">
      <div className="absolute w-full h-full">
        <ImageAutoSize src="/LamborghiniRevuelto.jpg" alt="" className="object-cover" />
      </div>
      <div className="absolute w-full h-full bg-linear-to-b from-transparent to-bg-primary" />
      <div className="flex flex-col justify-end gap-7 w-full h-full relative px-9 py-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-2">
            <p className="text-accent">HIGH PERFORMANCE ELECTRIFIED VEHICLE</p>
            <h1 className="text-white text-[8vw] leading-[8vw] font-bold">REVUELTO: BEYOND THE FUTURE</h1>
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <div className="flex md:justify-end">
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-5">
                  <Stats statsName="COMBINED POWER" value="1015" format="CV" />
                  <Stats statsName="0-100 KM/H" value="2.5" format="S" />
                </div>
                <div className="flex justify-center">
                  <Button title="CONFIGURE YOURS" className="border-accent bg-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}