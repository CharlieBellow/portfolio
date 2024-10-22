import React from 'react'
import DialogCard from '../DialogCard'
import Card from '../Card'
import { FaReact } from 'react-icons/fa6'
import { LuFigma } from 'react-icons/lu'
import repositorio from "../../assets/repositorio-lgbt.png"
export default function Repositorio() {
  return (
    <DialogCard
    trigger={
      <Card
        description={
          'Site que filtra textos acadêmicos com temáticas LGBT. Feito em React e Javascript.'
        }
        title={'Repositório LGBT'}
        image={repositorio}
        icons={
          <>
            <FaReact size={26} />
            <LuFigma size={26} />
          </>
        }
        altText={'Repositório LGBT'}
      />
    }
    content={
      <Card
        description={
          <>
            Site que filtra textos acadêmicos com temáticas LGBT. Feito em React
            e Javascript. O Design e todo o UX Design do site foi totalmente
            pensado e desenvolvido por mim utilizando o{' '}
            
            <a target="_blank"
          
              href='https://www.figma.com/file/tPLEhLD7w4pjaiUAEJPrBP/Forum-edit---Design-System?node-id=14%3A53&t=NhUJxsU1qIeaGot5-1'
              className=' text-action hover:underline'
            >
              Figma
            </a>{' '}
            e outras ferramentas de UX Design. Aqui você encontra o link do
            projeto no{' '}
            <a target="_blank"
            
              href='https://github.com/CharlieBellow/repositoriolgbt-react'
              className=' text-action hover:underline'
            >
            GitHub
            </a>
            .
          </>
        }
        title={'Repositório LGBT'}
        image={repositorio}
        icons={
          <>
            <FaReact size={26} />
            <LuFigma size={26} />
          </>
        }
        altText={'Repositório LGBT'}
      />
    }
  />
  )
}
