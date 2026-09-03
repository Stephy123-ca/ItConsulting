import React from "react";

const Experience = () => {
  return (
    <div className="dark:bg-black text-white dark:text-white py-14">
      <div className="container">
    
          {/* first col */}
          {/* <div className="bg-dark/50 p-4 grid place-items-center">
            <div className="text-center space-y-3">
              <h1 className="text-5xl font-bold">12</h1>
              <p className="text-xl font-semibold">Years of Experience</p>
            </div>
          </div> */}

          {/* second col */}
          {/* <div className="grid grid-rows-2 gap-4">
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">60+</h1>
              <p>Happy Client</p>
            </div>
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">100+</h1>
              <p>Projects Completed</p>
            </div>
          </div> */}

          {/* Third col */}
          {/* <div className="grid grid-rows-2 gap-4">
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">60+</h1>
              <p>Happy Client</p>
            </div>
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">100+</h1>
              <p>Projects Completed</p>
            </div>
          </div> 
       </div> */}

  <div className="container shadow-2xl rounded-2xl text-center mb-12 p-4 bg-[#ffffff] border-[2px] border-[#F2C94C]">
          <h1 className="font-josefin text-[#051311] text-[30.82px] font-bold text-center mb-4 ">Your Trusted Technology & Recruitment Partner</h1>
          <p className="font-work text-[#0A2F5A] text-[20px] text-center"> Empowering businesses,institutions and professionals through technology solutions,consulting services, recruitment support, and career opportunities</p>
          <div className="flex justify-center items-center gap-3 mt-5">
            <button className="font-work text-[#0F4C8A] text-[20px] bg-[#C89B3C] font-medium rounded-full py-2 px-6 ">
             Contact Us
            </button>
            <button className="font-work text-[20px] bg-[#0F4C8A] font-medium rounded-full text-[#ffffff] py-2 px-6 ">
              View Services
            </button>
          </div>
  </div>
      </div>
    </div>
   
  );
};

export default Experience;
