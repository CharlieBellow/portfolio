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
    <div className='text-bgDark flex flex-col p-4 m-2 w-full h-60 gap-4 overflow-scroll'>
      <div className='flex sm:justify-between  flex-col sm:flex-row'>
        <span className='font-extrabold text-xl 2xl:text-3xl flex text-justify'>{title}</span>
        <div className='flex gap-2 flex-wrap justify-center '>{icons}</div>
      </div>
      <div className='flex w-auto h-full items-center justify-center gap-4'>
        <img
          src={image}
          alt={altText}
          className='object-cover h-16 w-26 md:h-40 md:w-30 lg:h-100 rounded-lg'
        />
      </div>

      <p className='text-xs font-medium text-justify md:text-base 2xl:text-2xl  '>{description}</p>
    </div>
  )
}
