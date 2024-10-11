import Sidebar from '../components/Sidebar'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className=' h-screen bg-gray-light  flex overflow-hidden'>
      
        <Sidebar />
     
      <main className=' w-full overflow-y-auto '>
        <Skills />
      </main>
    </div>
  )
}
