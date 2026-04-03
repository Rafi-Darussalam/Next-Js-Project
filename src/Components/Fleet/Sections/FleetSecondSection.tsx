import ImageAutoSize from "@/Components/ImageAutoSize";
import Button from "@/Components/Button";

export default function FleetSecondSection() {
 return (
  <section className="px-9 pt-7 pb-19">
    <div className="relative w-full h-85 bg-[linear-gradient(to_right,var(--teritary),var(--bg-primary),var(--bg-primary),var(--teritary))] rounded-lg overflow-clip">
      <div className="w-full h-full absolute blur-[0.2rem]">
        <ImageAutoSize src="/Engine.png" alt="" className="object-cover" />
      </div>
      <div className="w-full h-full absolute bg-black opacity-65" />
      <div className="w-full h-full flex flex-col gap-3 justify-center items-center relative text-white text-center px-6">
        <h2 className="text-[4vw] font-bold">BEYOND THE HORIZON</h2>
        <p className="text-[0.8rem]">EXPERIENCE THE VISCERAL POWER OF THE BULL IN YOUR EXCLUSIVE TRACK DAYS AND LUXURY TOURS</p>
        <Button title="EXPLORE EXPERIENCES" className="border-accent" />
      </div>
    </div>
  </section>
 )
}