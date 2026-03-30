import Image from "next/image"

export default function Home() {
  return (
    <main>
      <div className="h-[calc(100vh-3.25rem)] relative">
        <div className="absolute w-full h-full">
          <div className="relative w-full h-full">
            <Image src="/HeroBg.jpg" alt="" fill loading="eager" className="object-cover" />
          </div>
        </div>

        <div className="absolute w-full h-full bg-linear-to-b from-transparent to-[#1A1C1E]" />

        <div className="w-full h-full flex flex-col justify-end relative px-5">

          <div className="text-[#9CF0FF]">
            AUTOMOBILI LAMBORGHINI
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-[60%]">
              <h1 className="font-bold text-[8vw] text-white leading-[8vw] italic">
                THE REVOLUTION OF POWER
              </h1>
              <div className="flex gap-1.5 pt-4 pb-10">
                <button
                  className="bg-[#00DAF3] px-4 py-3 rounded-xl text-[0.7rem] font-bold"
                >CONFIGURE YOUR REVUELTO</button>
                <button
                  className="border border-[#E3E2E5] px-4 py-3 rounded-xl text-[0.7rem] font-bold text-white"
                >EXPLORE DETAILS</button>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex md:flex-col gap-4 md:mb-25 md:px-20 md:border-l border-[#E3E2E5]">
                <div className="flex flex-col">
                  <p className="text-[0.7rem] text-[#E3E2E5] leading-1">MAX POWER</p>
                  <p className="text-[1.8rem] text-white">
                    1015 <span className="text-[#00DAF3] text-[0.8rem]">CV</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[0.7rem] text-[#E3E2E5] leading-1">MAX POWER</p>
                  <p className="text-[1.8rem] text-white">
                    1015 <span className="text-[#00DAF3] text-[0.8rem]">CV</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[0.7rem] text-[#E3E2E5] leading-1">MAX POWER</p>
                  <p className="text-[1.8rem] text-white">
                    1015 <span className="text-[#00DAF3] text-[0.8rem]">CV</span>
                  </p>
                </div>
              </div>
              </div>
          </div>

        </div>

      </div>
    </main>
  )
}