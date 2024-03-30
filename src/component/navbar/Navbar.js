import React from 'react'
import './navbar.css'
import Navcom from './navcom/Navcom'

const Navbar = ({title}) => {
  return (
   <Navcom  title={title}/>
  )
}

export default Navbar