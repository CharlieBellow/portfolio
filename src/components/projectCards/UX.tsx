import { FaReact } from 'react-icons/fa'
import { LuFigma } from 'react-icons/lu'
import { RiTailwindCssFill } from 'react-icons/ri'
import figma from '../../assets/figma.png'
import Card from '../Card'
import DialogCard from '../DialogCard'

export default function ListTudo() {
  return (
    <DialogCard
      trigger={
        <Card
          description={
            'Um resumo das minhas telas no Figma'
          }
          title={'Projetos no Figma'}
          image={figma}
          icons={
            <>
              <LuFigma size={26} />
            </>
          }
          altText={'Projeto no Figma'}
        />
      }
      content={
        <Card
          description={
            <>
         Aqui eu reúno varias telas feitas no Figma, incluindo telas de aixa fidelidade (Skeletons), e as telas interativas usando fremes, além dos artboards e paletas de cores. Confira o link do{' '}
            <a target="_blank"
              href='https://www.figma.com/design/YvgimWmPZIPsgqAD7JElCA/GLPI---UFAL-Arapiraca?node-id=44-3729&t=zy0TQPp2Dzpxrhek-1'
              className=' text-action hover:underline'
            >
              Figma
            </a>.
         
  </>
          }
          title={'Projeto no Figma'}
          image={figma}
          icons={
            <>
              <FaReact size={26} />
              <LuFigma size={26} />
              <RiTailwindCssFill size={26} />
            </>
          }
          altText={'Projeto no Figma'}
        />
      }
    />
  )
}
