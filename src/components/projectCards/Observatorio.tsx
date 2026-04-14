import { FaNode, FaPython, FaReact } from "react-icons/fa"
import observatorio from "../../assets/observatorio.png"
import Card from "../Card"
import DialogCard from "../DialogCard"
import Link from "../Link"
import { SiTypescript } from "react-icons/si"

export default function Observatorio() {
  return (
    <DialogCard
      trigger={
        <Card
          description={
            "Plataforma de inteligência de dados para o Mercado de Trabalho (SINE). Uma solução End-to-End que automatiza a extração de Big Data governamental e transforma dados brutos em indicadores estratégicos em tempo real."
          }
          title={"Observatório do SINE"}
          image={observatorio}
          icons={
            <>
              <FaPython size={18} />
              <FaReact size={18} />
              <SiTypescript size={20} />
            </>
          }
          altText={"Projeto Observatório do SINE"}
        />
      }
      content={
        <Card
          description={
            <>
              <>
                <p>
                  <strong>Observatório do Mercado de Trabalho | SINE</strong>
                  <br />
                  Um ecossistema de dados de alta performance projetado para
                  modernizar a transparência e a análise do mercado de trabalho.
                  Neste projeto, assumi a{" "}
                  <strong>responsabilidade integral (End-to-End)</strong>,
                  atuando desde a concepção do design até a arquitetura de
                  engenharia de dados.
                </p>

                <p>
                  <strong>A Engenharia por trás do Produto:</strong>
                  <ul>
                    <li>
                      <strong>Data Engineering:</strong> Desenvolvimento de um
                      pipeline automatizado em <strong>Python e Pandas</strong>{" "}
                      para extração, tratamento e estruturação de bases de dados
                      governamentais massivas (RAIS/CAGED) via protocolos FTP.
                    </li>
                    <li>
                      <strong>Arquitetura de APIs:</strong> Implementação de
                      serviços de alta velocidade utilizando{" "}
                      <strong>FastAPI e Django</strong>, garantindo comunicações
                      tipadas, seguras e eficientes.
                    </li>
                    <li>
                      <strong>Visualização de Dados:</strong> Interface
                      construída em <strong>Next.js e Tailwind CSS</strong>,
                      focada em transformar dados complexos em dashboards
                      intuitivos, acessíveis e de alta performance.
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>Infraestrutura & DevOps:</strong> Padronização de
                  ambientes de desenvolvimento e produção utilizando{" "}
                  <strong>Docker</strong> e integração com{" "}
                  <strong>Redis</strong> para cache e otimização de consultas.
                </p>

                <blockquote>
                  <strong>Impacto Estratégico:</strong> A solução eliminou
                  processos manuais de tratamento de planilhas, transformando
                  milhares de registros brutos em indicadores visuais para a
                  tomada de decisão governamental.
                </blockquote>

                <div style={{ display: "flex", gap: "10px" }}>
                  <Link
                    href="https://github.com/CharlieBellow/observatorio-frontend"
                    children={"Frontend (Next.js)"}
                  />
                  <Link
                    href="https://github.com/CharlieBellow/observatorio-backend"
                    children={"Backend (Django)"}
                  />
                  <Link
                    href="https://github.com/CharlieBellow/observatorio-fast-api"
                    children={"Backend (FastAPI)"}
                  />
                </div>
              </>
            </>
          }
          title={"Observatório do SINE"}
          image={observatorio}
          icons={
            <>
              <FaPython size={18} />
              <FaReact size={18} />
              <SiTypescript size={20} />
            </>
          }
          altText={"Projeto Observatório do SINE"}
        />
      }
    />
  )
}
