import { FaNode, FaReact } from "react-icons/fa"
import { LuFigma } from "react-icons/lu"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import dashboard from "../../assets/dashboard.png"
import Card from "../Card"
import DialogCard from "../DialogCard"
import Link from "../Link"

export default function TransCenso() {
  return (
    <DialogCard
      trigger={
        <Card
          description={"Foco: Arquitetura, Escalabilidade e DDD."}
          title={"Transcenso"}
          image={dashboard}
          icons={
            <>
              <FaNode size={18} />
              <SiTypescript size={18} />
            </>
          }
          altText={"Projeto TransCenso"}
        />
      }
      content={
        <Card
          description={
            <>
              <p>
                <strong>Transcenso | Software Architecture & Full Stack</strong>
                <br />O Transcenso é um projeto em desenvolvimento focado na
                coleta e análise de dados específicos, servindo como meu
                principal laboratório de{" "}
                <strong>Engenharia de Software Avançada</strong>.
              </p>

              <p>
                <strong>Desafios de Engenharia e Aprendizado:</strong>
                <ul>
                  <li>
                    <strong>Arquitetura de Software:</strong> Aplicação prática
                    de <strong>Domain-Driven Design (DDD)</strong> e{" "}
                    <strong>Clean Architecture</strong>, estruturando o projeto
                    em camadas (Domínio, Aplicação e Infraestrutura) para
                    garantir o desacoplamento.
                  </li>
                  <li>
                    <strong>Node.js & NestJS:</strong> Exploração profunda do
                    ecossistema NestJS, utilizando Injeção de Dependência, Pipes
                    e Guards para construir uma API resiliente.
                  </li>
                  <li>
                    <strong>Orientação a Objetos (POO):</strong> Refinamento de
                    conceitos de POO, como o uso de{" "}
                    <strong>Value Objects</strong> para proteger a integridade
                    do domínio e evitar a obsessão por primitivos.
                  </li>
                </ul>
              </p>

              <p>
                <strong>Propósito Técnico:</strong> O objetivo deste projeto é
                consolidar boas práticas de desenvolvimento (SOLID) e criar uma
                base de código testável e escalável, preparando o caminho para
                soluções corporativas de grande porte.
              </p>

              <div style={{ display: "flex", gap: "10px" }}>
                <Link
                  href="https://github.com/CharlieBellow/transcenso-api"
                  children={"Ver Repositório em Construção"}
                />
              </div>
            </>
          }
          title={"TransCenso"}
          image={dashboard}
          icons={
            <>
              <FaNode size={18} />
              <SiTypescript size={18} />
            </>
          }
          altText={"Projeto TransCenso"}
        />
      }
    />
  )
}
