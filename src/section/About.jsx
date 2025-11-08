import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
// import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const heroImgref = useRef(null)
  const aboutRef = useRef(null)

  useGSAP(()=>{
    gsap.from(heroImgref.current,{
      x:-60,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:heroImgref.current,
        start:"top 65%"
      }
    })
    gsap.from(aboutRef.current,{
      x:60,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:aboutRef.current,
        start:"top 65%"
      }
    })
  })
  
  return (
    <div className="h-full w-full ">
      <div className="h-full w-full flex justify-center items-center ">
        <div
          id="card"
          className=" h-[95vh] w-[75vw] flex justify-between items-center"
        >
          <div ref={heroImgref} className="h-[80%] w-1/3 mx-7 rounded-2xl overflow-hidden">
            <img
              className="object-cover h-full w-full  "
              src="https://plus.unsplash.com/premium_photo-1669130247940-81097c67e8e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwaW4lMjBjb2F0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
              alt=""
            />
          </div>
          <div ref={aboutRef} className="h-[90%] w-2/3 mx-3 flex  text-center items-center flex-col">
            <h1 className="text-white text-6xl mt-4">
              About <span className="text-blue-300">Me</span>
            </h1>
            <div className="  h-[50%] w-full  mt-10 flex justify-center items-center text-start flex-col p-4">
              <p className="text-white text-xl leading-8 ">Hey there! I’m Alex , a passionate front-end developer who loves turning ideas into clean, interactive, and visually appealing web experiences. I enjoy experimenting with new technologies, building side projects, and constantly improving my skills in modern web development.</p>
              <br />
              <p className="text-white text-xl leading-8 ">When I’m not coding, you’ll probably find me exploring creative designs, learning animation techniques with GSAP, or just listening to chill beats while brainstorming new project ideas.</p>
            </div>
            <div className="mt-10">
              <button className=" mr-4 text-white px-5 py-3 text-xl rounded-full cursor-pointer border-2 transition-all hover:bg-blue-400">LinkedIn <i class="ri-linkedin-fill"></i></button>
              <button className=" text-white px-5 py-3 text-xl rounded-full cursor-pointer border-2 transition-all hover:bg-yellow-400">View <i class="ri-list-view"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
