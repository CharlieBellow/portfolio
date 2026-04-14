import Title from "./Title"

export default function HardSkills() {
  return (
    <div className="flex flex-col gap-8 py-6">
      <Title title="Expertise Técnica" />
      <div className="m-2 gap-12 text-base 2xl:text-2xl p-4 px-10">
        <ul>
          <li>
            <strong>Frontend:</strong> React, Next.js, TypeScript (Tipagem
            Avançada), Tailwind CSS, Radix UI, Shadcn/UI.
          </li>
          <li>
            <strong>Backend & Dados:</strong> Node.js (NestJS), Python
            (FastAPI/Pandas), PostgreSQL, Docker.
          </li>
          <li>
            <strong>Arquitetura:</strong> DDD (Domain-Driven Design), Clean
            Architecture, SOLID, Design Systems.
          </li>
          <li>
            <strong>Ferramentas:</strong> Git (GitFlow), Linux, Figma, Postman.
          </li>
        </ul>
      </div>
    </div>
  )
}
