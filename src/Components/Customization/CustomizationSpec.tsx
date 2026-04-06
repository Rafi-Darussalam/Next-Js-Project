export default function CustomizationSpec({ name, value }: {
  name: string,
  value: string
}) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between text-white max-md:border md:border-b border-border p-3">
      <p className="opacity-45">{name}</p>
      <p>{value}</p>
    </div>
  )
}