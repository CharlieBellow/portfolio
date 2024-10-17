import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  useEffect(() => {
    function display() {
      if (screen.width <= 768) {
        setIsOpen(false)
    
        
  
      }
    }
    display()
  }, [])
  
  return (
    <aside
      className={`h-screen bg-blue-light  border-r-4 border-blue-dark overflow-hidden md:w-1/2 w-full ${
        isOpen ? 'md:w-full absolute md:relative w-full ' : 'w-12 md:w-12 lg:w-12'
      } `}
    >
      <div className={`fixed p-6 h-screen flex justify-center gap-4  ${isOpen ? "md:w-1/2 w-full" : "pl-3"}`}>
      

        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-20  text-justify text-lg justify-center  `}>
          <div>
          <div className='font-extrabold text-4xl text-blue-dark'>Charlie Bellow</div>
          <div className='text-blue-dark/50 font-extrabold text-5xl'>Web Developer</div>

          </div>
          <p className='font-bold'>
            A combinação da minha paixão por código, UI/UX Design e psicologia
            me posiciona em um lugar único no mercado de desenvolvimento web.
          </p>
          <button className='w-fit rounded-xl shadow-xl hover:border-gray-light hover:text-gray-light text-blue-dark font-bold text-base p-2 border-blue-dark border-2'>Vamos trabalhar juntos?</button>
          <div className='text-xs font-medium text-white flex flex-col gap-2'>

          <span>
            Veja meu repositório no GitHub e meu perfil no <a target="_blank" href="https://www.linkedin.com/in/charlie-bellow-de-oliveira-pimentel-silva/" className='text-action'>Linkedin</a>.
          </span>
          <span>

          Baixe meu <a target="_blank" href="https://docs.google.com/document/d/1BliDXffd2jeCiTYMV_bjgqya3uE3fOq33Igy1NTXw_o/edit?usp=sharing" className='text-action'>Currículo</a> (PDF 59,9kb).
          </span>
          </div>
        </div>
        <button
          onClick={() => {
            setIsOpen(!isOpen)
     
          }}
          
        >
          {isOpen ? (
            <div>
              <FaChevronLeft size={23} />
            </div>
          ) : (
            <div>
              <FaChevronRight size={23} />
            </div>
          )}
        </button>
      </div>
    </aside>
  )
}
