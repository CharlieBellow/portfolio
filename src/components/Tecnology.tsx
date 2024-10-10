import React from 'react'
import Title from './Title'
import { RiJavascriptFill, RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiChakraui, SiRadixui, SiShadcnui, SiTypescript } from 'react-icons/si'
import { FaFigma, FaHtml5, FaLinux, FaNpm, FaReact } from 'react-icons/fa'
import { LuCircleEllipsis, LuFigma } from 'react-icons/lu'
import Tech from './Tech'

export default function Tecnology() {
  return (
    <div className='flex flex-col gap-8'>
    <Title title='Habilidades Comportamentais' />
      <div className='m-4 flex flex-col w-1/2 gap-8 text-xl 2xl:text-3xl px-3'>
        <Tech title="React"  icon={<><FaReact size={26} /></>}/>
        <Tech title="Typescript" icon={<><SiTypescript/></>}/> 
        <Tech title="Next" icon={<><RiNextjsFill/></>}  />
        <Tech title="Tailwind CSS" icon={<><RiTailwindCssFill/></>}  />
        <Tech title="Figma" icon={<><LuFigma size={26} /></>}    />
        <Tech title="JavaScript ES6" icon={<><RiJavascriptFill/></>}   />
        <Tech title="HTML 5 " icon={<><FaHtml5/></>}  />
        <Tech title="CSS 3" icon={<><LuCircleEllipsis/></>}   />
        <Tech title="Radix" icon={<><SiRadixui/></>}   />
        <Tech title="Shadcn" icon={<><SiShadcnui/></>}    />
        <Tech title="Chakra " icon={<> <SiChakraui/></>}  />
        <Tech title="Npm" icon={<><FaNpm/></>}   />
        <Tech title="Linux" icon={<> <FaLinux /></>}  />
        

    </div>
  </div>
  )
}
