import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Admin = () => {
  return (
    <div className='' style={{minHeight: '100vh', backgroundImage: `url('https://wallpaperaccess.com/full/16676.jpg')`}}>
        <Header />
        <Sidebar />
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default Admin