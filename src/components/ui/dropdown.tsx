/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Button from './button'

interface IDropDown {
    icon: any
    options?: any[] | undefined
    id?:any,
    setIdSelect:any
    item1:any,
    setData:any
}

const DropDown: React.FC<IDropDown> = ({ id, item1, setData, icon, options = [], setIdSelect }) => {
    const handleSelectId = () => {
        setIdSelect(id)
        setData(item1)
    }
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button>
                    <button
                        onClick={handleSelectId}
                       aria-label='add options'
                        className=' px-1'
                    >
                        <span className=" h-full text-gray-600 flex py-1 flex-shrink-0 justify-center items-center cursor-pointer focus:outline-none">
                            {icon}
                        </span>
                    </button>

                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                
            >
                <Menu.Items className="origin-top-right z-50 py-1 absolute right-0 mt-1 w-28 rounded-md bg-gray-800 text-gray-50 focus:outline-none">
                   {
                            options.length ?
   

                                    options.map((item: any,i:any) =>{
                                    return( 
                                    <Menu.Item key={`${id}` + i}>
                                        {({ active }) => (
                                            <Button
                                                
                                                variant='solid'
                                                onClick={item.onClick}
                                               
                                            >
                                                <span className={"flex items-center px-2 text-white bg-gray-800"}>
                                                    {item.icon} <span className='ms-2'>{item.text}</span>
                                                </span>
                                            </Button>
                                        )}
                                    </Menu.Item>


                                )})
                                : null
                        } 

                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default DropDown





