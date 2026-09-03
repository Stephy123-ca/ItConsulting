import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import IconHandle from '../components/SideBar/IconHandle'

const UserAbout = () => {
  return (
    <>
    <Header/>
      <Navbar/>
<div className='container py-7'>

<div className=' flex-auto text-center p-2 mt-5'>
    <h1 className="font-josefin text-[#051311] md:text-[48px] text-[40px]">Together For A Better Tomorrow</h1>
          <p className='font-work text-[#0A2F5A] md:text-[20px] text-[14px]'>We create opportunities and empower communities through technology, innovation, and digital transformation</p>  
</div>

<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 space-y-3 p-2'>
    <div className='mt-5 text-center p-4'>
                      <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" className='rounded' />
    </div>
                  <div className='mt-5 p-8 shadow-2xl'>
            <h6 className='font-josefin text-[#0A2F5A] text-[32px] font-bold'>ABOUT EVLOGIA</h6>
            <p className='font-work text-[#555555] text-[16px]'>Evlogia is a modern recruitment and consulting platform dedicated to connecting talented professionals with rewarding career opportunities while helping organizations find and hire the right talent. We act as a bridge between job seekers and employers, creating meaningful connections that contribute to individual success and business growth, With a focus on professionalism, transparency and innovation. Evlogia simplifies the recruitment process and provides a seamless experience for both candidates and organizations.</p>
    </div>
                  <div className='mt-5 p-5 shadow-2xl'>
            <h1 className='font-josefin text-[#0A2F5A] text-[32px] font-bold'>OUR VISION</h1>
                      <p className='font-work text-[#555555] text-[16px] mt-1'>Our vision is to bridge the gap between innovation and opportunity by creating impactful digital ecosystem</p>
                   <div className='mt-3'>
                          <ul className="list-disc pl-6">
                            <li className='font-work text-[#444444] text-[16px]'>Become a top IT enabler for businesses</li>
                            <li className='font-work text-[#444444] text-[16px]'>Upskill youth with practical real-world training</li>
                            <li className='font-work text-[#444444] text-[16px]'>Deliver scalable and innovative digital solutions</li>
                          </ul>
                   </div>
                  </div>
                  <div className='mt-5 text-center p-4'>
                      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" className='rounded' />
                  </div>
                  <div className='mt-5 text-center p-4'>
                      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" className='rounded' />
                  </div>
                  <div className='mt-5 p-5 shadow-2xl'>
                      <h1 className='font-josefin text-[#0A2F5A] text-[32px] font-bold'>OUR MISSION</h1>
                      <p className='font-work text-[#555555] text-[16px] mt-2'>Our mission is to improve business efficiency through high quality software solutions at affordable prices</p>
                      <p className='font-work text-[#555555] text-[16px] mt-5'>We focus on customer satisfaction innovation, and long-term relationships to deliver impactful results to businesses, institutions and communities</p>
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

export default UserAbout
