import React from "react";

const skillsData = [
  {
    id: 1,
    name: "Software Consultation",
    icon: (
    <i className="fa-sharp fa-solid fa-laptop-code text-3xl text-center text-green-800"></i>
    ),
    link: "#",
    description: "Architecture,stack and delivery planning",
  },
  {
    name: "Website Consultation",
    icon: (
      <i class="fa-solid fa-globe text-3xl text-center text-green-800"></i>
    ),
    link: "#",
    description: "Design,development and performance",
  },
  {
    name: "Mobile App Consultation",
    icon: (
      <i class="fa-solid fa-mobile-screen-button text-3xl text-center text-green-800"></i>
    ),
    link: "#",
    description: "iOS, Android and cross-platform apps.",
  },
  {
    name: "Logo Designing",
    icon: (
      <i class="fa-solid fa-palette text-3xl text-center text-green-800"></i>
    ),
    link: "#",
    description: "Brand identity that stands out",
  },
  {
    name: "Business Idea Consultation",
    icon: (
      <i class="fa-solid fa-lightbulb text-3xl text-center text-green-800"></i>
    ),
    link: "#",
    description: "validate and plan your product idea",
  },
  {
    name: "Software Testing",
    icon: (
      <i class="fa-solid fa-bug text-3xl text-center text-green-800"></i>
    ),
    link: "#",
    description: "Quality Assurance & Test Strategy",
  },
];

const Skills = () => {
  return (
    <>
      <span id="skills"></span>
      <div className="dark:bg-black dark:text-white py-14">
        <div className="container text-center mb-12 p-4 bg-[#F2C94C]">
          <h1 className="font-work text-[#0A2F5A] text-[16px] font-semibold flex-auto">Connecting Talent With Opportunity Through IT consulting and HR Placement Services </h1>
        </div>
        <div className="container">     
       {/* <div className="grid grid-cols-2 gap-2 mb-5"> */}
<div className="lg:flex lg:justify-between lg:items-center grid grid-cols-1 mr-[-40px]">
            <div className="w-[75%]">
        <div>
                <p className="font-work text-[#0A2F5A] text-[14px] font-semibold mb-3"><span className="bg-[#F2C94C] p-1 rounded">Pillar 1</span></p>
                <h1 className="font-josefin text-[#051311] text-[34.78px] font-bold mb-2">IT Consultation</h1>
                <p className="font-work text-[#0A2F5A] text-[20px] justify-start">
               Technology guidance for startups,businesses, and students who want practical, affordable digital solutions.
                </p>
              
                <button className="font-work bg-[#C89B3C] font-medium text-[#000000] text-[16px] p-2 mt-[15px]  duration-300">
                    Explore All Services
                  </button>
            
        </div>
       </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-5">
              {skillsData.map((skill) => (
                <div className="group space-y-2 text-center p-2 duration-300  text-green-800 mr-[15px]">
                  <div className="">{skill.icon}</div>
                  <h1 className="font-josefin text-[#0A2F5A] text-[25.912px] justify-start leading-[1.75rem]">{skill.name}</h1>
                  <p className="font-work text-[#0A2F5A] text-[16px] justify-start">{skill.description}</p> 
             
                </div>
              ))}
            </div>

       </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
