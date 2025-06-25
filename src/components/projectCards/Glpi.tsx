import { FaReact } from "react-icons/fa"
import { LuFigma } from "react-icons/lu"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import dashboard from "../../assets/dashboard.png"
import Card from "../Card"
import DialogCard from "../DialogCard"

export default function Glpi() {
  return (
    <DialogCard
      trigger={
        <Card
          description={
            "Aplicação de fluxo de chamados da Universidade Federal de Alagoas."
          }
          title={"GLPI"}
          image={dashboard}
          icons={
            <>
              <FaReact size={20} />
              <LuFigma size={20} />
              <RiTailwindCssFill size={20} />
              <SiTypescript size={20} />
              <RiNextjsFill size={20} />
            </>
          }
          altText={"Projeto do GLPI"}
        />
      }
      content={
        <Card
          description={
            <>
              Site criado para gerenciar chamados internos da Universidade
              Federal de Alagoas (UFAL) e concentrar todos os serviços internos
              da universidadade. Desenvolvido em conjunto com a equipe de
              desenvolvimento da Gerência de Tecnologia da Informação (GTI) da
              qual faço parte. Utilizamos React, Typescript, NextJs, Radix,
              Chakra, Tailwindcss, Yup, Formik, axios, ente outras tecnologias.
              A parte gráfica foi desenvolvida em grande parte por mim no{" "}
              <a
                target="_blank"
                href="https://www.figma.com/file/YvgimWmPZIPsgqAD7JElCA/GLPI---UFAL-Arapiraca?node-id=4%3A3849&t=NhUJxsU1qIeaGot5-1"
                className=" text-action hover:underline py-4"
              >
                Figma
              </a>
              . E este é o link do projeto no{" "}
              <a
                target="_blank"
                href="https://github.com/CharlieBellow/GLPI-react-components"
                className=" text-action hover:underline"
              >
                GitHub
              </a>
              . Lá você encontra mais fotos do projeto rodando em sua versão
              final. Como é um projeto interno vinculado ao governo, não tenho
              autorização para fazer o fork da versão completa do projeto, mas
              você pode ver o código dos componentes que desenvolvi e a parte
              gráfica que fiz no Figma.
            </>
          }
          title={"GLPI"}
          image={dashboard}
          icons={
            <>
              <FaReact size={18} />
              <LuFigma size={18} />
              <RiTailwindCssFill size={18} />
              <SiTypescript size={18} />
              <RiNextjsFill size={18} />
            </>
          }
          altText={"Projeto do GLPI"}
        />
      }
    />
  )
}
