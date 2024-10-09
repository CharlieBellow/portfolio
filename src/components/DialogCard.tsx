import * as Dialog from '@radix-ui/react-dialog'
import { FaXmark } from 'react-icons/fa6'
import Card from './Card'
import { ReactNode } from 'react'
type DialogCardProps = { trigger: ReactNode; content: ReactNode }
const DialogCard = ({ trigger, content }: DialogCardProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className=' h-auto items-center justify-center rounded-lg bg-blue-light/30 px-[15px] font-medium leading-none text-bgDark shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-blue-dark focus:outline-none w-full flex md:flex-col'>
       {trigger}
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 bg-gray-dark/50 data-[state=open]:animate-overlayShow' />
      <Dialog.Content className='fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow'>
        {content}
        <Dialog.Title className='m-0 text-[17px] font-medium text-mauve12'>
          Edit profile
        </Dialog.Title>
        <Dialog.Description className='mb-5 mt-2.5 text-[15px] leading-normal text-mauve11'>
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <fieldset className='mb-[15px] flex items-center gap-5'>
          <label
            className='w-[90px] text-right text-[15px] text-violet11'
            htmlFor='name'
          >
            Name
          </label>
          <input
            className='inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8'
            id='name'
            defaultValue='Pedro Duarte'
          />
        </fieldset>
        <fieldset className='mb-[15px] flex items-center gap-5'>
          <label
            className='w-[90px] text-right text-[15px] text-violet11'
            htmlFor='username'
          >
            Username
          </label>
          <input
            className='inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8'
            id='username'
            defaultValue='@peduarte'
          />
        </fieldset>
        <div className='mt-[25px] flex justify-end'>
          <Dialog.Close asChild>
            <button className='inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 focus:outline-none'>
              Save changes
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className='absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none'
            aria-label='Close'
          >
            <FaXmark />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default DialogCard
