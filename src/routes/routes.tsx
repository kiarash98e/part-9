import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/layout'
import Accounts from '../pages/accounts/accounts'
import Calling from '../pages/calling/calling'
import Favorites from '../pages/favorites/favorites'
import contactsData from '../data/data'
import Call from '../pages/call/call'
import ProtectedRoute from './privateRoute'
// eslint-disable-next-line @typescript-eslint/no-redeclare
import {IData,ModalViwe,IContacts} from '../typpes'



const RouteApp = () => {

    const [modalViwe,setModalViwe] = React.useState<ModalViwe>("add")

    const [data,setData] = React.useState<IData[]>(contactsData)

    const [dataPhone,setDataPhone] = React.useState<IContacts>({
        name:'',
        phone:""
    })

    const addPhoneNum = (phoneData:IContacts) => {
        const id:number = data.length + 1
        setData([
            ...data,
            { ...phoneData , id }
        ])
    }

    const editPhoneNum = (Data:IContacts,id:number) => {
        setData([...data].map((item:any) => item.id === id ? {...Data} : item))
    }

    const deletePhoneNum = (id:number) => {
     setData([...data].filter((item) => (
         item.id !== id
     )))
    }

    const [addFavorites, setAddFavorites] = React.useState([])
    
    const [favorite, setFavorite] = React.useState(false)

    const [call, setCall] = React.useState<boolean>(false)

    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Calling setCall={setCall}/>}/>
                <Route path='accounts' element={<Accounts setCall={setCall} favorite={favorite} setFavorite={setFavorite} setAddFavorites={setAddFavorites} editPhoneNum={editPhoneNum} deletePhoneNum={deletePhoneNum} modalViwe={modalViwe} addPhoneNum={addPhoneNum} setModalViwe={setModalViwe} dataPhone={dataPhone} data={data} setData={setData} setDataPhone={setDataPhone}/>}/>
                <Route path='favorites' element={<Favorites setCall={setCall} addFavorites={addFavorites} setAddFavorites={setAddFavorites} />}/>
                <Route path='calling' element={
                    <>
                        <ProtectedRoute user={call}>
                            <Call setCall={setCall} />
                        </ProtectedRoute>
                    </>
                }/>
                <Route path='*' element={<p className='text-red-500'>Error 404</p>}/>
            </Route>
        </Routes>
    )
}

export default RouteApp
