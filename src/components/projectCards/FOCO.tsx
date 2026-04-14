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
            "Plataforma de economia colaborativa e networking para profissionais autônomos. Um projeto Full Stack focado em geolocalização e validação de mercado, utilizando Next.js e NestJS para criar uma infraestrutura escalável de serviços."
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
              <p className="text-justify">
                O <strong>Faz Os Corres</strong> é uma plataforma de economia
                colaborativa desenhada para conectar prestadores de serviços e
                clientes através de geolocalização. O projeto atua como um
                ecossistema de networking, permitindo que profissionais
                autônomos e freelancers construam reputação digital através de
                avaliações reais.
              </p>

              <p className="text-justify">
                <strong>A Estratégia de Produto:</strong>
                <br />
                Diferente de uma simples lista de contactos, este projeto foi
                concebido como um <strong>
                  MVP (Minimum Viable Product)
                </strong>{" "}
                escalável. Foquei na criação de uma arquitetura que suporte o
                crescimento orgânico da rede, priorizando a facilidade de
                contacto direto e a validação de confiança entre os
                utilizadores.
              </p>

              <span>Destaques de Engenharia:</span>
              <ul className="list-disc list-inside mx-5 text-justify">
                <li>
                  <strong>Arquitetura Full Stack:</strong> Utilização de{" "}
                  <strong>Next.js e TypeScript</strong> para garantir uma
                  interface rápida, tipada e otimizada para SEO.
                </li>
                <li>
                  <strong>Mobile-First & UX:</strong> Interface desenvolvida no
                  Figma com foco na agilidade do quotidiano, reduzindo a fricção
                  no processo de procura e contratação.
                </li>
                <li>
                  <strong>Gestão de Dados:</strong> Estruturação de base de
                  dados para gestão de perfis, categorias de serviço e sistema
                  de feedback da comunidade.
                </li>
                <li>
                  <strong>Escalabilidade:</strong> Backend preparado para
                  expansão de funcionalidades sociais e integração de APIs de
                  mapas.
                </li>
              </ul>

              <br />
              <p className="text-justify">
                Seja para contratar ou oferecer um serviço, o projeto foca em
                fortalecer a economia local através de tecnologia acessível. O
                protótipo funcional pode ser explorado em
                <Link
                  space={true}
                  href="https://www.fazoscorres.com.br/"
                  children="fazoscorres.com.br"
                />
                e o código técnico está disponível no
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
