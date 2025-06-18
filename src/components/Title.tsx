
type titleProps = {
  title: string
}

export default function Title({title} : titleProps) {
  return (
    <div className="flex gap-2 2xl:gap-10 items-center pt-8">
      <div className="block border-2 2xl:w-20 xl:w-12 w-8 bg-blue-dark h-2 -m-1 2xl:h-4"  />
    <span className="font-extrabold text-xl md:text-3xl xl:text-5xl text-blue-dark 2xl:text-5xl font-serif font-jetbrains">
      {title}
      </span>

    </div>
  )
}
