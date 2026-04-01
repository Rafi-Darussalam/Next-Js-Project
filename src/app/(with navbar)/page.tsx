import HomeFirstSection from "@/Components/Home/FirstSection/HomeFirstSection";
import HomeSecondSection from "@/Components/Home/FirstSection/HomeSecondSection";
import HomeHero from "@/Components/Home/Hero/HomeHero";

export default function Home() {
  return (
    <main className="bg-bg-primary">
      <HomeHero />
      <HomeFirstSection />
      <HomeSecondSection />
    </main>
  )
}