import { ReactNode } from 'react'
type TechProps = {
  title: string
  icon: ReactNode
}
export default function Tech({ icon, title }: TechProps) {
  return (
    <span className='flex justify-between'>
      {title} {icon}
    </span>
  )
}
