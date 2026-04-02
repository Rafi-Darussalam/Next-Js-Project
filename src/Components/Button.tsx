export default function Button({ title, onclick, className }: {
  title: string,
  onclick?: () => void,
  className?: string
}) {
  return <button className={`py-2 px-4 text-white border border-border rounded-md cursor-pointer ${className}`
  } onClick={onclick}>{title}</button>
}