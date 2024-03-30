import React, { useEffect } from 'react'
import Chepterside from '../chepter_sidebar/Chepterside'
import Cheptervideo from '../chepter_video/Cheptervideo'
import { useGlobalContext } from '../Contex/Contex'
import { useParams } from 'react-router-dom'


const data="http://instimattress.thethreewings.com/api/get_topic";
const CheptarComponent = () => {
   const { GetTopic}=useGlobalContext()
   
   const {id}=useParams()

    useEffect(()=>{
        GetTopic(`${data}?id=${id}`)
      
    },[id])
  return (
    <div className='d-flex'>

    <Chepterside />
    <Cheptervideo />
    
    </div>
  )
}

export default CheptarComponent