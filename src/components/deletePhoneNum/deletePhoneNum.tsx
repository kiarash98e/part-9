import React from 'react'
import Button from '../ui/button'
import Title from '../ui/title'

const DeletePhoneNum:React.FC<any> = ({deletePhoneNum,closeModal,idSelect}) => {

   
   
  return (
    <>
        <div className='my-3'>
            <Title title='Delete Phone Number'/>
        </div>
       <div className='my-3 divide-y-2 divide-gray-400'>
            <span>Are You Sure Delete ???</span>
       </div>
        <div className="flex flex-col py-3 justify-center items-center md:flex-row space-x-5">
            <Button
                variant='solid'
                aria-label='cancel'
                onClick={closeModal}
                className="hover:border hover:border-gray-700 w-32 h-10"
            >
                 <span >Cancel</span>
            </Button>
            <Button
                variant='modal'
                aria-label='save'
                onClick={() => {
                    deletePhoneNum(idSelect)
                    closeModal()
                }}
                
                className={'w-32 h-10 px-3 bg-green text-white text-center flex justify-center items-center'}
            >
                 <span>Delete</span>
            </Button>
            
        </div>
    </>
  )
}

export default DeletePhoneNum 