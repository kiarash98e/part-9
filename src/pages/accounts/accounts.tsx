import React from 'react'
import { IoAddOutline, IoCall, IoCreateOutline, IoEllipsisVertical, IoEye, IoTrashOutline } from 'react-icons/io5'
import AddPhoneNum from '../../components/addPhoneNum/addPhoneNum'
import DeletePhoneNum from '../../components/deletePhoneNum/deletePhoneNum'
import EditPhoneNum from '../../components/editPhoneNum/editPhoneNum'
import ManagedModal from '../../components/modal/fcModal'
import SearchBox from '../../components/search/search'
import Button from '../../components/ui/button'
import Card from '../../components/ui/card'
import DropDown from '../../components/ui/dropdown'
import Scrollbar from '../../components/ui/scrollbar'
import ViwePhoneNum from '../../components/viwePhoneNum/viwePhoneNum'
import useModal from '../../customHock/useModal'
import {useNavigate} from 'react-router-dom'
import { IData } from '../../typpes'


const Accounts:React.FC<any> = ({setCall,favorite,setFavorite,setAddFavorites,deletePhoneNum,editPhoneNum,data,setData,setModalViwe,modalViwe,dataPhone,setDataPhone,addPhoneNum}) => {

  const [inputSearch,setInputSearch] = React.useState<string>("")
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setInputSearch(value)
  }

  const [storage, setStorage] = React.useState<IData[]>()
  
  React.useEffect(() => {
    if (!inputSearch || inputSearch !== "") {
      let res = [...data].filter((item:any) => (
     //   item.name.includes(inputSearch) || item.phone.includes(inputSearch)
        Object.values(item).join("").toLowerCase().includes(inputSearch.toLowerCase())
      ))
     setStorage([...res])
    }
    else{
      setStorage(data)

    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [ inputSearch])

  

  const { open,modal,closeModal } = useModal()

  const addModalOpen = () => {
    setModalViwe("add")
    open()
  }

  const editModalOpen = () => {
    setModalViwe("edit")
    open()
  }

  const deleteModalOpen = () => {
    setModalViwe("delete")
    open()
  }

  const viweModalOpen = () => {
    setModalViwe("viwe")
    open()
  }

  const ModalClose = () => closeModal()

  const nav = useNavigate()

  const calling = (name: string,phone: string[]) => {
    setCall(true);
    nav('/calling',{state:{item:{
      phone:phone,
      name:name,
    }}})
  }


  const options : any[] = [
    {
      onClick: deleteModalOpen,
      icon:<IoTrashOutline size={15} className="w-5"/>,
      text: "Delete",
  },
  {
    onClick: editModalOpen,
    icon:<IoCreateOutline size={15} className="w-5"/>,
    text: "Edit",
},
{
  onClick: viweModalOpen,
  icon:<IoEye size={15} className="w-5"/>,
  text: "viwe",
},
]

  const [idSelect, setIdSelect] = React.useState()
  return (
    <div className='flex flex-col min-h-screen'>
      <div className="flex flex-col p-4 max-w-[350px] fixed z-11 bottom-28">
          <h1 className="text-white font-bold text-uppercase text-xl py-4">contacts</h1>
          <div className="flex justify-between px-3 mt-8 w-full">
              <SearchBox name='search' value={inputSearch} onChange={handleChange}/>
              <Button
                variant='solid'
                onClick={addModalOpen}
                aria-label='add contacts'
                className='px-1 ms-5'
              >
                <span className="w-10 md:w-8 h-full text-heading flex py-1 flex-shrink-0 justify-center items-center cursor-pointer focus:outline-none">
                    <IoAddOutline size={35}/>
                </span>
              </Button>
          </div>       
          <Scrollbar className="cart-scrollbar h-[250px] w-full flex-grow px-2 mt-4">
            {
              inputSearch.length > 1 ? (
                storage?.map((item:any,i:any) => {
                  return(
                    <Card key={item.id + i} id={item.id} name={item.name} phone={item.phone}>
                        <Button
                        variant='solid'
                        onClick={() => calling(item.name,item.phone)}
                        aria-label='add call'
                        className='px-1'
                      >
                        <span className=" h-full text-gray-600 flex py-1 flex-shrink-0 justify-center items-center cursor-pointer focus:outline-none">
                            <IoCall size={15}/>
                        </span>
                      </Button>
                      
                      <DropDown item1={item} setData={setDataPhone}  setIdSelect={setIdSelect} id={item.id} icon={<IoEllipsisVertical size={15}/>} options={options}/>
                    </Card>
  
                  )
                })
              ):(
                data.map((item:any,i:any) => 
                {
                  
                  return(
                  <Card key={item.id + i} id={item.id} name={item.name} phone={item.phone}>
                      <Button
                      variant='solid'
                      onClick={() => calling(item.name,item.phone)}
                      aria-label='add call'
                      className='px-1'
                    >
                      <span className=" h-full text-gray-600 flex py-1 flex-shrink-0 justify-center items-center cursor-pointer focus:outline-none">
                          <IoCall size={15}/>
                      </span>
                    </Button>
                    
                    <DropDown item1={item} setData={setDataPhone}  setIdSelect={setIdSelect} id={item.id} icon={<IoEllipsisVertical size={15}/>} options={options}/>
                  </Card>

                )})
              )
            }
            
            
          </Scrollbar>
      </div>
      {
        modal ? <ManagedModal 
          modal={modal} 
          onClose={ModalClose} 
          elemnt={
            <>
              {
                modalViwe === "add" ? <AddPhoneNum idSelect={idSelect} data={dataPhone} setData={setDataPhone} addPhoneNum={addPhoneNum} closeModal={ModalClose}/> :
                modalViwe === "edit" ? <EditPhoneNum editPhoneNum={editPhoneNum} data={dataPhone} setData={setDataPhone} idSelect={idSelect} closeModal={ModalClose}/> :
                modalViwe === "delete" ? <DeletePhoneNum idSelect={idSelect} closeModal={ModalClose} deletePhoneNum={deletePhoneNum}/> : 
                modalViwe === "viwe" ? <ViwePhoneNum data={dataPhone} setFavorite={setFavorite} setAddFavorites={setAddFavorites} favorite={favorite}/> : null
              }
            </>
          }  
        /> : null
      }
    </div>
  )
}

export default Accounts 