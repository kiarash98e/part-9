import React from 'react'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import Button from '../ui/button'
import Input from '../ui/input'
import Title from '../ui/title'

const ViwePhoneNum:React.FC<any> = ({addFavorites=[],data,setAddFavorites,setFavorite,favorite}) => {


    const [heart, setheart] = React.useState(favorite)
    
    React.useEffect(() => {
        if (heart) {
            setAddFavorites([...addFavorites,data])
            
            
        }
        else{
            setAddFavorites([...addFavorites].filter((item) => (
                item.id !== data.id
            ))) 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [heart])
    
    
  return (
    <>
        <div className='my-3'>
            <Title title='Viwe Phone Number'/>
        </div>
        <div className="flex justify-center w-full h-auto">
            <div className="w-12 h-12 my-4 rounded-full bg-greenSky"></div>
       
        </div>
        <div className="my-3">
            <Input disabled={true} label='Enter Name' name='name' type='text' value={data?.name} placeHolder={"Enter Name"}  />
        </div>
        <div className="my-3">
            <Input disabled={true} label='Enter phone' name='phone' type='tel' value={data?.phone} placeHolder={"Enter Phone"}  />
        </div>
        <div className="my-3">
            <Button
                variant='modal'
                className="w-44 h-10 px-2 flex"
            >
                {
                    heart ? 
               <IoHeart onClick={() => {
                     setheart(!heart)

               }} size={20} className={" text-red-500 "}/> :
               <IoHeartOutline onClick={() => {
                setheart(!heart)
            }} size={20} />   
            }
               <span className="text-white ms-3"> add to favorite</span>
            </Button>
        </div>
    </>
        
  )
}

export default ViwePhoneNum