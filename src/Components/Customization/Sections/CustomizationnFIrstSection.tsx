import ImageAutoSize from "@/Components/ImageAutoSize";
import { FaBoltLightning } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";

export default function CustomizationFirstSection() {
  return (
    <section className="bg-bg-primary">
      <article className="flex flex-col md:flex-row gap-20 px-9 py-20">
        <div className="flex-2 flex-col">
          <h2 className="text-white text-[2rem] font-bold pb-2.5">THE PULSE OF THE NEW ERA</h2>
          <p className="text-white pb-2.5">
            The Revuelto is the first HPEV (High Performance Electrified Vehicle) hybrid super sports car. With its naturally aspirated V12 engine and three electric motors, it represents a paradigm shift in performance, sportiness and driving pleasure.
          </p>
          <div className="flex items-center gap-4 px-2.5 py-4 bg-bg-secondary text-white rounded-md mb-2.5">
            <div className="text-[1.3rem]">
              <FaBoltLightning />
            </div>
            <div className="flex flex-col">
              <h3 className="text-white font-medium">TRIPLE ELECTRIC POWER</h3>
              <p>Two motors on the front axle and one integrated into the gearbox provide full torque vectoring and AWD capability</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-2.5 py-4 bg-bg-secondary text-white rounded-md">
            <div className="text-[1.3rem]">
              <GiGearStickPattern />
            </div>
            <div className="flex flex-col">
              <h3 className="text-white font-medium">8-SPEED DUAL CLUTCH</h3>
              <p>A new transverse gearbox architecture that is lighter and faster than ever before</p>
            </div>
          </div>
        </div>
        <div className="w-full max-md:h-70 md:flex-3 rounded-md overflow-clip">
          <ImageAutoSize src="/Revuelto.png" alt="" className="object-cover" />
        </div>
      </article>
    </section>
  )
}