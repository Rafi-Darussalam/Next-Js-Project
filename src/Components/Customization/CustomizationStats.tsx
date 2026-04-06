export default function CustomizationStats({ name, value }: {
  name: string,
  value: string
}) {
  return (
    <div>
      <p className="text-[1.3rem] font-bold">{value}</p>
      <p className="text-[0.7rem] opacity-45">{name}</p>
    </div>
  )
}