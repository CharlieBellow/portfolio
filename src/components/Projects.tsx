import Title from "./Title"
import Glpi from "./projectCards/Glpi"
import Repositorio from "./projectCards/Repositorio"
import SitePsi from "./projectCards/SitePsi"

import UX from "./projectCards/UX"

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <Title title="Projetos" />
      <div className="m-2 grid xl:grid-cols-1 lg:grid-cols-1 gap-4 px-6">
        <Glpi />
        <SitePsi />
        <Repositorio />
        <UX />
      </div>
    </div>
  )
}
