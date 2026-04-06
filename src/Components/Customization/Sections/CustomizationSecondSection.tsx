import CustomizationArticleCard from "../CustomizationArticleCard";

export default function CustomizationSecondSection() {
  return (
    <section className="bg-bg-primary px-9 flex flex-col items-center">
      <p className="text-border font-medium">STRUCTURAL INNOVATION</p>
      <div className="flex flex-col md:flex-row w-full md:h-130 gap-5 py-15">
        <div className="flex-3">
          <CustomizationArticleCard 
            src="/RevueltoCust.jpg" title="MONOFUSELAGE" article="The chassis is a carbon-fiber structure, the first of its kind to feature a front structure in Forged Composites. It delivers 25% higher torsional stiffness than the Aventador."
          />
        </div>
        <div className="flex-2 flex flex-col gap-5">
          <div className="flex-1">
            <CustomizationArticleCard 
              src="/RevueltoAD.png" title="AERODYNAMIC" article="Active rear wing increases downforce by 66% in high-load conditions compared to its predecessor."
            />
          </div>
          <div className="flex-1">
            <CustomizationArticleCard
              src="/RevueltoFC.png" title="FORGED COMPOSITES" article="Patented technology allowing for complex shapes while maintaining extreme structural integrity and lightness."
            />
          </div>
        </div>
      </div>
    </section>
  )
}