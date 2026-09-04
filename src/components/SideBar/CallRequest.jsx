import React from 'react'
import SideBar from './SideBar'

const CallRequest = ({onClose,onPhoneClick}) => {
  return (
    <>
          <div className="fixed inset-0 z-99 flex items-center justify-center ">

              <div className="relative md:w-[350px] w-[250px] right-16 md:right-0 min-h-[520px] bg-white/10 text-white backdrop-blur-lg border text-center border-white/20 shadow-lg p-5 rounded-xl">
                  <div className="absolute inset-0  rounded text-center">

                      <button
                          onClick={onClose}
                          className="absolute right-3 top-2 text-3xl text-[#0A2F5A] font-[500]"
                      >
                          ×
                      </button>
                      <div className='flex justify-center items-center mt-12'>
                          <div className='flex justify-center items-center p-2 w-[70px] h-[70px] bg-[#ffdf00]  rounded-full mt-2'>


                              <i className="fa-solid fa-headset text-[#0A2F5A] text-[32px]"></i>

                          </div>
                      </div>

                      <div className='pt-10 px-5'>
                          <h1 className='text-[24.71px] text-[#ffffff] font-sans font-bold mt-[3px] leading-6 z-99'>Request a Callback</h1>
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
          </div>
    </>
  )
}

export default CallRequest
