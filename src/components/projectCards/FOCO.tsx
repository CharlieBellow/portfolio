import { FaReact } from "react-icons/fa"
import { LuFigma } from "react-icons/lu"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import foco from "../../assets/foco.png"
import Card from "../Card"
import DialogCard from "../DialogCard"
import Link from "../Link"

export default function FOCO() {
  return (
    <DialogCard
      trigger={
        <Card
          description={
            "Landing page de rede social focada em prestação de serviços. Feito em React, NextJs, Typescript e Tailwind CSS. "
          }
          title={"Faz Os COrres"}
          image={foco}
          icons={
            <>
              <FaReact size={18} />
              <LuFigma size={18} />
              <RiTailwindCssFill size={18} />
              <SiTypescript size={18} />
              <RiNextjsFill size={18} />
            </>
          }
          altText={"Faz Os COrres"}
        />
      }
      content={
        <Card
          description={
            <>
              <p className="text-justify"  >

              É uma{" "}
              <Link
                space={true}
                href="https://https://www.fazoscorres.com.br/"
                children="rede social"
                />{" "}
              inovadora, criada especialmente para conectar pessoas que oferecem
              e procuram serviços de forma prática, segura e colaborativa. Aqui,
              você encontra um espaço dedicado à prestação de serviços, onde
              profissionais autônomos, freelancers e empresas podem divulgar
              seus trabalhos, compartilhar experiências e construir uma
              reputação baseada em avaliações reais da comunidade. Na
              plataforma, é possível: <br />
              <ul className="list-disc list-inside mx-5 text-justify">
                <li>
                  {" "}
                  Encontrar prestadores de serviços de diversas áreas, próximos
                  de você;
                </li>
                <li> Divulgar seu trabalho e conquistar novos clientes;</li>
                <li> Trocar recomendações e dicas com outros usuários;</li>
                <li>
                  {" "}
                  Construir seu perfil profissional e receber avaliações;
                </li>
                <li>
                  {" "}
                  Participar de uma comunidade que valoriza o trabalho local e a
                  confiança.
                </li>
              </ul>
              Seja para contratar ou oferecer um serviço, o Faz Os Corres
              facilita o contato, incentiva o networking e fortalece a economia
              colaborativa. Venha fazer parte dessa rede e impulsione seus
              corres! <br /> O código pode ser encontrado no ou oferecer um
              serviço, o Faz Os Corres facilita o contato, incentiva o
              networking e fortalece a economia colaborativa. <br /> Venha fazer
              parte dessa rede e impulsione seus corres! <br /> O código pode
              ser encontrado no
              <Link
                href="https://github.com/CharlieBellow/faz-os-corres"
                children="GitHub"
                />
              .
                </p>
            </>
          }
          title={"Faz Os COrres"}
          image={foco}
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
