import React, { useEffect } from 'react'
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Skills2 from "../Skills2/Skills2";
import Updates from "../Updates/Updates";
import Feedback from "../Feedback/Feedback";
import Navbar from '../Navbar/Navbar';
import PageLoad from '../../pages/PageLoad';
import { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import AdminLogin from '../../pages/AdminLogin';
import IconHandle from '../SideBar/IconHandle';

const UserHome = () => {
  const [showModal, setShowModal] = useState(false)



  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
    
  },[]);

  return (
    <>

    
      <div className=""><Header /></div>
      
                  <Navbar />
                  <Hero />
                  <Skills />
                  <Skills2 />
                  <Experience />
                  <Updates />
                  <Feedback />
    
                  {/* <Contact /> */}
                  <Footer />
      <div className='fixed md:right-[35px] right-[150px] bottom-8'>
                    <IconHandle/>
                  </div>
      
        {showModal && (
          <PageLoad onClose={() => setShowModal(false)} />
        )}
   
    </>
          
  )
}

export default UserHome
