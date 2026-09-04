import React from 'react'
import image3 from "../assets/images/cyber.webp";
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import IconHandle from '../components/SideBar/IconHandle'

const UserTestimonal = () => {
  return (
    <>
            <Header/>
      <Navbar/>
          <div className='relative w-full min-h-[300px] bg-[url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop")]
           top-0 text-center'>
              <div className='absolute inset-0 bg-blue-950/90 flex-wrap'>
                  <h1 className='font-josefin text-[#ffffff] md:text-[48.11px] text-[40px] pt-[60px] font-[600]'>Client Testimonal</h1>
                  <p className='font-work text-[#f4f4f4] md:text-[19px] text-[14px] px-10'>Trusted by Businesses for futuristic digital transformation</p>
              </div>
      </div>
          <div className='container py-12'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
<div className='bg-[#ffffff] flex flex-col items-center w-[300px] h-[350px] ml-5 pt-10 rounded-2xl shadow-2xl'>
                      <div className="bg-[#0A2F5A] w-[50px] h-[50px] flex justify-center items-center rounded-full">
                          <i className="fa-solid fa-quote-left text-[22px] text-[#F2C94C]"></i>
                      </div>
                      <div className='text-center mt-3 '><img src="./src/assets/images/cyber.webp" className=" w-[100px] h-[100px] rounded-full border-[5px] border-[#F2C94C]"/>
                          <h4 className='font-josefin text-[#0A2F5A] text-[20px] mt-3'>Name</h4>
                          <h6 className='font-work text-[15px] mt-2 text-[#F2C94C]'>Data Scientist</h6></div>
                      <div className="flex justify-center items-center gap-1 mt-4">
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                      </div>
                      <p className='font-work text-[#666666] text-[15px] mt-1'>"Refreshing and Calmful"</p>

</div>
                  <div className='bg-[#ffffff] flex flex-col items-center w-[300px] h-[350px] ml-5 p-2 pt-10 rounded-2xl shadow-2xl'>
                      <div className="bg-[#0A2F5A] w-[50px] h-[50px] flex justify-center items-center rounded-full">
                          <i className="fa-solid fa-quote-left text-[22px] text-[#F2C94C]"></i>
                      </div>
                      <div className='text-center mt-3'><img src="./src/assets/images/cyber.webp" className=" w-[100px] h-[100px] rounded-full border-[5px] border-[#F2C94C]"/>
                          <h4 className='font-josefin text-[#0A2F5A] text-[20px] mt-3'>Name</h4>
                          <h6 className='font-work text-[15px] text-[#F2C94C] mt-2'>Data Scientist</h6></div>
                      <div className="flex justify-center items-center gap-1 mt-4">
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                      </div>
                      <p className='font-work text-[#666666] text-[15px] mt-1'>"Refreshing and Calmful"</p>

                  </div>
                  <div className='bg-[#ffffff] flex flex-col items-center w-[300px] h-[350px] ml-5 p-2 pt-10 rounded-2xl shadow-2xl'>
                      <div className="bg-[#F2C94C] w-[50px] h-[50px] flex justify-center items-center rounded-full">
                          <i className="fa-solid fa-quote-left fa-flip-horizontal text-[22px] text-[#0A2F5A]"></i>
                      </div>
                      <div className='text-center mt-3'><img src="./src/assets/images/cyber.webp" className=" w-[100px] h-[100px] rounded-full border-[5px] border-[#F2C94C]"/>
                          <h4 className='font-josefin text-[#0A2F5A] text-[20px] mt-3'>Name</h4>
                          <h6 className='font-work text-[15px] mt-2 text-[#F2C94C]'>Data Scientist</h6></div>
                      <div className="flex justify-center items-center gap-1 mt-4">
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                          <i class="fa-regular fa-star text-[#F2C94C]"></i>
                      </div>
                      <p className='font-work text-[#666666] text-[15px] mt-1'>"Refreshing and Calmful"</p>

                  </div>
              </div>
          </div>   
      <Footer/>
          <div className='fixed right-[35px] bottom-8'>
              <IconHandle />
          </div>
    </>
  )
}

export default UserTestimonal
