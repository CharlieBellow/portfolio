import { FaReact } from 'react-icons/fa'
import { LuFigma } from 'react-icons/lu'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import ru from '../../assets/ru.png'
import Card from '../Card'
import DialogCard from '../DialogCard'
export default function Ru() {
  return (
    <DialogCard
      trigger={
        <Card
          description={
            'Web App pensado para gerenciar os pagamentos do Restaurante Universitário da Universidade Federal de Alagoas (UFAL).'
          }
          title={'Restaurante Universitário'}
          image={ru}
          icons={
            <>
              <FaReact size={26} />
              <LuFigma size={26} />
              <RiTailwindCssFill size={26} />
              <SiTypescript size={26} />
              <RiNextjsFill size={26} />
            </>
          }
          altText={'Projeto do RU'}
        />
      }
      content={
        <Card
          description={
            <>
              (Em desenvolvimento) Site pensado para gerenciar os pagamentos do
              Restaurante Universitário da Universidade Federal de Alagoas
              (UFAL). Será desenvolvido em conjunto com a equipe de
              desenvolvimento da Gerência de Tecnologia da Informação (GTI) da
              qual faço parte. Utilizaremos React, Next, Typescript, Radix,
              Chakra, Tailwindcss, ente outras tecnologias. A parte gráfica já
              foi desenvolvida em grande parte por mim no{' '}
              <a
                href='https://www.figma.com/file/H2omDqMXOrt4Cyi5ZnocNP/RU---UFAL-Arapiraca?node-id=4%3A3848&t=mOJDFmVjJF1eNZun-0'
                className=' text-action hover:underline'
              >
                Figma
              </a>
              . E este é o link do projeto no{' '}
              <a
                href='https://github.com/CharlieBellow/RU-UFAL'
                className=' text-action hover:underline'
              >
                GitHub
              </a>
              .
            </>
          }
          title={'Restaurante Universitário'}
          image={ru}
          icons={
            <>
              <FaReact size={26} />
              <LuFigma size={26} />
              <RiTailwindCssFill size={26} />
              <SiTypescript size={26} />
              <RiNextjsFill size={26} />
            </>
          }
          altText={'Projeto do RU'}
        />
      }
    />
  )
}
