import React from 'react'
import './menuicon.css'
import { NavLink } from 'react-router-dom'

const Menuicon = ({Icon,title,Link}) => {
  return (
    <div className="category_box">
    <NavLink  to={`/${Link}`}><Icon className="menu_icon"/></NavLink>
    <label className="text-center">{title}</label>
  </div>
  )
}

export default Menuicon