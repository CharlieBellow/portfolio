import Footer from "../components/Footer"
import Header from "../components/Header"
import Portfolio from "../components/Portfolio"

import charlie from "../assets/charlie.png"
import Skills from "../components/Skills"

export default function Home() {
  return (
  
      <div className=' max-h-screen bg-gray-light h-full flex overflow-hidden'>
        {/* <Header/>
				<Portfolio />
				<Footer /> */}
				<nav className=' h-screen bg-blue-light lg:w-full border-r-4 border-blue-dark '>
				
				<div className="max-h-screen">
				<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br />
					<div className="fixed">

					Sidebar
					</div>
					</div>
       
					
					</nav>
			<main className=' w-full overflow-y-scroll  '>
					<div className="">Content
					<br/>
					<br/>
					<Skills/>

					</div>
				</main>
      </div>
  )
}
