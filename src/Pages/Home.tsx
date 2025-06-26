import { useEffect, useRef, useState } from "react"
import { FaArrowDown } from "react-icons/fa"
import Sidebar from "../components/Sidebar"
import Skills from "../components/Skills"

export default function Home() {
  const [scrollButton, setScrollButton] = useState(true)
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const mainElement = mainRef.current
    if (!mainElement) return

    const handleScroll = () => {
      if (mainElement.scrollTop === 0) {
        setScrollButton(true)
      } else {
        setScrollButton(false)
      }
    }

    mainElement.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      mainElement.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className=" h-screen bg-gray-light  flex overflow-hidden">
      <Sidebar />

      <main ref={mainRef} className=" w-full overflow-y-auto">
        <div className="h-1/2 w-1/4 fixed -bottom-1/3 hidden lg:flex lg:right-1">
          {scrollButton && (
            <div className="scrollButton w-auto h-fit bg-gray-light rounded-full p-3">
              <FaArrowDown size={26} />
            </div>
          )}
        </div>
        <Skills />
      </main>
    </div>
  )
}
