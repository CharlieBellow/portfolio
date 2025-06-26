import { FaCss3, FaHtml5 } from "react-icons/fa"
import { LuFigma } from "react-icons/lu"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import doisstatus from "../../assets/2status.png"
import Card from "../Card"
import DialogCard from "../DialogCard"
import Link from "../Link"

export default function DoisStatus() {
  return (
    <DialogCard
      trigger={
        <Card
          description={
            "Site para monitoramento de conexão de rede dos servidores da Universidade Federal de Alagoas (UFAL).  Feito em Javascript/Typescript, HTML, CSS, Tailwind CSS. O projeto foi publicado em anal de evento da WTICIFES 2023."
          }
          title={"2Status"}
          image={doisstatus}
          icons={
            <>
              <FaHtml5 size={18} />
              <FaCss3 size={18} />
              <SiTypescript size={18} />
              <RiTailwindCssFill size={18} />
              <LuFigma size={18} />
            </>
          }
          altText={"Site de monitoramento de conexão de servidores UFAL"}
        />
      }
      content={
        <Card
          description={
            <>
              É um
              <Link
                href="http://status.arapiraca.ufal.br/"
                children="site"
                space={true}
              />
              que monitora o status de conexão dos servidores de rede de todos
              os polos da Universidade Federal de Alagoas(UFAL). O projeto foi
              publicado em anal de evento da
              <Link
                href="https://wticifes2023.ufma.br/anais-wticifes-2023/"
                children="WTICIFES 2023"
                space={true}
              />
              a partir da página 161. O design do cabeçalho foi pensado para
              seguir a mesma identidade visual criada por mim no projeto do UD -
              (GLPI) para manter a padronização. O design pode ser encontrado no
              <Link
                space={true}
                href="https://www.figma.com/design/YvgimWmPZIPsgqAD7JElCA/GLPI---UFAL-Arapiraca?node-id=0-1&t=H7aaEoGYgUtUdcuE-1"
                children="Figma"
              />
              e o
              <Link
                space={true}
                href="https://github.com/CharlieBellow/2status"
                children="GitHub"
              />
              em sua versão atual não pode ser acessado por questões de
              privacidade. Mas o site está hospedado publicamente
              <Link href="http://status.arapiraca.ufal.br/" children="aqui" />.
            </>
          }
          title={"2Status"}
          image={doisstatus}
          icons={
            <>
              <FaHtml5 size={18} />
              <FaCss3 size={18} />
              <SiTypescript size={18} />
              <RiTailwindCssFill size={18} />
              <LuFigma size={18} />
            </>
          }
          altText={"Site de monitoramento de conexão de servidores UFAL"}
        />
      }
    />
  )
}
