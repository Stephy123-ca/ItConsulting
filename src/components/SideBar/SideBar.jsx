import React, { useState } from 'react'
import AdminLogin from '../../pages/AdminLogin'
import UserHome from '../Home/UserHome'

const SideBar = ({ onAdminClick, onPhoneClick}) => {

  return (
    <>
          <div className='flex justify-center items-center p-2 w-[50px] h-[50px] bg-[#25D366] rounded-full'>
              <div className=''>
                  <i className="fa-brands fa-whatsapp text-[#ffffff] text-[32px]"></i>
                
              </div>
          </div>
          <div className='flex justify-center items-center p-2 w-[50px] h-[50px] bg-[#ffdf00]  rounded-full mt-2'>
   <div className=''>
                  <button onClick={onAdminClick} type="submit"><i className="fa-solid fa-user-shield text-[#0A2F5A] text-[22px]"></i></button>
   </div>
      </div>
          <div className='flex justify-center items-center p-2 w-[50px] h-[50px] bg-[#ffdf00]  rounded-full mt-2'>
              <div className=''>
                  <button onClick={onPhoneClick} type="submit"><i className="fa-solid fa-phone text-[#0A2F5A] text-[22px]"></i></button>
              </div>
          </div>
         
    </>
  )
}

export default SideBar
