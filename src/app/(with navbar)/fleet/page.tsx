import FleetHero from "@/Components/Fleet/Hero/FleetHero";
import FleetFirstSection from "@/Components/Fleet/Sections/FleetFirstSection";
import FleetSecondSection from "@/Components/Fleet/Sections/FleetSecondSection";

export default function Fleet() {
  return (
    <div className="bg-bg-primary">
      <FleetHero />
      <FleetFirstSection />
      <FleetSecondSection />
    </div>
  )
}