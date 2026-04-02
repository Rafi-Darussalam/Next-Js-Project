import ImageAutoSize from "@/Components/ImageAutoSize";
import React from "react";

export default function FleetArticle({ src, alt, className, children, title, subtitle, article }: {
  src: string,
  alt: string,
  className?: string,
  children?: React.ReactNode,
  title: string,
  subtitle: string,
  article: string
}) {
  return (
    <article className={`flex flex-col md:flex-row h-120 md:h-70 gap-15 ${className}`}>
      <div className="flex-4 w-full h-full rounded-lg overflow-hidden">
        <ImageAutoSize src={src} alt={alt} className="object-cover" />
      </div>
      <div className="flex-3 flex flex-col overflow-hidden text-white overflow-y-auto">
        <h3 className="text-[1.7rem] font-bold">{title}</h3>
        <div className="font-medium text-accent">{subtitle}</div>
        <div className="w-full overflow-auto">{article}</div>
        <div className="flex">
          {children}
        </div>
      </div>
    </article>
  )
}