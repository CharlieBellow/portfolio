import { FaReact } from 'react-icons/fa'
import { LuFigma } from 'react-icons/lu'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import glpi from '../../assets/glpi.png'
import Card from '../Card'
import DialogCard from '../DialogCard'

export default function Glpi() {
  return (
    <DialogCard
      trigger={
        <Card
          description={
            'Aplicação de fluxo de chamados da Universidade Federal de Alagoas.'
          }
          title={'GLPI'}
          image={glpi}
          icons={
            <>
              <FaReact size={26} />
              <LuFigma size={26} />
              <RiTailwindCssFill size={26} />
              <SiTypescript size={26} />
              <RiNextjsFill size={26} />
            </>
          }
          altText={'Projeto do GLPI'}
        />
      }
      content={
        <Card
          description={
            <>
            (Em desenvolvimento) Site criado para gerenciar chamados internos da
            Universidade Federal de Alagoas (UFAL). Ele está sendo desenvolvido
            em conjunto com a equipe de desenvolvimento da Gerência de
            Tecnologia da Informação (GTI) da qual faço parte. Utilizamos React,
            Typescript, Radix, Chakra, Tailwindcss, yup, Formik, axios, ente
            outras tecnologias. A parte gráfica foi desenvolvida em grande parte
            por mim no{' '}
            <a
              href='https://www.figma.com/file/YvgimWmPZIPsgqAD7JElCA/GLPI---UFAL-Arapiraca?node-id=4%3A3849&t=NhUJxsU1qIeaGot5-1'
              className=' text-action hover:underline py-4'
            >
              Figma
            </a>
            . E este é o link do projeto no{' '}
            <a
              href='https://github.com/CharlieBellow/GLPI-react-components'
              className=' text-action hover:underline'
            >
              GitHub
            </a>
            .
  </>
          }
          title={'GLPI'}
          image={glpi}
          icons={
            <>
              <FaReact size={26} />
              <LuFigma size={26} />
              <RiTailwindCssFill size={26} />
              <SiTypescript size={26} />
              <RiNextjsFill size={26} />
            </>
          }
          altText={'Projeto do GLPI'}
        />
      }
    />
  )
}
