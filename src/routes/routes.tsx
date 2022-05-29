import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/layout'
import Accounts from '../pages/accounts/accounts'
import Calling from '../pages/calling/calling'
import Favorites from '../pages/favorites/favorites'

const RouteApp = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Calling/>}/>
                <Route path='accounts' element={<Accounts/>}/>
                <Route path='favorites' element={<Favorites/>}/>
                <Route path='*' element={<p className='text-red-500'>Error 404</p>}/>
            </Route>
        </Routes>
    )
}

export default RouteApp
