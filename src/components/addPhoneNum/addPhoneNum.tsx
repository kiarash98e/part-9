import React from 'react'
import { IContacts } from '../../typpes'
import Button from '../ui/button'
import Input from '../ui/input'
import Title from '../ui/title'

const AddPhoneNum:React.FC<any> = ({data,closeModal,addPhoneNum}) => {

    const [dataAdd, setDataAdd] = React.useState<IContacts>({
        phone:"",
        name:''
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        if (value !== "") {
            setDataAdd({
                ...dataAdd,
                [name]:value
            })
        }
    }

    const handleSave = () => {
        if (dataAdd.phone !== '' || dataAdd.name !== "") {
            addPhoneNum(dataAdd)
            
        }
        setTimeout(() => {
            closeModal()
        }, 200);
    }
  return (
    <>
        <div className='my-3'>
            <Title title='Add Phone Number'/>
        </div>
        <div className="flex justify-center w-full h-auto">
            <div className="w-12 h-12 my-4 rounded-full bg-greenSky"></div>
       
        </div>
        <div className="my-3">
            <Input label='Enter Name' name='name' type='text' onChange={handleChange} value={data?.name} placeHolder={"Enter Name"}  />
        </div>
        <div className="my-3">
            <Input label='Enter phone' name='phone' type='tel' onChange={handleChange} value={data?.phone} placeHolder={"Enter Phone"}  />
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
                onClick={handleSave}
                className={'w-32 h-10 px-3 bg-green text-white text-center flex justify-center items-center'}
            >
                 <span>Save</span>
            </Button>
            
        </div>
    </>
  )
}

export default AddPhoneNum 