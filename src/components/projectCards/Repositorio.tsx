import { FaReact } from "react-icons/fa6"
import { LuFigma } from "react-icons/lu"
import repositorio from "../../assets/repositorio-lgbt.png"
import Card from "../Card"
import DialogCard from "../DialogCard"
import Link from "../Link"
export default function Repositorio() {
  return (
    <DialogCard
      trigger={
        <Card
          description={
            "Site que filtra textos acadêmicos com temáticas LGBT. Feito em React e Javascript."
          }
          title={"Repositório LGBT"}
          image={repositorio}
          icons={
            <>
              <FaReact size={20} />
              <LuFigma size={20} />
            </>
          }
          altText={"Repositório LGBT"}
        />
      }
      content={
        <Card
          description={
            <>
              Site que filtra textos acadêmicos com temáticas LGBT. Feito em
              React e Javascript. O Design e todo o UX Design do site foi
              totalmente pensado e desenvolvido por mim utilizando o{" "}
              <Link
                space={true}
                href="https://www.figma.com/file/tPLEhLD7w4pjaiUAEJPrBP/Forum-edit---Design-System?node-id=14%3A53&t=NhUJxsU1qIeaGot5-1"
                children="Figma"
              />
              e outras ferramentas de UX Design. Aqui você encontra o link do
              projeto no
              <Link
                href="https://github.com/CharlieBellow/repositoriolgbt-react"
                children="GitHub"
              />
              .
            </>
          }
          title={"Repositório LGBT"}
          image={repositorio}
          icons={
            <>
              <FaReact size={20} />
              <LuFigma size={20} />
            </>
          }
          altText={"Repositório LGBT"}
        />
      }
    />
  )
}
