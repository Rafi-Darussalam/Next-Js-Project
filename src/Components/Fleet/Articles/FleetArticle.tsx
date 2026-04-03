import ImageAutoSize from "@/Components/ImageAutoSize";
import FleetArticleStats from "./ArticleStats";

export default function FleetArticle({
  src, alt, className, title, subtitle, article, maxPower, to100kmh, topSpeed
}: {
  src: string,
  alt: string,
  className?: string,
  title: string,
  subtitle: string,
  article: string,
  maxPower: string,
  to100kmh:string,
  topSpeed: string
}) {
  return (
    <article className={`flex flex-col md:flex-row h-120 md:h-70 gap-15 ${className}`}>
      <div className="flex-4 w-full h-full rounded-lg overflow-clip">
        <ImageAutoSize src={src} alt={alt} className="object-cover" sizes="" />
      </div>
      <div className="flex-6 gap-2.5 md:flex-3 flex flex-col justify-between overflow-hidden md:py-7 text-white overflow-y-auto">
        <div>
          <h3 className="text-[1.7rem] font-bold">{title}</h3>
          <div className="font-medium text-accent">{subtitle}</div>
        </div>
        <div className="w-full overflow-auto">{article}</div>
        <div className="flex">
          <FleetArticleStats maxPower={maxPower} to100kmh={to100kmh} topSpeed={topSpeed} />
        </div>
      </div>
    </article>
  )
}