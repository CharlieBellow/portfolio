import { FaReact } from "react-icons/fa"
import { LuFigma } from "react-icons/lu"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import dashboard from "../../assets/dashboard.png"
import Card from "../Card"
import DialogCard from "../DialogCard"
import Link from "../Link"

export default function Glpi() {
  return (
    <DialogCard
      trigger={
        <Card
          description={
            "Site para gerenciar chamados internos da Universidade Federal de Alagoas (UFAL)."
          }
          title={"UD - (GLPI)"}
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
          altText={"Projeto UD - (GLPI)"}
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
              qual faço parte. Utilizamos React, Typescript, NextJs, Radix UI,
              Chakra UI, Tailwindcss CSS, Yup, Formik, Axios, ES Lint, Jest,  ShadCn UI, Cypress, Storybook, consumo de APIs, Git na prática com a equipe, entre outros. O back-end foi feito em NodeJs ultilizando o Docker, tive a oportunidade de aprender a fazer integração com o banco conhecendo o seu funcionamento básico. Também pude fazer uma pesquisa de campo e teste nas tela para saber qual era mais adequada aos usuários.
              <br />
              <br/>
              A parte gráfica foi criada e desenvolvida em grande parte por mim no
              <Link   href="https://www.figma.com/file/YvgimWmPZIPsgqAD7JElCA/GLPI---UFAL-Arapiraca?node-id=4%3A3849&t=NhUJxsU1qIeaGot5-1" children={"Figma"} />. A ideia era criar uma identidade visual para todos os projetos que fossem criados pelo GTI dalí em diante. E este é o link do projeto no{" "}
              <Link
                href="https://github.com/CharlieBellow/GLPI-react-components"
                children={"GitHub"} space={true}
              />
               em uma versão mais antiga. Lá você encontra mais fotos do projeto rodando em sua versão
              final. Como é um projeto interno vinculado ao governo, não tenho
              autorização para fazer o fork da versão completa do projeto, mas
              você pode ver o código dos componentes que desenvolvi e a parte
              gráfica que fiz no Figma.
            </>
          }
          title={"UD - (GLPI)"}
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
          altText={"Projeto UD - (GLPI)"}
        />
      }
    />
  )
}
