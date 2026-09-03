import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import IconHandle from '../components/SideBar/IconHandle'

const UserBlogs = () => {
  return (
    <>
          <Header />
          <Navbar />
<div className="bg-slate-100">
        <div className='relative w-full min-h-[300px] bg-[url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop")]
               top-0 bg-cover bg-center text-center'>
                  <div className='absolute inset-0 bg-blue-950/70'>
                      <h1 className='font-josefin text-[#ffffff] md:text-[62px] text-[40px] pt-[60px] font-[600px]'>Our Blog Ideas, Innovations & News From Evlogia</h1>
                 
                  </div>
              </div>
<div className='container py-12'>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:flex justify-around items-center'>
            <div className=' bg-white lg:w-[100%] rounded-2xl m-5 py-2'>
            <div className='relative'><img src="./src/assets/images/cyber.webp" className='w-full rounded-t-2xl'/>
                <div className='absolute top-4 left-4'><p className='text-[#0A2F5A] font-semibold text-[14px]'><span className='bg-[#ffdf00] px-3 py-1 rounded-full'>Evlogia</span></p></div>
            </div>
           
                          <p className='font-work p-3 text-[#0A2F5A] text-[14px] font-semibold'><i class="fa-solid fa-calendar-days text-xl"></i> 07 Jun 2026<br/>
                          <span className='font-josefin text-[#0A2F5A] text-[23.2px] font-bold ms-2'>Software Testing</span></p>
              <div className='text-ellipsis px-5'>
                <p className='font-work text-[14px] text-[#666666]'>Software testing is the process of verifying and validating that a software application meets its  specified requirements, functions as intended and is free from defects
                              
                            </p>
                <div className='bg-[#0A2F5A] rounded-full mt-8 flex items-center justify-start px-4 py-2'>
                  <button className='font-work text-[#ffdf00] text-[16px]' type="submit">Read More</button></div>
                 </div>
        </div>
            <div className=' bg-white lg:w-[100%]  rounded-2xl m-5 py-2'>
              <div className='relative'><img src="./src/assets/images/cyber.webp" className='w-full rounded-t-2xl'/>
              <div className='absolute top-4 left-4'><p className='text-[#0A2F5A] font-semibold text-[14px]'><span className='bg-[#ffdf00] px-3 py-1 rounded-full'>Evlogia</span></p></div>
            </div>
              <p className='font-work p-3 text-[#0A2F5A] text-[14px] font-semibold'><i class="fa-solid fa-calendar-days text-xl"></i> 07 Jun 2026<br/>
                          <span className='font-josefin text-[#0A2F5A] text-[23.2px] font-bold ms-2'>Cyber Security</span></p>
              <div className='text-ellipsis px-5'>
                <p className='font-work text-[14px] text-[#666666]'>Cyber security is the practice of protecting systems, networks and data from digital attacks where promoting responsible and sustainable use of technology, In today's connected world.
                            
                          </p>
                <div className='bg-[#0A2F5A] rounded-full mt-2 flex items-center justify-start px-4 py-2'>
                  <button className='font-work text-[#ffdf00] text-[16px]'>Read More</button></div>
              </div>
        </div>
            <div className=' bg-white lg:w-[100%]  rounded-2xl m-5 py-2'>
              <div className='relative'><img src="./src/assets/images/cyber.webp" className='w-full rounded-t-2xl' />
                <div className='absolute top-4 left-4'><p className='text-[#0A2F5A] font-semibold text-[14px]'><span className='bg-[#ffdf00] px-3 py-1 rounded-full'>Evlogia</span></p></div>
              </div>
              <p className='font-work p-3 text-[#0A2F5A] text-[14px] font-semibold'><i class="fa-solid fa-calendar-days text-xl"></i> 27 May 2026<br />
                <span className='font-josefin text-[#0A2F5A] text-[23.2px] font-bold ms-2'>Data Science</span></p>
              <div className=' text-ellipsis px-5'>
                <p className='font-work text-[14px] text-[#666666]'>
In today's digital world, huge amount of data are generated every second through social media, online shopping, banking, healthcare systems and business operations, companies and... 
              </p>
        
              <div className='bg-[#0A2F5A] rounded-full mt-7 flex items-center justify-start px-4 py-2'>
                <button className='font-work text-[#ffdf00] text-[16px]'>Read More</button></div>
            </div>
              
              </div>
        
                  </div>
</div>
</div>
          <Footer />
      <div className='fixed right-[35px] bottom-8'>
        <IconHandle />
      </div>
    </>
  )
}

export default UserBlogs
