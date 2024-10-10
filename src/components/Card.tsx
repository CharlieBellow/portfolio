import { ReactNode } from 'react'

type CardReactProps = {
  description: string | ReactNode
  title: string
  image: string
  altText: string
  icons: ReactNode
}
export default function CardReact({
  description,
  image,
  icons,
  title,
  altText,
}: CardReactProps) {
  return (
    <div className='text-bgDark flex flex-col p-4 w-full gap-4'>
      <div className='flex sm:justify-between  flex-col sm:flex-row'>
        <span className='font-extrabold text-xl 2xl:text-4xl flex text-justify'>{title}</span>
        <div className='flex gap-2 flex-wrap justify-center'>{icons}</div>
      </div>
      <div className='flex w-auto h-full items-center justify-center gap-4'>
        <img
          src={image}
          alt={altText}
          className='object-cover h-40 w-30 rounded-lg'
        />
      </div>

      <p className='text-base font-bold text-justify 2xl:text-3xl'>{description}</p>
    </div>
  )
}
