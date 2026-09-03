import React from "react";
import { useEffect, useState } from "react";
import PersonImg from "../../assets/images/bg3.jpg";
import image2 from "../../assets/images/bg4.jpg";

const slides = [PersonImg, image2];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => { 
    setCurrentSlide((prev) => (prev + 1) % slides.length); 
  }; 
  const prevSlide = () => { 
    setCurrentSlide((prev) => prev === 0 ? slides.length - 1 : prev - 1);
   };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className="dark:bg-black dark:text-white">
      {/* <div className="container sm:py-20 grid grid-cols-1 sm:grid-cols-2 place-items-center gap-5">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center "> */}
          {/* image section */}
        
          {/* description section */}
          {/* <div className="space-y-3">
            <p className="text-primary">Hello I'm Angela</p>
            <h1 className="text-5xl font-semibold">Visual Designer</h1>
            <p >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              commodi minima ratione et possimus neque culpa nesciunt, error,
              illum quam officiis, omnis ipsam molestias alias distinctio soluta
              nam deleniti nemo id.
            </p>
            <button className="uppercase bg-primary text-white py-2 px-6 hover:bg-primary/80 duration-300">
              Hire me
            </button>
          </div>
          <div className="mt-[20px] mr-[-30px]">
          <div className="">       
              <img src={PersonImg} alt="Person" />
            </div>
          </div>

      </div> */} 
      <div className="w-full ">
       {/* Carousel */} 
      {/* <div className="relative w-full max-w-5xl mx-auto">  */}
        <div className="relative w-full overflow-hidden ">
      {/* Image */} 
      {/* <div className="relative h-64 md:h-96 overflow-hidden rounded-lg"> 
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="absolute w-full h-full object-cover" />  */}
         
  
            
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center "> */}
                {/* image section */}

            {/* description section */}
          {currentSlide === 0 ?(<div className="container sm:py-20 grid grid-cols-1 md:grid-cols-2 place-items-center gap-5"><div className="space-y-3">
            <p className="font-work text-[#0A2F5A] text-[14px] font-semibold"><span className="bg-[#F2C94C] p-1 rounded">IT Consultation</span></p>
            <h1 className="font-josefin text-[#051311] text-3xl sm:text-4xl md:text-[46.604px] leading-tight md:leading-[3.25rem] font-bold mt-2">DIGITAL SOLUTION THAT <br/>SCALE</h1>
            <p className="font-work text-[#0A2F5A] text-base sm:text-lg md:text-[20px]">
                From software and website consultation to mobile apps,testing,logo design and business idea validation we help you build with confidence
              </p>
          <div className="flex justify-start items-center gap-3">
              <button className="font-work bg-[#C89B3C] font-medium text-[#000000] text-[16px] py-2 px-6  duration-300">
                  Our Services
                </button>
              <button className="font-work bg-[#0F4C8A] font-medium text-[16px] text-[#ffffff] py-2 px-6  duration-300">
               Free Consultation
              </button>
          </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <img
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full max-w-md md:max-w-lg h-auto object-contain"
              />
            </div>
          </div>) : (<div className="container sm:py-20 grid grid-cols-1 md:grid-cols-2 place-items-center gap-5"><div className="space-y-3">
              <p className="font-work text-[#0A2F5A] text-[14px] font-semibold"><span className="bg-[#F2C94C] p-1 rounded">HR Services</span></p>
              <h1 className="font-josefin text-[#051311] text-3xl sm:text-4xl md:text-[46.604px] leading-tight md:leading-[3.25rem] font-bold mt-2">COLLEGE PLACEMENT DRIVES</h1>
              <p className="font-work text-[#0A2F5A] text-base sm:text-lg md:text-[20px]">
              Evlogia partners with colleges and institutes to connect students with companies through structured placement programs and recruitment support.
              </p>
              <div className="flex justify-start items-center gap-3">
                <button className="font-work bg-[#C89B3C] font-medium text-[#000000] text-[16px] py-2 px-6  duration-300">
                  Enquire Now
                </button>
                <button className="font-work bg-[#0F4C8A] font-medium text-[16px] text-[#ffffff] py-2 px-6  duration-300">
               View Openings
                </button>
              </div>
              </div>
              <div className="w-full flex justify-center items-center mt-5">
                <img
                  src={slides[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full max-w-md md:max-w-lg h-auto object-contain"
                />
              </div>

</div>

            )} 
       {/* Previous Button */} 
          <button onClick={prevSlide} className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-[#0F4C8A]/80 hover:bg-white text-[#F2C94C]  rounded-full w-10 h-10 flex items-center justify-center shadow-lg" > ❮ </button> 
      {/* Next Button */} 
          <button onClick={nextSlide} className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-[#0F4C8A]/80 hover:bg-white text-[#F2C94C]  rounded-full w-10 h-10 flex items-center justify-center shadow-lg"> ❯ </button> 
      {/* Indicators */} 
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" > {slides.map((_, index) => (<button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-400"}`} ></button>))} 
      </div> 
      </div>
       </div>
    </div>
  );
};

export default Hero;
