import Card from './Card'
import DialogCard from './DialogCard'
import Title from './Title'

export default function Projects() {
  return (
    <>
      <Title title='Projetos' />
      <div className='m-2 sm:flex gap-4 '>
        
        <DialogCard trigger={<Card/> } content={<Card/> } />
        <DialogCard trigger={<Card/> } content={<Card/> } />
     
  
</div>
    </>
  )
}
