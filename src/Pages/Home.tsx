import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Skills from '../components/Skills'
import { FaArrowDown } from 'react-icons/fa'

export default function Home() {
const [scrollButton, setScrollButton] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setScrollButton(false)
     }, 10000)
  })
  return (
    <div className=' h-screen bg-gray-light  flex overflow-hidden'>
      
        <Sidebar />
     
      <main className=' w-full overflow-y-auto '>
        <div className='h-1/2 w-1/4 fixed -bottom-1/3 hidden lg:flex lg:right-1'>
        {scrollButton && ( <div  className='scrollButton w-12 h-fit bg-gray-light rounded-full p-3'><FaArrowDown size={26} /></div>) }

        </div>
        <Skills />
      </main>
    </div>
  )
}
