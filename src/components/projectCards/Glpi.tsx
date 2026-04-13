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
              <p>
                <strong>
                  Revitalização do Ecossistema de Gestão de Chamados | UFAL
                </strong>
                <br/>
                Atuei estrategicamente como{" "}
                <strong>Product Owner e Tech Lead</strong> na modernização do
                sistema de chamados da Universidade Federal de Alagoas. Minha
                missão foi unir a eficiência técnica à experiência do usuário,
                liderando o ciclo completo do produto: desde o UX Research
                inicial até a arquitetura de componentes reutilizáveis.
              </p>
              <br />
            
              <p>
                <strong>Impacto e Atuação:</strong>
                <ul>
                  <li>
                    <strong>Liderança & Produto:</strong> Gestão de backlog,
                    supervisão de equipe e aplicação de metodologias ágeis
                    (Sprints/Issues) para garantir a fluidez do desenvolvimento.
                  </li>
                  <li>
                    <strong>UX Research & Design:</strong> Realização de
                    pesquisas de campo e testes de usabilidade que fundamentaram
                    a interface no Figma, resultando em um aumento de 90% na
                    satisfação dos usuários finais.
                  </li>
                  <li>
                    <strong>Arquitetura Frontend:</strong> Implementação de um
                    Design System robusto focado em acessibilidade, utilizando
                    React e Next.js com uma stack moderna.
                  </li>
                </ul>
              </p>

              <p>
                <strong>Stack Técnica:</strong> React, TypeScript, Next.js,
                Radix UI, Tailwind CSS, ShadCn UI, Jest, Cypress e Storybook. No
                back-end, colaborei com integrações em Node.js via Docker.
              </p>

              <blockquote>
                <strong>Nota de Privacidade:</strong> Por se tratar de um
                sistema governamental interno, o repositório completo é privado.
                Disponibilizo aqui a biblioteca de componentes e o protótipo de
                alta fidelidade como prova de conceito e arquitetura.
              </blockquote>

              <div style={{ display: "flex", gap: "10px" }}>
                <Link
                  href="https://www.figma.com/file/YvgimWmPZIPsgqAD7JElCA/GLPI---UFAL-Arapiraca?node-id=4%3A3849&t=NhUJxsU1qIeaGot5-1"
                  children={"Ver Protótipo no Figma"}
                />
                <Link
                  href="https://github.com/CharlieBellow/GLPI-react-components"
                  children={"Ver Componentes no GitHub"}
                  space={true}
                />
              </div>
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
