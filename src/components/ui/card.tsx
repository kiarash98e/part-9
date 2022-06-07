/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'

interface ICard {
    id:number,
    phone:string,
    name:string,
    children:React.ReactNode
}

const Card: React.FC<ICard> = ({name,id,phone,children}) => {

   
    return (

        <div key={id} className=" max-w-full bg-white rounded-lg border my-2 mx-4 md:mx-2 sm:p-8 dark:bg-gray-400 dark:border-gray-400 border-gray-400">
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-1">
                        <div className="flex items-center space-x-5">
                            <div className=" w-12 h-12 bg-greenSky rounded-full flex justify-center items-center text-white">
                                <span className="text-center text-xl">{name.slice(0,1)}</span>   
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-md  font-bold text-gray-900 truncate dark:text-white">
                                    {name}
                                </p>
                                <p className="text-sm text-gray-400 truncate dark:text-gray-400">
                                    {phone}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                {children}
                            </div>
                        </div>
                    </li>
                   
                </ul>
            </div>
        </div>

    )
}

export default Card