import FleetArticle from "../Articles/FleetArticle"

const articles = [
  {
    title: "REVUELTO",
    subtitle: "V12 HPEV HIGH PERFORMANCE ELECTRIFIED VEHICLE",
    article: "The first V12 hybrid plug-in HPEV super sports car. Revuelto defines a new paradigm in terms of performance, sportiness and driving pleasure from its unprecedented architecture.",
    src: "/Revuelto.png",
    maxPower: "1015",
    to100kmh: "2.5",
    topSpeed: ">350"
  },
  {
    title: "Huracán Sterrato",
    subtitle: "All-terrain super sports car",
    article: "The first super sports car designed for maximum driving pleasure even away from the asphalt on loose or dirt surfaces, reinterpreting the very concept of sportiness.",
    src: "/Steratto2.png",
    maxPower: "610",
    to100kmh: "3.4",
    topSpeed: ">260"
  },
  {
    title: "Urus Performante",
    subtitle: "Super SUV",
    article: "Designed to push the boundaries of performance and versatility. The Urus Performante is the most extreme and powerful version of the first Super Sport Utility Vehicle.",
    src: "/UrusPerformante2.png",
    maxPower: "666",
    to100kmh: "3.3",
    topSpeed: ">306"
  },
]

export default function FleetFirstSection() {
  return (
    <section className="px-9 py-12 bg-bg-primary flex flex-col gap-10 md:gap-25">
      {articles.map((article, index) => (
        <FleetArticle
          src={article.src} alt="d" title={article.title} subtitle={article.subtitle}
          article={article.article} key={index} maxPower={article.maxPower} to100kmh={article.to100kmh}
          topSpeed={article.topSpeed}

          className={`${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
        />
      ))}

    </section>
  )
}