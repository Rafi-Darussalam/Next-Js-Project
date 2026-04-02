export default function Stats({ statsName, value, format }: {
  statsName: string,
  value: string,
  format: string
}) {
  return (
    <div>
      <p className="text-white text-[0.7rem] opacity-60">{statsName}</p>
      <p className="text-white text-[1.5rem] font-bold">{value}
        <span className="text-[1rem] text-accent"> {format}</span>
      </p>
    </div>
  )
}