import React from 'react'
import { IoCall, IoMic, IoMicOff, IoVolumeHigh, IoVolumeOff } from 'react-icons/io5'
import Button from '../../components/ui/button'
import {useLocation} from 'react-router-dom'

const Call:React.FC<any> = ({setCall}) => {

    const [callSt , setCallSt] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setCallSt(true)
        }, 2500);
    })

    React.useEffect(() => {
        setTimeout(() => {
            setCall(false)
        }, 6000);
    })
    
    const loc = useLocation()
    let item:any = loc?.state
  return (
    <div className='flex flex-col min-h-screen'>
      <div className="flex flex-col p-4 max-w-[350px] fixed z-11 bottom-28">
            <div className='flex flex-col w-[320px] justify-center items-center md:w-[350px] h-auto bg-gray-800 rounded-md'>
                <span className='w-16 h-16 my-3 rounded-full bg-greenSky'></span>
                 <div className="py-2 flex flex-col justify-center items-center">
                        {item?.item?.name ? <span className='text-white text-xl font-segoe'>{item?.item.name}</span>:""}
                        <span className='text-gray-200 text-xl my-1'>{item?.item?.phone}</span>
                </div> 
                <div className="my-3 w-full flex flex-col items-center justify-center px-3">
                    <div className="w-full flex justify-center items-center mx-auto">
                        <div className="w-1/3 flex justify-center">
                            <Button
                                variant='rounded'
                                className={'w-16 h-16 bg-black text-2xl rounded-full flex flex-col ' + callSt ? "text-gray-800":"text-white"}
                            >
                                {
                                    callSt ? <IoMic size={20}/>:
                                    <IoMicOff size={20}/>
                                
                                }
                            </Button>
                        </div>
                        <div className="w-1/3 flex justify-center">
                            <Button
                                variant='rounded'
                                className={'w-16 h-16 bg-black text-2xl rounded-full flex flex-col ' + callSt ? "text-gray-800":"text-white"}
                            >
                                {
                                    callSt ? <IoMic size={20}/>:
                                    <IoMicOff size={20}/>
                                
                                }
                            </Button>
                        </div>
                        <div className="w-1/3 flex justify-center">
                            <Button
                                variant='rounded'
                                className={'w-16 h-16 bg-black text-2xl rounded-full flex flex-col ' + callSt ? "text-gray-800":"text-white"}
                            >
                                {
                                    callSt ? <IoMic size={20}/>:
                                    <IoMicOff size={20}/>
                                
                                }
                            </Button>
                        </div>
                       
                    </div>
                    <div className="w-full flex my-2 justify-center items-center mx-auto">
                        <div className="w-1/3 flex justify-center">
                            <Button
                                variant='rounded'
                                className={'w-16 h-16 bg-black text-2xl rounded-full flex flex-col ' + callSt ? "text-gray-800":"text-white"}
                            >
                                {
                                    callSt ? <IoVolumeHigh size={20}/>:
                                    <IoVolumeOff size={20}/>
                                
                                }
                            </Button>
                        </div>
                        <div className="w-1/3 flex justify-center">
                            <Button
                                variant='rounded'
                                className={'w-16 h-16 bg-black text-2xl rounded-full flex flex-col ' + callSt ? "text-gray-800":"text-white"}
                            >
                                {
                                    callSt ? <IoVolumeHigh size={20}/>:
                                    <IoVolumeOff size={20}/>
                                
                                }
                            </Button>
                        </div>
                        <div className="w-1/3 flex justify-center">
                            <Button
                                variant='rounded'
                                className={'w-16 h-16 bg-black text-2xl rounded-full flex flex-col ' + callSt ? "text-gray-800":"text-white"}
                            >
                                {
                                    callSt ? <IoVolumeHigh size={20}/>:
                                    <IoVolumeOff size={20}/>
                                
                                }
                            </Button>
                        </div>
                    </div>
                </div>
                <Button
                    aria-label='end call'
                    variant='circle'
                    className='w-12 h-12 p-2 md:w-20 md:h-20 bg-red-600 text-white text-xl rounded-full flex flex-col my-3'
                    
                    onClick={() => {
                        setCall(false);
                       
                    }}
                >
                    <IoCall size={20}/>
                </Button>
            </div>
      </div>
    </div>
  )
}

export default Call