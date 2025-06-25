import { FaReact } from "react-icons/fa"
import { LuFigma } from "react-icons/lu"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import sitepsi from "../../assets/sitepsi.png"
import Card from "../Card"
import DialogCard from "../DialogCard"

export default function SitePsi() {
  return (
    <DialogCard
      trigger={
        <Card
          description={
            "Site de divulgação de serviços de psicologia. Possui um sistema de autenticação para a inclusão de artigos no blog do site. Feito em React, NextJs, Typescript, Tailwind CSS. "
          }
          title={"Site Psi"}
          image={sitepsi}
          icons={
            <>
              <FaReact size={18} />
              <LuFigma size={18} />
              <RiTailwindCssFill size={18} />
              <SiTypescript size={18} />
              <RiNextjsFill size={18} />
            </>
          }
          altText={"Site de Psicologia"}
        />
      }
      content={
        <Card
          description={
            <>
              (Em desenvolvimento) É um <a
                target="_blank"
                href="#"
                className=" text-action hover:underline"
              >
                site
              </a> de divulgação de serviços de
              psicologia, que possui um sistema de autenticação para a inclusão
              de artigos no blog do site. O design do cabeçalho foi pensado na teoria da cebola, que consiste em afirmar que a psiquê humana é composta por varias camadas. As cores verde e azul representam as cores da psicologia e as demias cores fazem referência à paleta de cores escolhida pelo profissional para sua divulgação. O design pode ser
              encontrado no{" "}
              <a
                target="_blank"
                href="https://www.figma.com/design/fv5QC1HsMNAvJwflgR6RL1/Portif%C3%B3lio?node-id=0-1&t=sKcrCAcxQzmpQ5oH-1"
                className=" text-action hover:underline"
              >
                Figma
              </a>{" "}
              e no{" "}
              <a
                target="_blank"
                href="https://github.com/CharlieBellow/sitepsi"
                className=" text-action hover:underline"
              >
                GitHub
              </a>
              .
            </>
          }
          title={"Site Psi"}
          image={sitepsi}
          icons={
            <>
              <FaReact size={18} />
              <LuFigma size={18} />
              <RiTailwindCssFill size={18} />
              <SiTypescript size={18} />
              <RiNextjsFill size={18} />
            </>
          }
          altText={"Site de Psicologia"}
        />
      }
    />
  )
}
