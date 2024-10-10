import { FaReact } from 'react-icons/fa'
import { LuFigma } from 'react-icons/lu'
import { RiTailwindCssFill } from 'react-icons/ri'
import listTudo from '../../assets/listtudo.png'
import Card from '../Card'
import DialogCard from '../DialogCard'

export default function ListTudo() {
  return (
    <DialogCard
      trigger={
        <Card
          description={
            'Web app de lista de tarefas, clone do Microsoft Todo com integração com o Google Agenda.'
          }
          title={'List Tudo'}
          image={listTudo}
          icons={
            <>
              <FaReact size={26} />
              <LuFigma size={26} />
              <RiTailwindCssFill size={26} />
            </>
          }
          altText={'Projeto List Tudo'}
        />
      }
      content={
        <Card
          description={
            <>
            (Em desenvolvimento) É um web app clone do{' '}
            <a
              href='https://play.google.com/store/apps/details?id=com.microsoft.todos&hl=pt_BR&gl=US'
              className=' text-action hover:underline'
            >
              Microsoft ToDo
            </a>{' '}
            integrado com a API do{' '}
            <a
              href='https://play.google.com/store/apps/details?id=com.google.android.calendar&hl=pt_BR&gl=US'
              className='text-action hover:underline'
            >
              Google Agenda
            </a>
            . Foi idealizado por mim e todo o processo de desenvolvimento está
            sendo compartilhado nessa playlist no meu canal do{' '}
            <a
              href='https://www.youtube.com/playlist?list=PL3qbpl4OpgMA5Bpj_FpahF6LtSTlIjbsX'
              className=' text-action hover:underline'
            >
              Youtube
            </a>
            . O design também pode ser encontrado observado no{' '}
            <a
              href='https://www.figma.com/file/UO0M66lZQUx7JJSH1YgjBD/List-TuDo?node-id=0%3A1'
              className=' text-action hover:underline'
            >
              Figma
            </a>{' '}
            e no{' '}
            <a
              href='https://github.com/CharlieBellow/list-tudo-react'
              className=' text-action hover:underline'
            >
              GitHub
            </a>
            .
  </>
          }
          title={'List Tudo'}
          image={listTudo}
          icons={
            <>
              <FaReact size={26} />
              <LuFigma size={26} />
              <RiTailwindCssFill size={26} />
            </>
          }
          altText={'Projeto List Tudo'}
        />
      }
    />
  )
}
