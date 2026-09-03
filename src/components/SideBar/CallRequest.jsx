import React from 'react'
import SideBar from './SideBar'

const CallRequest = ({onClose,onPhoneClick}) => {
  return (
    <>
          <div className=''>
              <div className='relative w-full flex justify-center items-center'>
                  <div className='font-josefin bg-slate-200/40 backdrop-blur-lg fixed  md:w-[400px] w-[250px] h-[460px] top-1/4 md:left-1/4 lg:left-[420px] lg:top-24 left-16 border text-center border-white/35 shadow-lg p-5  rounded-xl '>

                      <button
                          onClick={onClose}
                          className="absolute right-3 top-2 text-3xl text-[#0A2F5A] font-[500]"
                      >
                          ×
                      </button>

                      <div className='flex justify-center items-center mt-3'>
                          <div className='flex justify-center items-center p-2 w-[50px] h-[50px] bg-[#ffdf00]  rounded-full mt-2'>

                              <i className="fa-solid fa-headset text-[#0A2F5A] text-[32px]"></i>

                          </div>
                      </div>

                      <h1 className='text-[24.71px] text-[#ffffff] font-sans font-bold mt-[20px] leading-6 z-99'>Request a Callback</h1>
                      <p className='text-[14px] text-[#ffffff] font-sans mt-2'>Our team will contact you shortly</p>
                      <input type="text" placeholder="Your Name" className='bg-slate-100/30 backdrop-blur-md focus:placeholder-gray-400 border p-2 rounded mt-7 w-full text-sm text-[#666666] placeholder-gray-300 font-sans ' />
                      <input type="text" placeholder="Phone Number" className='bg-slate-100/30 backdrop-blur-md border p-2 rounded focus:placeholder-gray-400 mt-7 w-full text-sm text-[#000000] placeholder-gray-300 font-sans' />
                      <select defaultValue="" className='mt-7 rounded p-2 bg-white text-black text-sm w-full outline-none
    focus:ring-2
    focus:ring-[#F2C94C]'>
                          <option value="" disabled>Select Service</option>
                          <option value="website">Website Development</option>
                        <option value="digital">Digital Marketing</option>
                          <option value="seo">SEO Services</option>
                          <option value="software">Software Development</option>
                          <option value="IT">IT Consulting</option>
                     </select>
                      <button className='w-full mt-7 font-semibold p-2  rounded bg-[#F2C94C] text-[#0A2f5A] font-sans text-[16px]'>Submit Request</button>
                  </div>
              </div>
          </div>
    </>
  )
}

export default CallRequest
