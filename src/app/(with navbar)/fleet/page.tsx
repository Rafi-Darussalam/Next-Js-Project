import FleetHero from "@/Components/Fleet/Hero/FleetHero";
import FleetFirstSection from "@/Components/Fleet/Sections/FleetFirstSection";
import FleetSecondSection from "@/Components/Fleet/Sections/FleetSecondSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lamborghini Fleet",
  description: "Fleet Page",
};

export default function Fleet() {
  return (
    <main className="bg-bg-primary">
      <FleetHero />
      <FleetFirstSection />
      <FleetSecondSection />
    </main>
  )
}