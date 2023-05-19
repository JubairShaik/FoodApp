import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { useStore } from"../../store/store"


const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout;
