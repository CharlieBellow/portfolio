import AboutMe from './AboutMe'
import charlie from '../assets/charlie.jpg'
import Projects from './Projects'
import SoftSkills from './SoftSkills'
import HardSkills from './HardSkills'
import Tecnology from './Tecnology'

export default function Skills() {
  return (
    <div className='w-auto flex justify-center flex-col gap-8 overflow-y-clip'>
      <img
        src={charlie}
        alt='Charlie Bellow perfil'
        className='w-auto -top-12'
      />
      <div className='py-8'>
        <AboutMe />
        <Projects />
        <SoftSkills/>
        <HardSkills />
        <Tecnology/>
      </div>
    </div>
  )
}
