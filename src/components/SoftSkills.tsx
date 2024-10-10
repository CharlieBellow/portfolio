import  Title  from './Title'

export default function SoftSkills() {
  return (
    <div className='flex flex-col gap-8 py-6'>
      <Title title='Habilidades Comportamentais' />
      <div className='m-2 grid xl:grid-cols-2 lg:grid-cols-1 gap-4 text-xl 2xl:text-3xl'>
          <li>Comunicação</li>
          <li>Proatividade</li>
          <li>Criatividade</li>
          <li>Aprendizado contínuo</li>
          <li>Orientado a entendimento e resolução de problemas</li>
      </div>
    </div>
  )
}
