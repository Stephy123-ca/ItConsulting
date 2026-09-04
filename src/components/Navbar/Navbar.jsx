import React, { useEffect, useState } from "react";
import DarkMode from "./DarkMode";

export const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/user-about",
  },
  {
    id: 3,
    name: "Services",
    link: "/user-service",
  },
  {
    id: 4,
    name: "Testimonal",
    link: "/user-testimonal",
  },
  {
    id: 5,
    name: "Feedbacks",
    link: "/user-feedback",
  },
    {
    id: 6,
    name: "Contact",
    link: "/user-contact",
  },
  {
    id: 7,
    name: "Career",
    link: "/user-career",
  },
  {
    id: 8,
    name: "Portfolio",
    link: "/user-portfolio",
  },
  {
    id: 9,
    name: "Blog",
    link: "/user-blog",
  },
  {
    id: 10,
    name:(<i className="fa-solid fa-user-shield"></i>),
    link: "/user-login",
  },
]
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropDown,setDropDown]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY>50){
setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }  
     window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handledDropdown=()=>{
if(dropDown){
  setDropDown(false)
}else{
  setDropDown(true)
}
  }

  return(

<>

  
        <div
          className={`
            hidden md:block
            sticky top-0 
            shadow-md
            bg-[#F2C94C]
            transition-all duration-200
            ${isScrolled ? "w-full z-30 px-5":"container"
            }
          `}>
          <div>
            <div className="flex justify-between items-center">
            
      
                <div className="z-30">
                  <ul className="flex items-center gap-6">
                    {NavLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          className="inline-block text-base text-[12px] font-semibold py-3 text-[#0F4C8A] transition-all duration-400"
                          href={link}
                        >
                        {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
           <div className="flex justify-center items-center gap-2">
              <div className="hidden lg:block bg-[#0A2f5A] border-[1px] border-[#000000] p-1 "><a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGZOAI1O1j3ngAAAaBcZiRo1Kam3ofBLTIv9k8pWxjYnibLtfHJF14kuHKQRCp5m7d8tI2BsPZ0A6kuheZRDCMc839z_K8UFUyS28svpMxu-ZOc4LHXQbgbFdg6mlEx0eWvlNY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fevlogia"><i className="fa-brands fa-linkedin-in text-white"></i></a></div>
                 <div className="hidden lg:block bg-[#0A2f5A] border-[1px] border-[#000000] p-1"><a href="https://www.facebook.com/evlogia"><i className="fa-brands fa-facebook-f text-white"></i></a></div>
               <div className="hidden lg:block bg-[#0A2f5A] border-[1px] border-[#000000] p-1"><a href="https://www.instagram.com/evlogia"><i className="fa-brands fa-instagram text-white"></i></a></div>
           </div>
              </div>
        </div>
  
          </div>
        <div
          className="
            md:hidden
            sticky top-0 
            z-50
            w-full
            p-3
            md:h-[50px] h-[40px]
            shadow-md
            bg-[#F2C94C]
          "
        >
          <div className="flex
             justify-between 
            items-center">
            <div className="">
              <h1 className="font-josefin text-[#051311] text-[18px] md:text-[22.956px]">
        
                Menu
              </h1>
     </div>
            <div className="relative">
              <button type="submit" onClick={handledDropdown}><i className=" fa-solid fa-bars text-[#051311] text-[18px] md:text-[22.956px]"></i> </button></div>  
             {dropDown&&(
                <div className="absolute w-full  right-0 md:top-12 top-10 bg-[#F2C94C] z-50">
                  <ul className=""><hr/>
                <li className="font-josefin text-[18px] md:text-[22.956px] pl-8 py-2"><a href="/">Home</a></li><hr />
                    <li className="font-josefin text-[18px] md:text-[22.956px] pl-8 py-2"><a href="/user-about">About</a></li><hr/>
                    <li className="font-josefin text-[18px] md:text-[22.956px] pl-8 py-2"><a href="/user-service">Service</a></li><hr/>
                    <li className="font-josefin text-[18px] md:text-[22.956px] pl-8 py-2"><a href="/user-testimonal">Testimonal</a></li><hr/>
                    <li className="font-josefin text-[18px] md:text-[22.956px] pl-8 py-2"><a href="/user-feedback">Feedback</a></li><hr/>
                      <li className="font-josefin text-[18px] md:text-[22.956px] pl-8 py-2"><a href="/user-contact">Contact</a></li><hr/>
                    <li className="font-josefin text-[18px] md:text-[22.956px] pl-8 py-2"><a href="/user-career">Career</a></li><hr/>
                  <li className="font-josefin text-[18px] md:text-[22.956px] pl-8 py-2"><a href="/user-portfolio">PortFolio</a></li><hr />
                  <li className="font-josefin text-[18px] md:text-[22.956px] pl-8 py-2"><a href="/user-blog">Blogs</a></li><hr />
                </ul>
              </div>
             )} 
     
          </div>
        </div>

    

</>

  );
};

export default Navbar;
