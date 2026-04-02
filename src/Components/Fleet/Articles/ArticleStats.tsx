import Stats from "@/Components/Stats"

export default function FleetArticleStats({maxPower, to100kmh, topSpeed}: {
  maxPower: string,
  to100kmh: string,
  topSpeed: string
}) {
  return (
    <div className="flex justify-between w-full">
      <Stats statsName="MAX POWER" value={maxPower} format="CV" />
      <Stats statsName="0-100 KM/H" value={to100kmh} format="S" />
      <Stats statsName="TOP SPEED" value={topSpeed} format="KM/H" />
    </div>
  )
}