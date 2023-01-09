import React from 'react'

export default function Footer() {
  return (
		<footer className="flex flex-row gap-24 py-5 text-white ">
			<div className="">
				<h3 className="text-5xl text-gray-400">Outros Projetos</h3>
				<ul className="">
					<li className="py-4">
						<a
							href="https://calc-revestimento.vercel.app/"
							className="text-action hover:underline text-2xl"
						>
							Calcular Revestimento da parede
						</a>
					</li>
					<li className="py-4">
						<a
							href="https://calc-revestimento.vercel.app/"
							className="text-action hover:underline text-2xl"
						>
							Calcular Revestimento da parede
						</a>
					</li>
				</ul>
			</div>
			<div>
				<h3 className="text-5xl text-gray-400">Contato</h3>
				<div className="py-4">
					<p className=" text-2xl">Charlie Bellow, Front-End Developer</p>
					<p className="text-2xl py-3">
						Email:{" "}
						<a
							href="mailto:webmaster@example.com"
							className="text-action hover:underline text-2xl"
						>
							charliebftm@gmail.com
						</a>
					</p>
					<p className="text-2xl py-3">
						{" "}
						Tel:{" "}
						<a
							href="tel:+558222996008552"
							className="text-action hover:underline text-2xl"
						>
							+55 82 99600-8552
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
