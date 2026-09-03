import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
import PageLoad from './PageLoad'
import IconHandle from '../components/SideBar/IconHandle'

const UserServices = () => {

  return (
    <>
      <Header/>
      <Navbar/>
          <div className='relative w-full min-h-[300px] bg-[url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop")]
           top-0 text-center'>
       <div className='absolute inset-0 bg-blue-950/90 flex-wrap'>
          <h1 className='font-josefin text-[#ffffff] md:text-[62px] text-[40px] pt-[60px] font-[600px]'>Our Premium Services</h1>
          <p className='font-work text-[#ffffffE6] md:text-[19px] text-[14px] px-10'>Empowering businesses,institutions, startups and professionals with futuristic digital solutions, HR Services, branding, automation and innovation technologies.</p>
       </div>
      </div>
      <div className='container space-y-3'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 space-y-3 p-2'>
          <div className='mt-5 text-center p-4'>
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" className='rounded' />
          </div>
          <div className='mt-5 p-5 shadow-2xl'>
            <div className="bg-[#0A2F5A] w-[50px] h-[50px] flex justify-center items-center rounded-full">
              <i className="fa-sharp fa-solid fa-laptop-code text-[26px] text-[#FFD400]"></i>
            </div>
            <h6 className='font-josefin text-[#0A2F5A] text-[30px] font-bold  mt-3 p-1'><span className='bg-[#FFD400] p-2'>IT Consultation</span></h6>
            <p className="font-work text-[#555555] text-[16px] mt-1">Modern technology consultation services designed to help businesses improve productivity, innovation and digital transformation</p>
            <div className='mt-3'>
              <ul className="list-disc pl-6">
                <li className='font-work text-[#444444] text-[16px]'>Software Consultation</li>
                <li className='font-work text-[#444444] text-[16px]'>Website Consultation</li>
                <li className='font-work text-[#444444] text-[16px]'>Mobile App Consultation</li>
                <li className='font-work text-[#444444] text-[16px]'>Business Idea Consultation</li>
                <li className='font-work text-[#444444] text-[16px]'>Software Testing</li>
                <li className='font-work text-[#444444] text-[16px]'>Industrial Automation</li>
                <li className='font-work text-[#444444] text-[16px]'>ERP & CRM Solutions</li>
              </ul>
            </div>
          </div>
          <div className='mt-5 p-5 shadow-2xl'>
            <div className="bg-[#0A2F5A] w-[50px] h-[50px] flex justify-center items-center rounded-full">
              <i className="fa-solid fa-globe text-[26px] text-[#FFD400]"></i>
            </div>
            <h1 className='font-josefin text-[#0A2F5A] text-[30px] font-bold mt-3 p-1'><span className='bg-[#FFD400] p-2'>Web & App Development</span></h1>
            <p className="font-work text-[#555555] text-[16px] mt-1">High-performance websites and scalable applications designed with futuristic UI/UX responsive technologies.</p>
            <div className='mt-3'>
              <ul className="list-disc pl-6">
               <li className='font-work text-[#444444] text-[16px]'>Website Development</li>
                <li className='font-work text-[#444444] text-[16px]'>Flutter App Development</li>
                <li className='font-work text-[#444444] text-[16px]'>Responsive UI/UX Design</li>
                <li className='font-work text-[#444444] text-[16px]'>Customized Software Solutions</li>
                <li className='font-work text-[#444444] text-[16px]'>E-Commerce platforms</li>
              </ul>
            </div>
          </div>
          <div className='mt-5 text-center p-4'>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" className='rounded' />
          </div>
          <div className='mt-5 text-center p-4'>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" className='rounded' />
          </div>
          <div className='mt-5 p-5 shadow-2xl'>
            <div className="bg-[#0A2F5A] w-[50px] h-[50px] flex justify-center items-center rounded-full">
              <i className="fa-solid fa-chart-line fa-flip-horizontal text-[26px] text-[#FFD400]"></i>
            </div>
            <h1 className='font-josefin text-[#0A2F5A] text-[30px] font-bold mt-3 p-1'><span className='bg-[#FFD400] p-2'>Digital Marketing</span></h1>
            <p className="font-work text-[#555555] text-[16px] mt-2">Data-driven marketing and branding solutions that help organizations increase visibility nd customer engagement</p>
            <div className='mt-3'>
              <ul className="list-disc pl-6">
                <li className='font-work text-[#444444] text-[16px]'>SEO Optimization</li> 
                <li className='font-work text-[#444444] text-[16px]'>Social Media Marketing</li>
                <li className='font-work text-[#444444] text-[16px]'>Brand Strategy</li>
                <li className='font-work text-[#444444] text-[16px]'>Logo Designing</li>
                <li className='font-work text-[#444444] text-[16px]'>Lead Generation</li>
                <li className='font-work text-[#444444] text-[16px]'>Performance Marketing</li>
              </ul>
            </div>
          </div>
          <div className='mt-5 p-5 shadow-2xl'>
            <div className="bg-[#0A2F5A] w-[50px] h-[50px] flex justify-center items-center rounded-full">
              <i className="fa-solid fa-users text-[26px] text-[#FFD400]"></i>
            
            </div>
            <h1 className='font-josefin text-[#0A2F5A] text-[30px] font-bold mt-3 p-1'><span className='bg-[#FFD400] p-2'>HR Services</span></h1>
            <p className="font-work text-[#555555] text-[16px] mt-1">Professional HR and placement support services connection institutions, students, professionals and companies
            </p>
            <div className='mt-3'>
              <ul className="list-disc pl-6">
             <li className='font-work text-[#444444] text-[16px]'>Placement Support</li>
             <li className='font-work text-[#444444] text-[16px]'>College Placement Drives</li>
                <li className='font-work text-[#444444] text-[16px]'>Internship Consultation</li>
                <li className='font-work text-[#444444] text-[16px]'>Recruitment Services</li>
              </ul>
            </div>
          </div>
          <div className='mt-5 text-center p-4'>
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" className='rounded' />
          </div>
          <div className='mt-5 text-center p-4'>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" className='rounded' />
          </div>
          <div className='mt-5 p-5 shadow-2xl'>
            <div className="bg-[#0A2F5A] w-[50px] h-[50px] flex justify-center items-center rounded-full">
              <i className="fa-solid fa-building text-[26px] text-[#FFD400]"></i>
            </div>
            <h1 className='font-josefin text-[#0A2F5A] text-[30px] font-bold mt-3 p-1'><span className='bg-[#FFD400] p-2'>Co-Working Innovation</span></h1>
            <p className="font-work text-[#555555] text-[16px] mt-1">
            Collaborative workspaces and innovation-driven environment for startups,freelancers and development teams
            </p>
          <div className='mt-3'>
            <ul className="list-disc pl-6">

              <li className='font-work text-[#444444] text-[16px]'>Development Team Collaboration</li>
              <li className='font-work text-[#444444] text-[16px]'>Innovation Workspaces</li>
              <li className='font-work text-[#444444] text-[16px]'>Technology Mentorship</li>
              <li className='font-work text-[#444444] text-[16px]'>Project Consultation</li>
              <li className='font-work text-[#444444] text-[16px]'>Creative Marketing</li>
            </ul>
          </div>
</div>
        </div>
      </div>
      <div className='relative w-full min-h-[350px] bg-[url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop")] text-center mt-10'>

        <div className='absolute inset-0 bg-blue-950/90 flex-wrap'>
          <h1 className='font-josefin text-[#ffffff] md:text-[62px] text-[40px] pt-[60px] font-[600px]'>Transform Your Vision Into Reality</h1>
          <p className='font-work text-[#ffffffE6] md:text-[19px] text-[14px] px-10'>Partner with Evlogia to build futuristic digital experiences,scalable technologies, innovative software products, and next-generation business solutions.</p>
          <button className="font-work `md:text-[20px] text-[14px] bg-[#F2C94C] font-medium rounded-full text-[#000000] py-2 px-6 mt-5">
            View Services
          </button>
        </div>
      </div>
      <Footer/>
      <div className='fixed right-[35px] bottom-8'>
        <IconHandle />
      </div>
    </>
  )
}

export default UserServices
