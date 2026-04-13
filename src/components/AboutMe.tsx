import React from 'react'
import Title from './Title'
import Description from './Description'

export default function AboutMe() {
  return (
    <>
      <Title title="Sobre mim" />

      <Description
        description="Unir tecnologia, comportamento humano e acessibilidade não é apenas o meu trabalho, é o meu diferencial estratégico. Com mais de 4 anos de experiência no desenvolvimento de ecossistemas web, atuo na intersecção entre a Engenharia de Software (NestJS/React) e a Gestão de Produto (PO)."
        colorText="bgDark"
      ></Description>

      <Description
        description="Sou Mestre em Psicologia e Pós-Graduado em Acessibilidade e Inclusão, o que me permite projetar soluções com baixa carga cognitiva e alta eficiência para o usuário final. Minha trajetória em órgãos públicos me moldou como um profissional autônomo, capaz de liderar frentes inteiras de TI, desde a estruturação de pipelines de dados em Python até a criação de Design Systems complexos no Figma."
        colorText="blue-dark"
      ></Description>
    </>
  )
}
