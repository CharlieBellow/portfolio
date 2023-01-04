import React from "react";

import repositorio from "../assets/repositorio-lgbt.png";
import glpi from "../assets/glpi.png";

export default function Portfolio() {
	return (
		<>
			<div className=" text-text flex flex-col lg:flex-row items-center gap-9 mx-4">
				<div className="items-center flex justify-center flex-col">
					<div className="w-60">
						<img src={repositorio} alt="Miniatura do Site Repositório LGBT" />
					</div>
					<a
						href={"https://repositoriolgbt-react.vercel.app/"}
						className="text-3xl hover:text-action"
					>
						Repositório LGBT
					</a>
					<p className="text-2xl">
						Site que filtra textos acadêmicos com temáticas LGBT.Feito em React e Javascript. O Design e todo o UX Design do site foi totalmente pensado e desenvolvido por mim utilizando o Figma e outras ferramentas de UX Design. 
				</div>
				<div className="items-center flex justify-center flex-col">
					<div className="w-60">
						<img src={glpi} alt="Miniatura do Site GLPI - UFAL" width={500} />
					</div>
					<a
						href={"https://glpi-react-components.vercel.app/"}
						className="text-3xl hover:text-action"
					>
						Site GLPI - UFAL
					</a>
					<p className="text-2xl">
						Site que filtra textos acadêmicos com temáticas LGBT
					</p>
				</div>
				<div className="items-center flex justify-center flex-col">
					<div className="w-32">
						<img
							src="/"
							alt="Miniatura do Web App do Restaurante Universitário - UFAL"
						/>
					</div>
					<a
						href={"https://glpi-react-components.vercel.app/"}
						className="text-3xl hover:text-action"
					>
						Web App do Restaurante Universitário - UFAL
					</a>
					<p className="text-2xl">
						Site que filtra textos acadêmicos com temáticas LGBT
					</p>
				</div>
			</div>
		</>
	);
}
