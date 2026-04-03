import Button from "@/Components/Button"

export default function FleetHero() {
  return (
    <div className="bg-bg-primary px-9">
      <div className="flex flex-col gap-2 py-7 md:flex-row border-b border-border">
        <div className="flex-3">
          <p className="text-accent">AUTOMOBILI LAMBORGHINI</p>
          <h1 className="text-white text-[7vw] font-bold leading-[7vw] italic"
          >THE RAGING <br /> <span className="text-accent">BULL COLLECTION</span></h1>
        </div>
        <div className="flex-1 flex flex-col justify-end">
          <div className="flex gap-2.5">
            <Button title="CONFIGURE" className="border-accent bg-accent" />
            <Button title="CONFIGURE" />
          </div>
        </div>
      </div>
    </div>
  )
}