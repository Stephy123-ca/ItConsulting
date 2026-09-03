import React from 'react'

const skillsData = [
    {
        id: 1,
        name: "Job Role Consultancy",
        icon: (
            <i className="fa-solid fa-user-tie text-3xl text-center text-green-800"></i>
        ),
        link: "#",
        description:"guidance across IT, HR and business roles."
    },
    {
        name: "Institute Placement",
        icon: (
            <i className="fa-solid fa-school text-3xl text-center text-green-800"></i>
        ),
        link: "#",
        description:"Placement support tailored for colleges",
    },
    {
        name: "College Placement Drives",
        icon: (
            <i className="fa-solid fa-users text-3xl text-center text-green-800"></i>
        ),
        link: "#",
        description: "On-campus drives with company participation.",
    },
    {
        name: "Internship Consultation",
        icon: (
            <i className="fa-solid fa-briefcase text-3xl text-center text-green-800"></i>
        ),
        link: "#",
        description: "Internship matching and career prep.",
    },
   
];

const Skills2 = () => {
  return (
      <>
          <span id="skills"></span>
          <div className="dark:bg-black dark:text-white py-14">
          
              <div className="container">
                  {/* <div className="grid grid-cols-2 gap-2 mb-5"> */}
                  <div className="lg:flex lg:justify-between lg:items-center grid grid-cols-1 mr-[-40px]">
                      <div className="w-[75%]">
                          <div>
                              <p className="font-work text-[#0A2F5A] text-[14px] font-semibold mb-3"><span className="bg-[#F2C94C] p-1 rounded">Pillar 2-Our Focus</span></p>
                              <h1 className="font-josefin text-[#051311] text-[34.78px] font-bold mb-2">HR Services</h1>
                              <p className="font-work text-[#0A2F5A] text-[20px] justify-start">
                              End to-end placement and recruitment support for institutes,students, and hiring companies.
                              </p>
                          </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-[50px] mt-10">
                          {skillsData.map((skill) => (
                              <div className="group space-y-3 flex flex-col mr-[5px] justify-center items-center text-center p-2 border-[2px] rounded-md border-[#F2C94C] text-green-800">
                                  <div className="p-2 ">{skill.icon}</div>
                                  <h1 className="font-josefin text-[#0A2F5A] text-[24.328px] font-bold">{skill.name}</h1>
                                  <p className="font-work text-[#0A2F5A] text-[16px]">{skill.description}</p>

                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Skills2
