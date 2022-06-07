import React from 'react'
import { IoCall, IoBackspace } from 'react-icons/io5'
import Button from '../../components/ui/button'
import {useNavigate} from 'react-router-dom'

const PhoneNum: any = [
  {
    value: '1',
  },
  {
    value: '2',
  },
  {
    value: '3',
  },
  {
    value: '4',
  },
  {
    value: '5',
  },
  {
    value: '6',
  },
  {
    value: '7',
  },
  {
    value: '8',
  },
  {
    value: '9',
  },
  {
    value: '*',
  },
  {
    value: '0',
  },
  {
    value: '#',
  },
]

const Calling: React.FC<any> = ({setCall}) => {

  const [phone, setPhone] = React.useState<any[]>([])

  const handlePhone = (e: any) => {
    const { value } = e.target as any
   
    if (phone.length < 11) {
      setPhone([
        ...phone,
        value
      ])
      
    }
  }

 const nav = useNavigate()
  const calling = () => {
    setCall(true);
    if(phoneCost.length > 0){
      nav('calling',{state:{item:{
        phone:phoneCost,
        name:'',
      }}})

    }
  }

  const handleRemove = () => {
    setPhone([...phone].slice(0,phone.length - 1))
  }

  const phoneCost = phone.slice(0, 11)
  
  return (
    <div className='flex flex-col min-h-screen'>
      <div className="flex flex-col p-4 fixed z-11 bottom-28">
        <span className='text-white  font-satisfy text-lg font-bold py-4 mx-[85px] md:mx-12'>{phone.length <= 11 ? phone : phoneCost}</span>

         <div className="w-1/2 mx-16 md:mx-5 md:w-1/3 px-1">
          {
            PhoneNum.length ?
              PhoneNum.map((item: any, i: any) => {
                return (

                  <Button
                    key={i}
                    aria-label='phoneNum'
                    variant='rounded'
                    className='md:w-20 md:h-20 text-xl rounded-full flex flex-col m-1'
                    value={item.value}
                    onClick={handlePhone}
                  >
                    {item.value}


                  </Button>
                )
              })
              : null
          }
          <Button

            aria-label='phoneNum'
            variant='rounded'
            className='md:w-20 md:h-20 cursor-auto bg-transparent text-xl rounded-full flex flex-col m-1'
          >

          </Button>
          <Button
            onClick={calling}
            aria-label='call'
            variant='circle'
            className='w-12 h-12 p-2 md:w-20 md:h-20 text-xl rounded-full flex flex-col m-1'
          >
            <IoCall size={30} />
          </Button>
          {
            phone.length > 0 ?
              <Button
                onClick={handleRemove}
                aria-label='phoneNum'
                variant='solid'
                style={{
                  color:"rgb(242,242,242)"
                }}
                className='md:w-20 md:h-20 ease-in-out  cursor-auto duration-300 bg-transparent text-white text-xl rounded-full flex flex-col m-1'
              >
                <IoBackspace size={40} className="p-1 cursor-pointer"/>
              </Button> : null
          }
        </div>
      </div>
    </div>
  )
}

export default Calling