import  Title  from './Title'

export default function HardSkills() {
  return (
    <div className="flex flex-col gap-8 py-6">
      <Title title="Habilidades Técnicas" />
      <div className="m-2 grid xl:grid-cols-2 lg:grid-cols-1 gap-12 text-base 2xl:text-3xl p-4 px-10">
        <li>Desenvolvimento de Sistemas Web</li>
        <li>Análise de Requisitos de Sistemas Web</li>
        <li>UI/UX Design (Prototipação)</li>
      </div>
    </div>
  )
}
