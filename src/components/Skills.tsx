import AboutMe from './AboutMe'
import charlie from '../assets/charlie.jpg'
import Projects from './Projects'

export default function Skills() {
  return (
    <div className='w-auto flex justify-center flex-col'>
      <img
        src={charlie}
        alt='Charlie Bellow perfil'
        className='w-auto -top-12'
      />
      <div className='py-6'>
        <AboutMe />
        <Projects />
      </div>
    </div>
  )
}
