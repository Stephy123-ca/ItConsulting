import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import IconHandle from '../components/SideBar/IconHandle'

const UserPortfolio = () => {
  return (
    <>
          <Header />
          <Navbar />
      <div className='relative w-full min-h-[300px] bg-[url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop")]
           top-0 bg-cover bg-center text-center'>
              <div className='absolute inset-0 bg-blue-950/80'>
          <h1 className='font-josefin text-[#ffffff] md:text-[62px] text-[40px] pt-[60px] font-[600]'>Our Portfolio</h1>
                  <p className='text-[#ffffffE6] md:text-[19px] text-[14px] px-10'>Explore our innovative software solutions, digital products, automation systems, and futuristic business platforms developed for modern organization</p>
              </div>
          </div>
          <div className='p-8 mt-5 mb-5'>
              <h5 className='font-work md:ml-[100px] text-[#0A2F5A] '><span className='bg-[#ffdf00] 
                 font-semibold text-[16px] rounded-3xl py-2 px-5 '>FEATURED PROJECTS</span></h5>
              <h2 className="font-josefin md:ml-[50px]  mt-4 text-[#0A2F5A] font-bold md:text-[30.1px] text-[24px]">OUR LATEST WORKS</h2>
          </div>
          <Footer />
      <div className='fixed right-[35px] bottom-8'>
        <IconHandle />
      </div>
    </>
  )
}

export default UserPortfolio
