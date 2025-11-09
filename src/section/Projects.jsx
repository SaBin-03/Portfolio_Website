import React, { useRef } from "react";
import { projectsData } from "../constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const cardsRef  = useRef(null)
  const mainTextRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger);
  

  useGSAP(()=>{
    gsap.from(mainTextRef.current,{
      y:-60,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:mainTextRef.current,
        start:"top 65%"
    }})

    gsap.from(cardsRef.current,{
      y:60,
      opacity:0,
      duration:1,
      stagger:{
        amount:0.3
      },
      scrollTrigger:{
        trigger:cardsRef.current,
        start:"top 65%"
      }
    })

    
  })

  return (
    <div id="projects" className="h-full w-ful">
      <div className="h-full w-full flex justify-center items-center ">
        <div id="project" className="h-[95vh] w-[75vw] bg-amber-800">
          <div className="h-[15%] w-full  flex justify-center items-center">
            <h2 ref={mainTextRef} className="text-white text-6xl">
              Project<span className="text-blue-300">s</span>
            </h2>
          </div>
          <div ref={cardsRef} className="h-[85%] w-full flex justify-center items-center gap-3 p-2">
            {projectsData.map((elem,idx) => {
              return (
                <div key={idx} id="cards" className="h-[90%] w-1/3  p-3 rounded-2xl">
                  <div className="h-[50%] w-full  rounded-2xl overflow-hidden ">
                    <img
                      id="cardimg"
                      className="h-full w-full object-cover"
                      src={elem.image}
                      alt="image"
                    />
                  </div>
                  <div className="h-[50%] w-full  p-3 rounded-2xl">
                    <h2 className="text-white text-3xl font-semibold mb-2">
                      {elem.title}
                    </h2>
                    <p className="text-[#8d8989] text-[19px]">
                      {" "}
                      {elem.description}
                    </p>
                    <div className="flex justify-between items-center ">
                      <div className="mt-6">
                        <h3 className="text-xl text-white">Tech Stack</h3>
                        <button className="text-white border-2 p-2 mr-2 rounded-full">
                          {elem.techStack.at(0)}
                        </button>
                        <button className="text-white border-2 p-2 mr-2 rounded-full">
                          {elem.techStack.at(1)}
                        </button>
                        <button className="text-white border-2 p-2 mr-2 rounded-full">
                          {elem.techStack.at(2)}
                        </button>
                      </div>
                      <div className="w-[60px] h-full mt-10 cursor-pointer">
                        <i className="ri-github-fill text-[24px] text-white"></i>
                        <i className="ri-arrow-right-up-fill text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
