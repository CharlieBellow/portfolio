
import Skills from "../components/Skills"

export default function Home() {
  return (
  
      <div className=' h-screen bg-gray-light  flex overflow-hidden'>
				<aside className=' h-screen bg-blue-light w-12 lg:w-full border-r-4 border-blue-dark overflow-hidden'>
				
	
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
					
       
					
					</aside>
			<main className=' w-full overflow-y-auto '>
				
					<Skills/>
				
				</main>
      </div>
  )
}
