import React from "react";
import { NavLinks } from "../Navbar/Navbar";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="dark:bg-black dark:text-white text-white">
      {/* <nav className="container">
        <ul className="flex items-center justify-center gap-6">
          {NavLinks.map(({ id, name, link }) => (
            <li key={id}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </nav> */}

      {/* Footer icons */}
      <section className="bg-[#0A2f5A]">
        <div className="p-6 lg:flex grid grid-cols-1 gap-10">
          <div className="ml-[100px]">
            <h1 className="font-josefin text-[21.57px] text-[#F2C94C] mt-5 font-semibold">Our Office</h1>
            <p className="font-work text-[16px] text-[#ffffff] mt-3"><i className="fa-solid fa-location-dot"></i> HS5,5<sup>th</sup> floor, Heavenly Plaza,<br/> CMI Line Road, Vazhakkala, kakkanad,<br/>Ernakulam, Kerala</p>
            <p className="font-work text-[16px] text-[#ffffff] mt-2">
              <i className="fa-solid fa-phone"></i> +91-974-777-6355, +91-80896-<br/>27761
            </p>
            <p className="font-work text-[16px] text-[#ffffff] mt-2"><i className="fa-solid fa-envelope-open"></i> info@evlogia.com</p>
            <div className="flex justify-start items-center gap-2 mt-3">
              <div className="bg-[#c6a238] w-[25px] h-[25px] text-center"><i className="fa-brands text-xs fa-x-twitter text-[#0A2f5A]"></i></div>
              <div className="bg-[#c6a238] w-[25px] h-[25px] text-center"><i className="fa-brands fa-facebook-f text-xs text-[#0A2f5A]"></i></div>
              <div className="bg-[#c6a238] w-[25px] h-[25px] text-center"><i className="fa-brands fa-youtube text-xs text-[#0A2f5A]"></i></div>
              <div className="bg-[#c6a238] w-[25px] h-[25px] text-center"><i className="fa-brands fa-linkedin-in text-xs text-[#0A2f5A]"></i></div>
            </div>
          </div>
          <div className="lg:flex lg:justify-start justify-center">
            <div className="lg:ml-[40px] ml-[100px]">
              <h1 className="font-josefin text-[21.57px] text-[#F2C94C] mt-5 font-semibold">Quick Links</h1>
              <p className="mt-3">
                <div className="flex items-center">
                  <i className="fa-solid fa-greater-than text-[8px] 
                  "></i><a href="" className="font-work text-[16px] text-[#ffffff] ms-1">About Us</a>
                </div>
                <div className="flex items-center mt-1">
                  <i className="fa-solid fa-greater-than text-[8px] 
                  "></i><a href="" className="font-work text-[16px] text-[#ffffff] ms-1">Contact Us</a>
                </div>
                <div className="flex items-center mt-1">
                  <i className="fa-solid fa-greater-than text-[8px] 
                  "></i><a href="" className="font-work text-[16px] text-[#ffffff] ms-1">Our Services</a>
                </div>
                <div className="flex items-center mt-1">
                  <i className="fa-solid fa-greater-than text-[8px] 
                  "></i><a href="" className="font-work text-[16px] text-[#ffffff] ms-1">Terms & Conditions</a>
                </div>
                <div className="flex items-center mt-1">
                  <i className="fa-solid fa-greater-than text-[8px] 
                  "></i><a href="" className="font-work text-[16px] text-[#ffffff] ms-1">Support</a>
                </div>
              </p>
            </div>
          </div>
          <div className="lg:flex lg:justify-start justify-center gap-6">
              <div className="mt-5 lg:ml-[40px] ml-[100px]">
                <h1 className="font-josefin text-[21.57px] text-[#F2C94C] font-semibold">Business Hours</h1>
                <p className="font-work text-[16px] text-[#ffffff] mt-3 ">Monday-Saturday</p>
                <p className="font-work text-[16px] text-[#ffffff] font-semibold mt-1">09.00 am-05.30 pm</p>
                <p className="font-work text-[16px] text-[#ffffff] mt-1 ">Sunday</p>
                <p className="font-work text-[16px] text-[#ffffff] font-semibold mt-1">Closed</p>
              </div>
         </div>
         
          {/* <div className="hidden sm:block">❤️ by The Coding Journey</div> */}
        </div>
        <hr className="mt-5"/>
        <p className="font-work text-[16px] text-[#ffffff] md:ml-[140px] ml-[30px] mt-7">© Evlogia, All Right Reserved.</p>
        <div className="h-[25px]"></div>
      </section>
    </div>
  );
};

export default Footer;
