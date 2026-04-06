import CustomizationHero from "@/Components/Customization/Hero/Hero"
import CustomizationForthSection from "@/Components/Customization/Sections/CustomizationForthSection"
import CustomizationFirstSection from "@/Components/Customization/Sections/CustomizationnFIrstSection"
import CustomizationSecondSection from "@/Components/Customization/Sections/CustomizationSecondSection"
import CustomizationThirdSection from "@/Components/Customization/Sections/CustomizationThirdSection"

export default function Custumization() {
  return (
    <main className="bg-bg-primary">
      <CustomizationHero />
      <CustomizationFirstSection />
      <CustomizationSecondSection />
      <CustomizationThirdSection />
      <CustomizationForthSection />
    </main>
  )
}