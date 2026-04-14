import  Title  from './Title'

export default function SoftSkills() {
  return (
    <div className="flex flex-col gap-8 py-6">
      <Title title="Expertise de Produto & Negócio" />
      <div className="m-2 gap-12 text-base 2xl:text-2xl p-4 px-10">
        <ul>
          <li>
            <strong>Liderança:</strong> Product Ownership (PO), Gestão de Backlog, Liderança de Equipes Ágeis.
        </li>
        <li>
          <strong>UX/UI:</strong> Design Thinking, UX Research, Mobile-First, Prototipagem de Alta Fidelidade.
        </li>
        <li>
          <strong>Soft Skills Estratégicas:</strong> Comunicação Assertiva, Resolução de Problemas Complexos, Autogestão e Entrega Assíncrona.
        </li>
        </ul>
      </div>
    </div>
  )
}