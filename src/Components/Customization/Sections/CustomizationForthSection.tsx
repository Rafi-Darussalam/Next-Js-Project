import CustomizationSpec from "../CustomizationSpec";

export default function CustomizationForthSection() {
  return (
    <section className="bg-bg-primary">
      <article className="flex flex-col items-center px-[8vw] gap-4 py-11">

        <h2 className="text-white text-[1.5rem] font-bold">TECHNICAL SPESIFICATION</h2>

        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-10">
            <CustomizationSpec name="INTERNAL COMBUSTION ENGINE" value="V12, 6.5 LITERS" />
            <CustomizationSpec name="MAX POWER (ICE + ELECTRIC)" value="1015CV (1001HP)" />
            <CustomizationSpec name="TOP SPEED" value=">350KMH" />
            <CustomizationSpec name="BATTERY CAPACITY" value="3.8KWH Lithium Ion" />
            <CustomizationSpec name="TIRES" value="Bridgestone Potenza Spory" />
          </div>
        </div>
      </article>
    </section>
  )
}