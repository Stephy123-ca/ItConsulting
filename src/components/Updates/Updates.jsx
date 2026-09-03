import React from 'react'

const skillsData = [
    {
        id: 1,
        name: "Software Testing",
        img: (
<img src="./src/assets/images/testing.webp" alt="not found" />
        ),
        link: "#",
        description: "Software testing is the process of verifying and validating that a software application meets its specified requirements, and functions as intended.",
        button: (<button className="uppercase text-sm bg-[#0F4C8A] font-medium rounded-full text-white py-2 px-6 hover:bg-success/80 duration-300">Explore Insight <i class="fa-solid fa-arrow-right"></i></button>),
    },
    {
        name: "Cyber Security",
        img: (
            <img src="./src/assets/images/cyber.webp" alt="not found" />
        ),
        link: "#",
        description: "Cyber security is the practice of protecting systems, networks, and data from digital attacks while promoting responsible and sustainable use of...",
        button: (<button className="uppercase bg-[#0F4C8A] font-medium rounded-full text-white py-2 px-6 text-sm hover:bg-success/80 duration-300">Explore Insight <i class="fa-solid fa-arrow-right"></i></button>),
    },
    {
        name: "Data Science",
        img: (
            <img src="./src/assets/images/ds_img.webp" alt="not found" />
        ),
        link: "#",
        description: "In today's digital world, huge amounts of data are generated every second through Social media, Online shopping, Banking, Healthcare systems,...",
        button: (<button className="uppercase text-sm bg-[#0F4C8A] font-medium rounded-full text-white py-2 px-6 hover:bg-success/80 duration-300">Explore Insight <i class="fa-solid fa-arrow-right"></i></button>),
    },
];


const Updates = () => {
  return (
      <>
          <span id="updates"></span>
          <div className="dark:bg-black dark:text-white py-14">
              <div className="container text-center mb-12 p-4 ">
              <h5 className="font-josefin text-[#F2C94C] tet-[16px] p-1 rounded">OUR INSIGHTS</h5>
                  <h1 className="font-josefin text-[#051311] text-[34.375px] font-semibold">
                  Latest Insights & Industry <br/>Updates </h1>
              </div>
             
                  <div className="container grid grid-cols-1 gap-3 mb-5">
                  {/* <div className="flex justify-between items-center mr-[-40px]"> */}
                 
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[-50px] gap-4 ml-[20px]">
                          {skillsData.map((skill) => (
                              <div className="group space-y-3 flex flex-col justify-center items-center text-center p-2 ">
                                  <div className="p-2 ">{skill.img}</div>
                                  <h1 className="font-josefin text-[#051311] text-[20px] font-bold">{skill.name}</h1>
                                  <p className="font-work text-[#0A2F5A] text-[16px]">{skill.description}</p>
                                  <div className="font-work text-[#0F4C8A] text-[14px] mt-2">{skill.button}</div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
         
      </>
  )
}

export default Updates
