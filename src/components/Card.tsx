import { FaReact } from 'react-icons/fa'
import { LuFigma } from 'react-icons/lu'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import glpi from '../assets/glpi.png'
import Description from './Description'
import { ReactNode } from 'react'

type CarProps = {
  text: string,
  image: ReactNode,
  icons: ReactNode,
}
export default function Card() {
  return (
    <div className='text-bgDark flex flex-col p-4 w-full'>
      <div className="flex sm:justify-between itemns-center flex-col sm:flex-row">
        <span className='font-extrabold text-xl'>GLPI</span>
        <div className='flex gap-2 flex-wrap justify-center'>
          <FaReact  size={26}/>
          <LuFigma  size={26}/>
          <RiTailwindCssFill  size={26}/>
          <SiTypescript  size={26}/>
          <RiNextjsFill size={26} />
        </div>
      </div>
      <div className='flex w-auto h-full items-center justify-center gap-4'>

        <img src={glpi} alt='projeto glpi' className='object-cover h-40 w-30' />
      </div>
        
        <p className="text-base">Aplicação de fluxo de chamados da Universidade Federal de Aalgoas</p>
    </div>
  )
}
