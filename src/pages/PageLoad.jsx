import React from 'react'

const PageLoad = ({ onClose }) => {
  return (
    <>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

              <div className="relative md:w-[350px] w-[250px] right-16 md:right-0 min-h-[500px] rounded-lg p-6 shadow-lg">
                  <div className="absolute inset-0 bg-[#0A2F5A]/60 rounded text-center">
    
                      <button
                          onClick={onClose}
                          className="absolute right-3 top-2 text-xl text-[#F2C94C] font-[600]"
                      >
                          ×
                      </button>
    
  <div className='pt-10 px-5'>
                          <p className="uppercase text-[#0A2F5A] md:text-[14px] text-[12px] font-bold"><span className="font-josefin bg-[#F2C94C]  p-2 rounded-full">IT Consulting & HR Services</span></p>
                          <h4 className="font-josefin font-bold text-[#F2C94C] md:text-[25px] text-[16px] mt-3">
                              Grow Your Business With Evlogia
                          </h4>
        
                          <p className="font-work text-[14px] text-[#ffffff]">
                              Website Development, Digital Marketing, Software Solutions, & IT Services
                          </p>
                          <p className="uppercase text-[#0A2F5A] font-bold mt-4"><span className="font-josefin bg-[#F2C94C] md:text-[16px] text-[14px] p-2 rounded-full">WELCOME TO EVLOGIA</span></p>
                          <h4 className="font-josefin font-bold text-[#F2C94C] md:text-[25px] text-[16px] mt-3">
                              Transforming Ideas Into Digital Success
                          </h4>
    
                          <p className="font-work text-[14px] text-[#ffffff]">
                              We help businesses grow through innovative IT Consulting, Website Development , Software Solutions, Digital Marketing, and Technology Services.                      </p>
        
                          <button
                              onClick={onClose}
                                        className='w-full mt-5 font-bold p-2 rounded bg-[#F2C94C] text-[#0A2f5A] font-sans text-[16px]'>
                             Explore Website
                          </button>
  </div>
</div>

              </div>
          </div>

    </>
  )
}

export default PageLoad
