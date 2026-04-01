import HomeCard from "./HomeCard";

export default function HomeFirstSection() {
  return (
    <section className="bg-bg-primary">
      <div className="w-full h-full px-10 py-25 flex flex-col justify-between">


        <div className="flex flex-col justify-between md:flex-row">
          <h2 className="text-[1.7rem] font-bold text-white">SUPERIOR PERFORMANCE</h2>
          <div className="w-fit">
            <p className="text-accent text-[0.8rem] relative before:content-[''] before:absolute before:w-full before:bottom-0 before:left-0
            before:h-[0.2rem] before:bg-accent">BEYOND THE HORIZON</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-9 md:flex-row md:pt-20">
          <HomeCard src="/" alt="imageCard" title="URUS PERFORMANTE" subtitle="The first Super Suv with the soul of a sport car and the functionality of an SUV" href="p" className="flex-3" linkTitle="DISCOVER MORE" />
          <HomeCard src="/" alt="imageCard" title="HURACAN STERATTO" subtitle="Beyond the Concrete The first super sports car designed for maximum driving pleasure even off the asphalt" href="p" linkTitle="EXPLORE OFF-ROAD" className="flex-2" />
        </div>


      </div>
    </section>
  )
}