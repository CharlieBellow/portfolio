import charlie from '../assets/charlie.jpg'
import AboutMe from './AboutMe'
import Title from './Title'

export default function Skills() {
  return (
    <div className='w-auto '>
      <img src={charlie} alt='Charlie Bellow perfil' className='w-auto -top-12' />
      
      <AboutMe />

    </div>
  )
}
