import Title from './Title'
import Glpi from './projectCards/Glpi'
import ListTudo from './projectCards/ListTudo'
import Repositorio from './projectCards/Repositorio'
import Ru from './projectCards/Ru'

export default function Projects() {
  return (
    <div className='flex flex-col gap-8'>
      <Title title='Projetos' />
      <div className='m-2 grid xl:grid-cols-2 lg:grid-cols-1 gap-4 '>
        <Glpi />
        <Repositorio />
        <Ru />
        <ListTudo/>
      </div>
    </div>
  )
}
