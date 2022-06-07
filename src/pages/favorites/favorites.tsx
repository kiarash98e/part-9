import React from 'react'
import { IoCall, IoTrash } from 'react-icons/io5'
import Button from '../../components/ui/button'
import Card from '../../components/ui/card'
import Scrollbar from '../../components/ui/scrollbar'
import {useNavigate} from 'react-router-dom'

const Favorites: React.FC<any> = ({setCall,addFavorites,setAddFavorites}) => {
   
    
    const removeFav = (id:number) => {
        setAddFavorites([...addFavorites].filter((item) => (
            item.id !== id
        ))) 
    }
    
    const nav = useNavigate()

    const calling = (name: string,phone: string[]) => {
        setCall(true);
        nav('/calling',{state:{item:{
            phone:phone,
            name:name,
          }}})
    }
   
    return (
        <div className='flex flex-col min-h-screen'>
            <div className="flex flex-col p-4 fixed z-11 bottom-28">
                <h1 className="text-white font-bold text-uppercase text-xl py-4">Favorites</h1>
                <Scrollbar className="cart-scrollbar h-[250px] w-full flex-grow px-2 mt-4">
                    {
                        addFavorites.length ? 
                            addFavorites.map((item:any,i:number) => {
                                return(
                                    <Card key={item.id + i} id={item.id} name={item.name} phone={item.phone}>
                                        <Button
                                            variant='solid'
                                            aria-label='add call'
                                            className='px-1'
                                            onClick={() => calling(item.name,item.phone)}
                                        >
                                            <span className=" h-full text-gray-600 flex py-1 flex-shrink-0 justify-center items-center cursor-pointer focus:outline-none">
                                                <IoCall size={15}/>
                                            </span>
                                        </Button>
                                        <Button
                                            variant='solid'
                                            aria-label='remove fav'
                                            onClick={() => removeFav(item.id)}
                                            className='px-1'
                                        >
                                            <span className=" h-full text-gray-600 flex py-1 flex-shrink-0 justify-center items-center cursor-pointer focus:outline-none">
                                                <IoTrash size={15}/>
                                            </span>
                                        </Button>
                                    
                                    </Card>
                                )
                            })
                        : <></>
                    }
            
            
          </Scrollbar>
            </div>
        </div>
    )
}

export default Favorites
