import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import bgImage from "../assets/images/bg.jpg";
import IconHandle from '../components/SideBar/IconHandle';

const UserFeedBack = () => {
  return (
    <>
          <Header />
          <Navbar />
      <div className='w-full min-h-[300px] bg-no-repeat bg-cover top-0 text-center' style={{ backgroundImage:`url(${bgImage})`}}>     
                  <h1 className='font-josefin text-[#051311] md:text-[48.11px] text-[40px] pt-[60px] font-[600]'>FeedBack</h1>
                  <p className='font-work text-[#051311] md:text-[20px] text-[14px] px-10'>Your feedback help us improve our services and deliver better solutions.</p>
              
          </div>
          <div className='container mt-5 p-5'>
          <div className="flex justify-center items-center pt-5">
          <div className='w-[600px] flex-wrap'>
            <div className='p-10 bg-[#0A2F5A] text-center shadow-2xl w-full h-full rounded-3xl'>
              <h2 className='font-josefin text-[#D4AF37] text-[42px] font-semibold'>Share your Experience</h2>
              <p className='font-work text-[#ffffffe6] text-[16px] leading-6 mt-1'>We value your opinion, Let us know your thoughts, suggestions, or experience with our services.</p>
              <form className='pt-5 mt-3'>
            <div className='md:flex md:justify-between md:items-center grid grid-cols-1'>
                  <input type="text" placeholder='Your Name' className='p-2 text-slate-300 bg-[#0A2F5A] w-full rounded' />
                  <input type="text" placeholder='Your Email' className='p-2 bg-[#0A2F5A] 
                  text-slate-300 w-full md:ml-[10px] mt-5 rounded' />
            </div>
                <input type="text" placeholder='Subject' className='p-2 bg-[#0A2F5A] 
                text-slate-300 w-full mt-4 rounded' />
                <textarea cols={3} rows={5} type="text" placeholder="Write Your Feeback" className="w-full
                  text-slate-300 bg-[#0A2F5A] p-2  mt-4 rounded" />
              <div className='relative flex-wrap'><button className='mt-5 type="submit" text-[16px] font-semibold bg-[#D4AF37]  text-[#0A2F5A] px-3 py-2 rounded-full'>Submit Feedback</button></div>
              </form>
            </div>
          </div>    
          </div>
        <div className='text-center mt-[50px] flex-auto'>
          <h5 className="font-work text-[#0A2F5A] text-[14px]"><span className='bg-[#ffd700] p-2 '>CLIENT EXPERIENCES</span></h5>
          <h3 className="font-josefin text-[#0A2F5A] text-[29.37px] mt-5 font-semibold">What People Say About Evlogia</h3>
          <p className="font-work text-[#6c757D] text-[16px]">Trusted by professionals, candidates and businesses</p>
        </div>
<div className='p-2 text-center w-full shadow-2xl mt-[50px] bg-[#ffffffe7] flex-auto'> 
<p className="font-work text-[#65635e] text-[16px] mb-[10px]">no feedback available yet.</p>
</div>
          </div>
          <Footer />
      <div className='fixed right-[35px] bottom-8'>
        <IconHandle />
      </div>
    </>
  )
}

export default UserFeedBack
