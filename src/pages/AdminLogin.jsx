import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import IconHandle from '../components/SideBar/IconHandle'

const AdminLogin = ({ onClose, onAdminClick,onPhoneClick }) => {
    
  return (
    <>

              <div className='relative w-full flex justify-center items-center '>
              <div className='font-josefin fixed inset-0 md:w-[400px] w-[250px]
            h-[350px] top-1/4 md:left-1/4 lg:left-96 left-12 bg-slate-200/40 text-white backdrop-blur-lg border text-center border-white/20 shadow-lg p-5 rounded-xl
'>
          
                   <div className='relative'>
                              <button
                                  onClick={onClose}
                          className="absolute right-3 top-2 text-3xl text-[#0A2F5A] font-[500]"
                              >
                                  ×
                              </button>
                   </div>
           
                      <div className='flex justify-center items-center mt-3'>
                          <div className='flex justify-center items-center p-2 w-[50px] h-[50px] bg-[#ffdf00]  rounded-full mt-2'>
                           
                                  <i className="fa-solid fa-user-shield text-[#0A2F5A] text-[32px]"></i>
                              
                          </div>
              </div>
   
                      <h1 className='text-[24.71px] text-[#ffffff] font-sans font-bold mt-[20px] leading-6'>Admin Portal</h1>
                      <p className='text-[14px] text-[#ffffff] font-sans mt-1'>Authorized access only</p>
                  <input type="text" placeholder="Username" className='bg-slate-100/30 backdrop-blur-md focus:placeholder-gray-400 border p-2 rounded mt-5 w-full text-sm text-[#000000] placeholder-gray-300 font-[500] font-sans ' />
                  <input type="text" placeholder="Password" className='bg-slate-100/30 backdrop-blur-md focus:placeholder-gray-400 border p-2 rounded mt-5 w-full text-sm text-[#000000] placeholder-gray-300 font-[500] font-sans' />
                      <button className='w-full mt-5 font-semibold p-2  rounded bg-[#F2C94C] text-[#0A2f5A] font-sans text-[16px]'>Login To Dashboard</button>
                  </div>
              </div>
   

    </>
  )
}

export default AdminLogin
