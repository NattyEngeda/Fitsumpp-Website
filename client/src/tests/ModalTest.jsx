import { Dialog, Transition } from '@headlessui/react'
import { TextArea } from 'grommet'
import { Fragment, useState } from 'react'

export default function ModalTest() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center ">
        {/* <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button> */}
        <button
        type='button'
        onClick={openModal}
        className='bg-primary-500 px-5 py-3 text-white shadow-lg hover:shadow-xl'>Send Message</button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 py-2"
                  >
                    Message
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col gap-2">
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="Name">Name: </label>
                        <input 
                        className=' w-full rounded-lg '
                        type="text"  />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="Email">Email: </label>
                        <input 
                        className=' w-full rounded-lg '
                        type="email"  />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="Message">Message: </label>
                        <TextArea 
                        className=' w-full rounded-lg h-28 text-sm font-light'
                        type="text"  />
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center border border-transparent bg-primary-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Send
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

