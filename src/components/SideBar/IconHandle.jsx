import React, { useState } from 'react'
import SideBar from './SideBar';
import AdminLogin from '../../pages/AdminLogin';
import CallRequest from './CallRequest';

const IconHandle = () => {
        const [modal,setModal]=useState(false)
        const [showModal,setShowModal]=useState(false)
    
        const handleModal=()=>{ 
     setModal(!modal)
        }
        const handleCall=()=>{
          setShowModal(!showModal)
        }
  return (
    <>
      <SideBar onAdminClick={handleModal} onPhoneClick={handleCall} />
          {modal&&(<AdminLogin onClose={()=>setModal(false)} onAdminClick={handleModal}/>)}
{showModal&&(<CallRequest onClose={()=>setShowModal(false)} onPhoneClick={handleCall}/>)}
    </>
  )
}

export default IconHandle
