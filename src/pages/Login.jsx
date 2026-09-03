import React from 'react'

const Login = () => {
  return (
    <> 
          <div className='bg-[#0A2f5A] w-full min-h-screen flex justify-center items-center text-center'>
  <div className='bg-[#ffffff] p-5 w-[400px] shadow-2xl rounded-xl'>
                 <div className='flex justify-center items-center mr-[15px]'><img src="./src/assets/images/logo-edit.png" width="175" height="85" alt="Logo" /></div>    
          <h1 className='text-[24.71px] text-[#0A2F5A] font-sans font-bold mt-[-15px] leading-6'>Welcome Back</h1>
          <p className='text-[14px] text-[#777777] font-sans mt-1'>Sign in to continue</p>
    <input type="text" placeholder="Username" className='p-2 rounded mt-5 w-full text-sm text-[#000000] font-sans '/>
          <input type="text" placeholder="Password" className='p-2 rounded mt-5 w-full text-sm text-[#000000] font-sans' />
                  <button className='w-full mt-5 font-semibold p-2 uppercase rounded bg-[#F2C94C] text-[#0A2f5A] font-sans text-[16px]'>Sign in</button>
  </div>
          </div>
    </>
  )
}

export default Login
