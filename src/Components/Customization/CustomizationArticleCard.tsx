import ImageAutoSize from "../ImageAutoSize";

export default function CustomizationArticleCard({ title, article, src }: {
  title: string,
  article: string,
  src: string
}) {
  return (
    <article className="w-full h-full relative rounded-md overflow-clip">
      <div className="w-full h-full absolute">
        <ImageAutoSize src={src} alt="" className="object-cover" />
      </div>
      <div className="absolute bg-linear-to-b from-transparent max-md:via-teritary opacity-70 md:opacity-100 to-teritary w-full h-full" />
      <div className="relative flex flex-col justify-end w-full h-full pb-4 pt-20 md:pt-4 px-4 text-white">
        <h3 className="font-bold text-[1.3rem]">{title}</h3>
        <p>{article}</p>
      </div>
    </article>
  )
}