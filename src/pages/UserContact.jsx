import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import IconHandle from '../components/SideBar/IconHandle'

const UserContact = () => {
  return (
    <>
          <Header />
          <Navbar />
 
          <div className='relative w-full min-h-[300px] bg-[url("https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop")]
           top-0 bg-cover bg-center text-center'>
              <div className='absolute inset-0 bg-blue-950/70'>
                  <h1 className='font-josefin text-[#ffffff] md:text-[62px] text-[40px] pt-[60px] font-[600px]'>Contact Evlogia</h1>
                  <p className='text-[#ffffffE6] md:text-[19px] text-[14px] px-10'>Let's build innovative digital solutions together.</p>
              </div>
          </div>
          <div className='container py-12'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                  <div className='bg-[#ffffff] flex flex-col items-center w-[300px] h-[200px]  pt-10 rounded-2xl shadow-2xl'>
                      <div className="bg-[#FFD400] w-[50px] h-[50px] flex justify-center items-center rounded-full">
                          <i className= "fa-solid fa-phone text-[26px] text-[#0A2F5A]"></i>
                      </div>
                      <div className='text-center'>
                          <h4 className='font-josefin text-[20px] text-[#051311] mt-3'>Call Us</h4>
                        
                          </div>
                    
                      <p className='font-work text-[16px] text-[#0A2F5A]'>+91-974-777-6355</p>

                  </div>
                  <div className='bg-[#ffffff] flex flex-col items-center w-[300px] h-[200px] pt-10 rounded-2xl shadow-2xl'>
                      <div className="bg-[#FFD400] w-[50px] h-[50px] flex justify-center items-center rounded-full">
                          <i className="fa-solid fa-envelope-open text-[26px] text-[#0A2F5A]"></i>
                      </div>
                      <div className='text-center'>
                          <h4 className='font-josefin text-[20px] text-[#051311] mt-3'>Mail us</h4>
                         </div>
                
                      <p className='font-work text-[16px] text-[#0A2F5A]'>info@evlogia.com</p>

                  </div>
                  <div className='bg-[#ffffff] flex flex-col items-center w-[300px] h-[200px] pt-10 rounded-2xl shadow-2xl'>
                      <div className="bg-[#FFD400] w-[50px] h-[50px] flex justify-center items-center rounded-full">
                          <i className="fa-solid fa-location-dot text-[26px] text-[#0A2F5A]"></i>
                      </div>
                      <div className='text-center'>
                          <h4 className='font-josefin text-[20px] text-[#051311] mt-3'>Our Location</h4>
                        </div>
               
                      <p className='font-work text-[16px] text-[#0A2F5A]'>Kochi, Kerala, India</p>

                  </div>
              </div>
          </div>  
<div className='container py-12'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
    <div className='w-full h-[400px]'>
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9860827553953!2d76.34238177361456!3d10.018006690088287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8a3f65eefd%3A0xffbc873f9fc9bf13!2sKakkanad%20Junction%2C%20Thrikkakara%2C%20Kakkanad%2C%20Kochi%2C%20Kerala%20682030!5e0!3m2!1sen!2sin!4v1786694745096!5m2!1sen!2sin" 
                          style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" className="w-full h-full rounded-xl"></iframe>
    </div>
    <div className='w-full '>
        <div className='p-10 bg-[#ffffff] shadow-2xl w-full h-full'>
                          <h2 className='font-josefin text-[#0A2F5A] text-[26.2467px] font-semibold'>Send Us A Message</h2>
                          <form className='pt-5'>
                              <div className='flex justify-between items-center '>
                                  <input type="text" placeholder='Your Name' className='p-2  text-slate-700 w-full rounded' />
                                  <input type="text" placeholder='Your Email' className='p-2  text-slate-700 w-full ml-[10px] rounded' />
                              </div>
                              <input type="text" placeholder='Subject' className='p-2  
                text-slate-700 w-full mt-4 rounded' />
                              <textarea type="text" cols={3} rows={3} placeholder="Write Your Feedback" className="w-full
                  text-slate-700 p-2 mt-4 rounded" />
                              <button className='font-work mt-5 text-[16px] font-semibold bg-[#ffd700]  text-[#0A2F5A] px-3 py-2 rounded-full'>Send Message</button>
                          </form>
        </div>
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

export default UserContact
