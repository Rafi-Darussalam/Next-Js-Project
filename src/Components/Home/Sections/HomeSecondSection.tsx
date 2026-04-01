export default function HomeSecondSection() {
  return (
    <section className="w-fit relative">
      <div className="w-full h-full absolute bg-linear-to-r from-teritary via-teritary to-accent opacity-30" />
      <div className="w-full h-full flex flex-col justify-between items-center gap-12 py-20">
        <div>
          <p className="text-accent font-bold">DIREZIONE COR TAUR!</p>
        </div>

        <div className="text-white px-20 md:px-50">
          <h2 className="text-[4vw] text-center">"Our roadmap to decarbonization while remaining faithful to our DNA: the heart of the bull."</h2>
        </div>

        <div className="bg-accent h-1 w-50" />
      </div>
    </section>
  )
}