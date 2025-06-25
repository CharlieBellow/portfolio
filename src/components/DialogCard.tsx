import * as Dialog from '@radix-ui/react-dialog'
import { FaXmark } from 'react-icons/fa6'
import Card from './Card'
import { ReactNode } from 'react'
import { LuX } from 'react-icons/lu'
type DialogCardProps = { trigger: ReactNode; content: ReactNode }
const DialogCard = ({ trigger, content }: DialogCardProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className='h-auto items-center justify-center rounded-lg bg-blue-light/30 px-[15px] font-medium leading-none text-bgDark shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-blue-dark focus:outline-none w-full flex md:flex-col'>
       {trigger}
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 bg-gray-dark/50 data-[state=open]:animate-overlayShow' />
      <Dialog.Content className='fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-7xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-blue-light p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow'>
        {content}
        <Dialog.Close asChild>
					<button
						className="flex justify-end w-full"
						aria-label="Close"
					>
					<LuX size={26}/>
          </button>
          </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default DialogCard
