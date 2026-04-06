import ImageAutoSize from "@/Components/ImageAutoSize";
import CustomizationStats from "../CustomizationStats";

export default function CustomizationThirdSection() {
  return (
    <section className="relative">
      <div className="absolute w-full h-full bg-teritary opacity-30" />
      <div className="py-15 px-9 flex flex-col md:flex-row justify-center gap-12 relative">
        <div className="md:flex-1 relative h-80 md:h-auto w-full rounded-md overflow-clip">
          <ImageAutoSize src="/RevueltoCockPit.png" alt="" className="object-cover" />
        </div>
        <article className="flex-1 text-white flex flex-col gap-2 py-6">
          <div>
            <h3 className="text-[1.7rem] font-bold">THE COCKPIT OF THE FUTURE</h3>
          </div>
          <div>
            <p className="opacity-45">The interior is a "Space-race" inspired environment. The driver and passenger can enjoy a shared digital experience via the three displays integrated into the dashboard.</p>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="flex-1"><CustomizationStats name="DRIVER DISPLAY" value='12.3"' /></div>
              <div className="flex-1"><CustomizationStats name="PASSENGER DISPLAY" value='9.1"' /></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between pt-3">
              <div className="flex-1"><CustomizationStats name="CENTRAL MONITOR" value='8.4"' /></div>
              <div className="flex-1"><CustomizationStats name="DRIVE MODES" value='13' /></div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}