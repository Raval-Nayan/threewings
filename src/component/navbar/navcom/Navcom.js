import React from 'react'
import '../navbar.css'

const Navcom = ({title}) => {
  return (
    <div className='border navbar_container d-flex  '>
    <img className='logo' src='../../images/splash-screen.png'   alt='img'></img>
    <h2 className='nav_text'>{title}</h2>
    </div>
  )
}

export default Navcom