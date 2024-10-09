type titleProps = {
  title: string
}

export default function Title({title} : titleProps) {
  return (
    <div className="flex gap-2 items-center">
      <div className="block border-2 w-6 bg-blue-dark h-2 -m-1 "  />
    <span>
      {title}
      </span>

    </div>
  )
}
