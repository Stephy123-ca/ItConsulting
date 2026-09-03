import React from 'react'

const Header = () => {
  return (
    <>
      <div className='hidden container lg:flex justify-between items-center'>
      <div className='ml-[-20px] mt[-20px]'>
<img src="./src/assets/images/logo-edit.png" width="165" height="165" alt="Logo"/>
 
    </div>
    <div className='flex justify-between items-center gap-3 '>
    <div className="flex justify-evenly items-center gap-2 mr-5">
    <div className="bg-yellow-400 p-1">
              <i className="fa-solid fa-phone"></i>
    </div>
    <div>
    <p className="text-yellow-400">Call Us</p>
              <p className="text-sm text-[#0F4C8A]">+91-974-777-6355</p>
    </div>

    </div>
          <div className="flex justify-evenly items-center gap-2 mx-2 mr-5">
            <div className="bg-yellow-400 p-1 ">
              <i className="fa-solid fa-envelope-open"></i>
            </div>
            <div>
              <p className="text-yellow-400">Mail Us</p>
              <p className="text-sm text-[#0F4C8A]">info@evlogia.com</p>
            </div>

          </div>
          <div className="flex justify-evenly items-center gap-2 mr-[-15px]">
            <div className="bg-yellow-400 p-1">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className=''>
              <p className="text-yellow-400">Address</p>
              <p className="text-sm text-[#0F4C8A]">HS5,Heavenly Plaza,Vazhakkala</p>
            </div>

          </div>

    </div>
  
    </div>
    </>
  )
}

export default Header
