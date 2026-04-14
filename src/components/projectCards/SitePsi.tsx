import { FaReact } from "react-icons/fa"
import { LuFigma } from "react-icons/lu"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import sitepsi from "../../assets/sitepsi.png"
import Card from "../Card"
import DialogCard from "../DialogCard"
import Link from "../Link"

export default function SitePsi() {
  return (
    <DialogCard
      trigger={
        <Card
          description={
            "Plataforma profissional para serviços de psicologia com foco em autoridade de marca e conversão. O projeto une arquitetura Next.js para alta performance em SEO com um design fundamentado em Psicologia Cognitiva, visando acolhimento e confiança do usuário."
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
              Plataforma de serviços de psicologia com
              gestão dinâmica de conteúdo. O diferencial deste projeto é o seu{" "}
              <strong>Design Baseado em Evidências</strong>: o cabeçalho utiliza
              o conceito da "teoria da cebola" para simbolizar as camadas da
              psiquê humana, criando uma conexão simbólica imediata com o
              paciente.
              <p>
                As escolhas cromáticas unem as cores universais da psicologia ao
                branding pessoal do profissional, otimizando a{" "}
                <strong>identidade visual e a acessibilidade</strong>.
              </p>
              <br/>
              <span>Destaques Técnicos:</span>
              <ul>
                <li>
                  <strong>Gestão de Conteúdo:</strong> Sistema de autenticação
                  robusto para publicação de artigos, focado em fortalecer o SEO
                  orgânico do profissional.
                </li>
                <li>
                  <strong>Performance:</strong> Implementado em Next.js para
                  garantir carregamento instantâneo (Core Web Vitals) e
                  indexação superior.
                </li>
                <li>
                  <strong>UI/UX:</strong> Protótipo de alta fidelidade
                  desenvolvido no Figma, priorizando a redução da carga
                  cognitiva para usuários em busca de ajuda profissional.
                </li>
              </ul>
              <div style={{ marginTop: "10px" }}>
                <Link
                  href="https://sitepsi.vercel.app/"
                  children="Acessar Site"
                  space={true}
                />
                <Link
                  href="https://www.figma.com/..."
                  children="Design no Figma"
                  space={true}
                />
                <Link
                  href="https://github.com/CharlieBellow/sitepsi"
                  children="Código no GitHub"
                />
              </div>
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
