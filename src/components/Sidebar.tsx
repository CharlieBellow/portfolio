import { useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  

  useEffect(() => {
    function display() {
      if (screen.width < 768) {
        setIsOpen(false)
      }
      if (screen.width >= 768) {
        setIsOpen(true)
      }
    }
    display()
  }, [])

  return (
    <aside
      className={`h-screen bg-blue-light  border-r-4 border-blue-dark overflow-hidden  ${
        isOpen
          ? "md:w-full absolute md:relative w-full "
          : "w-8"
      } `}
    >
      <div
        className={`fixed p-6 h-screen flex justify-center gap-4  ${
          isOpen ? "md:w-1/2 w-full" : "pl-3 w-8"
        }`}
      >
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col overflow-scroll h-full gap-4 md:gap-5 lg:gap-20  text-justify text-lg justify-center 2xl:p-10 `}
        >
          <div>
            <div className="font-extrabold md:text-3xl text-blue-dark 2xl:text-6xl">
              Charlie Bellow
            </div>
            <div className="text-blue-dark/50 font-extrabold text-2xl  md:text-4xl 2xl:text-7xl">
              Web Developer
            </div>
          </div>
          <p className="font-bold text-sm 2xl:text-2xl">
            A combinação da minha paixão por código, UI/UX Design e psicologia
            me posiciona em um lugar único no mercado de desenvolvimento web.
          </p>
          <button className="w-fit rounded-xl shadow-xl hover:border-gray-light hover:text-gray-light text-blue-dark font-bold text-sm p-2 2xl:text-2xl 2xl:p-5 border-blue-dark border-2">
            <a target="_blank" href="http://wa.me/+5582996008552">
              Vamos trabalhar juntos?
            </a>
          </button>
          <div className="text-xs font-medium text-white flex flex-col gap-2 2xl:text-lg">
            <span>
              Veja meu repositório no{" "}
              <a
                target="_blank"
                href="https://github.com/CharlieBellow"
                className="text-action"
              >
                GitHub
              </a>{" "}
              e meu perfil no{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/charlie-bellow-de-oliveira-pimentel-silva/"
                className="text-action"
              >
                Linkedin
              </a>
              .
            </span>
            <span>
              Baixe meu{" "}
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1BliDXffd2jeCiTYMV_bjgqya3uE3fOq33Igy1NTXw_o/edit?usp=sharing"
                className="text-action"
              >
                Currículo
              </a>{" "}
              (PDF 59,9kb).
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          {isOpen ? (
            <div className="lg:hidden">
              <FaChevronLeft size={23} />
            </div>
          ) : (
            <div>
              <FaChevronRight className="lg:hidden" size={23} />
            </div>
          )}
        </button>
      </div>
    </aside>
  )
}
