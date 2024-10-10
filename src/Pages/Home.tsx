
import Skills from "../components/Skills"

export default function Home() {
  return (
  
      <div className=' max-h-screen bg-gray-light h-full flex overflow-hidden'>
				<nav className=' h-screen bg-blue-light w-12 lg:w-full border-r-4 border-blue-dark '>
				
				<div className="max-h-screen">
					<div className="fixed">
				<div>Charlie Bellow</div>
					<div>Web Developer</div>
					<p>A combinação da minha paixão por código, UI/UX Design e psicologia me posiciona em um lugar único no mercado de desenvolvimento web.</p>
						<button>
						Vamos trabalhar juntos?!
						</button>
						<span>
						Veja meu repositório no GitHub e meu perfil no Linkedin
						Baixe meu currículo (PDF 59,9kb)
						</span>
	
					</div>
					</div>
       
					
					</nav>
			<main className=' w-full overflow-y-scroll '>
				
					<Skills/>
				
				</main>
      </div>
  )
}
