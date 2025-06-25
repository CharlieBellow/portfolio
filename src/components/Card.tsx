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
    <div className='text-bgDark flex flex-col p-4 m-2 w-full lg:h-full h-60  gap-4'>
      <div className='flex sm:justify-between flex-col sm:flex-row items-center gap-2'>
        <span className='font-extrabold text-xl 2xl:text-2xl flex text-justify'>{title}</span>
        <div className='flex gap-2 flex-wrap justify-center items-center'>{icons}</div>
      </div>  
      <div className='overflow-scroll lg:flex gap-4 justify-between items-center'>
      <div className='flex lg:w-1/2 h-full items-center justify-center gap-4'>
        <img
          src={image}
          alt={altText}
          className='object-cover h-16 w-26 md:h-40 md:w-30 lg:h-auto lg:w-auto  rounded-lg'
          />
      </div>
      <p className='text-xs font-medium text-justify md:text-base lg:w-1/2 2xl:text-xl'>{description}</p>
          </div>
    </div>
  )
}
