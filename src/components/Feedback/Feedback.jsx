import React from 'react'
import image4 from "../../assets/images/testing.webp";

const Feedback = () => {
  return (
    <>
    <div className="dark:bg-black dark:text-white mt-[15px]">
              <div className='container text-center'><button className="font-work text-[#000000] text-[20px] text-center font-medium rounded-full bg-[#C89B3C] py-2 px-6 ">View All Insight</button></div>
       
                
        <div className="container grid grid-cols-1  lg:flex lg:justify-evenly lg:items-center gap-8 mt-[80px] ">
                      <div className="w-[100%] lg:w-[35%] text-center">
                      <h1 className="font-josefin text-[34.375px] font-bold text-center mb-2 text-[#051311]">What People Say</h1>
                      <p className="font-work text-[20px] text-[#0F4C8A]">Feedback from students, partners, and clients who worked with Evlogia.</p>
            </div>
                      <div className="w-[100%] ml-[40px] ">
                          <div className="grid grid-cols-1 md:flex md:justify-center md:items-center gap-3">
                          <div className="w-[65%]">
                        <img src={image4} className="w-[100%]" alt="Feedback 1" />
                    </div>
                    <div className="w-[100%] md:w-[65%]">
                        <div className="flex justify-start items-center gap-1">
                            <i class="fa-regular fa-star text-[#ffdf00]"></i>
                            <i class="fa-regular fa-star text-[#ffdf00]"></i>
                            <i class="fa-regular fa-star text-[#ffdf00]"></i>
                                      <i class="fa-regular fa-star text-[#ffdf00]"></i>
                                      <i class="fa-regular fa-star text-[#ffdf00]"></i>
                        </div>
                              <p className='font-work text-[20px] text-[#0A2F5A]'>it have been a great opportunity for learn and grow </p>
                              <h5 className="font-josefin text-[20px] text-[#051311]">Sojin</h5>
                              <p className="font-work text-[14px] text-[#0F4C8A]">Data Scientist</p>
                    </div>
             </div>
            </div>
        </div>
                  <div className=" text-center mt-[150px] p-4 bg-[#F2C94C]">
                  <h1 className="font-josefin text-[27.85px] text-[#0F4C8A] font-semibold">Stay Updated With Evlogia</h1>
                      <div className="relative"><input className="p-2 w-[500px] h-[50px] mt-5 text-[#ffffff]" type="email" placeholder="Enter Your Email" /> <i className="fa-solid fa-location-arrow absolute mt-[37px] ml-[-35px] text-[24.28px] text-[#F2C94C]"></i></div>
                  <p className="font-work text-[16px] text-[#0F4C8A] mt-1">Placement updates, IT insights-no spams</p>
                  </div>
        </div>

    </>
  )
}

export default Feedback
