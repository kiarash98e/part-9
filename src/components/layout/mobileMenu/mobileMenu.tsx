import React from 'react'
import Button from '../../ui/button'
import { IoStar, IoCall, IoPersonAdd } from 'react-icons/io5'
import CustomLink from '../../customLink/customLink'

const MobileMenu: React.FC = () => {

  
    return (
        <div className="fixed z-10 bottom-4 flex items-center justify-between w-[350px] mx-auto rounded-[4rem] text-gray-700 body-font bg-white h-16 sm:h-16 px-4">
            <Button
                aria-label="Menu"
                variant='solid'
                type="button"
            >
               <CustomLink to={"/"}>
                    <IoCall />
                    <p className="text-sm mt-2 text-center font-semibold">call</p>

               </CustomLink>
            </Button>
            <span className='bg-gray-400 w-[1px] h-10 my-auto'></span>
            <Button
                aria-label="Menu"
                variant='solid'
                type="button"
                className="min-w-[4rem] flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
            >
                <CustomLink to={"/accounts"}>
                    <IoPersonAdd />
                    <p className="text-sm mt-2 text-center font-semibold">accounts</p>

                </CustomLink>
            </Button>
            <span className='bg-gray-400 w-[1px] h-10 my-auto'></span>
            <Button
                aria-label="Menu"
                variant='solid'
                type="button"
                className="min-w-[4rem] flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
            >
                <CustomLink to={"/favorites"}>
                    <IoStar />
                    <p className="text-sm mt-2 text-center font-semibold">favorites</p>

                </CustomLink>
            </Button>
        </div>
    )
}

export default MobileMenu
