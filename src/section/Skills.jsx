import React, { useRef } from "react";
import { skillsData } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Skills = () => {
  const boxes = useRef(null);
  const title = useRef(null);
  const levels = useRef([]);
  const level = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

    gsap.from(title.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: title.current,
        start: "top 65%",
      },
    });

    gsap.from(boxes.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: boxes.current,
        start: "top 65%",
      },
    });

    levels.current.forEach((el) => {
      const targetWidth = el.style.width;

      gsap.fromTo(
        el,
        { width: "0%" },
        {
          width: targetWidth,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            // toggleActions: "play none none reverse",
          },
        }
      );
    });

    level.current.forEach((el1)=>{
      gsap.from(el1,{
        y:40,
        opacity:0,
        duration:2,
        scrollTrigger: {
            trigger: el1,
            start: "top 80%",
          }
      })
    })
  }, []); 

  return (
    <div id="skills" className="h-full w-full">
      <div className="h-full w-full flex justify-center items-center">
        <div id="skillscard" className="h-[95vh] w-[75vw]">
          <div className="h-[15%] w-full flex justify-center items-center">
            <h2 ref={title} className="text-white text-6xl">
              Skill<span className="text-blue-300">s</span>
            </h2>
          </div>

          <div
            ref={boxes}
            className="h-[85%] w-full gap-3 p-7 flex justify-center items-center flex-wrap"
          >
            {skillsData.map((elem, index) => (
              <div key={index} id="skillsBox" className="h-[11vh] w-1/3 p-3">
                <div className="h-[30%] w-full text-center">
                  <h3 className="text-white text-xl">{elem.name}</h3>
                </div>

                <div className="w-full h-[70%] flex justify-around items-center">
                  <i
                    className={`${elem.iconClass} text-5xl ${elem.color}`}
                  ></i>

                  <div className="relative h-4 w-80 border-2 overflow-hidden rounded-full">
                    <div
                      ref={(el) => (levels.current[index] = el)} 
                      className="absolute h-full rounded-full bg-blue-200"
                      style={{ width: elem.level }}
                    ></div>
                  </div>

                  <div>
                    <h5 ref={(el1) => (level.current[index] = el1)}  className="text-white">{elem.level}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
