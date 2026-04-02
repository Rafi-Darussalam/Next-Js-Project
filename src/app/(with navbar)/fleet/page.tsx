import FleetArticle from "@/Components/Fleet/Articles/FleetArticle";
import FleetHero from "@/Components/Fleet/Hero/FleetHero";

const articles = [
  {
    title: "REVUELTO",
    subtitle: "V12 HPEV HIGH PERFORMANCE ELECTRIFIED VEHICLE",
    article: "The first V12 hybrid plug-in HPEV super sports car. Revuelto defines a new paradigm in terms of performance, sportiness and driving pleasure from its unprecedented architecture.",
    src: "/LamborghiniHuracanSteratto.png"
  },
  {
    title: "Huracán Sterrato",
    subtitle: "All-terrain super sports car",
    article: "The first super sports car designed for maximum driving pleasure even away from the asphalt on loose or dirt surfaces, reinterpreting the very concept of sportiness.",
    src: "/LamborghiniHuracanSteratto.png"
  },
]

export default function Fleet() {
  return (
    <div className="bg-bg-primary">
      <FleetHero />
      <section className="px-12 py-12 bg-bg-primary flex flex-col gap-10 md:gap-25">
        {articles.map((article, index) => (
          <FleetArticle
            src="/LamborghiniHuracanSteratto.png" alt="d" title={article.title} subtitle={article.subtitle}
            article={article.article} key={index}

            className={`${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          />
        ))}

      </section>
    </div>
  )
}