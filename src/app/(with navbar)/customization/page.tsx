import CustomizationHero from "@/Components/Customization/Hero/Hero"
import CustomizationFirstSection from "@/Components/Customization/Sections/CustomizationnFIrstSection"
import CustomizationSecondSection from "@/Components/Customization/Sections/CustomizationSecondSection"

export default function Custumization() {
  return (
    <main className="bg-bg-primary">
      <CustomizationHero />
      <CustomizationFirstSection />
      <CustomizationSecondSection />
    </main>
  )
}