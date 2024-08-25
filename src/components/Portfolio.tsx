
import glpi from "../assets/glpi.png"
import listtudo from "../assets/listtudo.png"
import repositorio from "../assets/repositorio-lgbt.png"
import ru from "../assets/ru.png"

export default function Portfolio() {
	return (
		<>
			<h1 className="text-text text-xl  lg:text-5xl font-bold  text-center">
				Charlie's Portfolio (em desenvolvimento)
			</h1>
			<div className="text-text flex flex-wrap items-start gap-6 px-6 bg-bgDark lg:w-full  w-full mx-8 h-auto my-7 justify-center ">
				<div className="items-center flex justify-center flex-col flex-1 bg-[#222] rounded-lg p-4 ">
					<div className="lg:w-60 mx-10 md:mx-0">
						<img src={repositorio} alt="Miniatura do Site Repositório LGBT" />
					</div>
					<a
						href={"https://repositoriolgbt-react.vercel.app/"}
						className="lg:text-3xl hover:underline text-action py-4"
					>
						Repositório LGBT
					</a>
					<p className="lg:text-2xl px-9 text-xs">
						Site que filtra textos acadêmicos com temáticas LGBT. Feito em React
						e Javascript. O Design e todo o UX Design do site foi totalmente
						pensado e desenvolvido por mim utilizando o{" "}
						<a
							href="https://www.figma.com/file/tPLEhLD7w4pjaiUAEJPrBP/Forum-edit---Design-System?node-id=14%3A53&t=NhUJxsU1qIeaGot5-1"
							className=" text-action hover:underline"
						>
							Figma
						</a>{" "}
						e outras ferramentas de UX Design. Aqui você encontra o link do
						projeto no{" "}
						<a
							href="https://github.com/CharlieBellow/repositoriolgbt-react"
							className=" text-action hover:underline"
						>
							GitHub
						</a>
						.
					</p>
				</div>
				<div className="items-center flex justify-center flex-col flex-1 bg-[#222] rounded-lg p-4">
					<div className="w-60  mx-10 md:mx-0">
						<img src={glpi} alt="Miniatura do Site GLPI - UFAL" />
					</div>
					<a
						href={"https://glpi-react-components.vercel.app/"}
						className="lg:text-3xl hover:underline text-action py-4"
					>
						Site GLPI - UFAL
					</a>
					<p className="lg:text-2xl px-9 text-xs">
						(Em desenvolvimento) Site criado para gerenciar chamados internos da
						Universidade Federal de Alagoas (UFAL). Ele está sendo desenvolvido em
						conjunto com a equipe de desenvolvimento da Gerência de Tecnologia
						da Informação (GTI) da qual faço parte. Utilizamos React,
						Typescript, Radix, Chakra, Tailwindcss, yup, Formik, axios, ente
						outras tecnologias. A parte gráfica foi desenvolvida em grande parte por mim no{" "}
						<a
							href="https://www.figma.com/file/YvgimWmPZIPsgqAD7JElCA/GLPI---UFAL-Arapiraca?node-id=4%3A3849&t=NhUJxsU1qIeaGot5-1"
							className=" text-action hover:underline py-4"
						>
							Figma
						</a>
						. E este é o link do projeto no{" "}
						<a
							href="https://github.com/CharlieBellow/GLPI-react-components"
							className=" text-action hover:underline"
						>
							GitHub
						</a>
						.
					</p>
				</div>
				<div className="items-center flex justify-center flex-col flex-1 bg-[#222] rounded-lg p-4">
					<div className="w-32">
						<img
							src={ru}
							alt="Miniatura do Web App do Restaurante Universitário - UFAL"
						/>
					</div>
					<p
						
						className="lg:text-3xl text-action py-4"
					>
						Web App do Restaurante Universitário - UFAL
					</p>
					<p className="lg:text-2xl px-9 text-xs">
						(Em desenvolvimento) Site pensado para gerenciar os pagamentos do
						Restaurante Universitário da Universidade Federal de Alagoas (UFAL).
						Será desenvolvido em conjunto com a equipe de desenvolvimento
						da Gerência de Tecnologia da Informação (GTI) da qual faço parte.
						Utilizaremos React, Next, Typescript, Radix, Chakra, Tailwindcss, ente outras tecnologias. A parte gráfica já foi
						desenvolvida em grande parte por mim no{" "}
						<a
							href="https://www.figma.com/file/H2omDqMXOrt4Cyi5ZnocNP/RU---UFAL-Arapiraca?node-id=4%3A3848&t=mOJDFmVjJF1eNZun-0"
							className=" text-action hover:underline"
						>
							Figma
						</a>
						. E este é o link do projeto no{" "}
						<a href="https://github.com/CharlieBellow/RU-UFAL" className=" text-action hover:underline">
							GitHub
						</a>
						.
					</p>
				</div>
				<div className="items-center flex justify-center flex-col flex-1 bg-[#222] rounded-lg p-4">
					<div className="w-32">
						<img
							src={listtudo}
							alt="Miniatura do Web App do Restaurante Universitário - UFAL"
						/>
					</div>
					<p
					
						className="lg:text-3xl text-action py-4"
					>
						List Tudo
					</p>
					<p className="lg:text-2xl px-9 text-xs">
						(Em desenvolvimento) É um web app clone do{" "}
						<a
							href="https://play.google.com/store/apps/details?id=com.microsoft.todos&hl=pt_BR&gl=US"
							className=" text-action hover:underline"
						>
							Microsoft ToDo
						</a>{" "}
						integrado com a API do{" "}
						<a
							href="https://play.google.com/store/apps/details?id=com.google.android.calendar&hl=pt_BR&gl=US"
							className="text-action hover:underline"
						>
							Google Agenda
						</a>
						. Foi idealizado por mim e todo o processo de desenvolvimento está
						sendo compartilhado nessa playlist no meu canal do{" "}
						<a
							href="https://www.youtube.com/playlist?list=PL3qbpl4OpgMA5Bpj_FpahF6LtSTlIjbsX"
							className=" text-action hover:underline"
						>
							Youtube
						</a>
						. O design também pode ser encontrado observado no{" "}
						<a
							href="https://www.figma.com/file/UO0M66lZQUx7JJSH1YgjBD/List-TuDo?node-id=0%3A1"
							className=" text-action hover:underline"
						>
							Figma
						</a>{" "}
						e no{" "}
						<a
							href="https://github.com/CharlieBellow/list-tudo-react"
							className=" text-action hover:underline"
						>
							GitHub
						</a>
						.
					</p>
				</div>
			</div>
		</>
	);
}
