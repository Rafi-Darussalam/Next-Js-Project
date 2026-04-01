import HomeHero from "@/Components/Home/Hero/HomeHero";
import HomeFirstSection from "@/Components/Home/Sections/HomeFirstSection";
import HomeSecondSection from "@/Components/Home/Sections/HomeSecondSection";

export default function Home() {
  return (
    <main className="bg-bg-primary">
      <HomeHero />
      <HomeFirstSection />
      <HomeSecondSection />
    </main>
  )
}