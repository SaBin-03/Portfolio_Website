import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import 'remixicon/fonts/remixicon.css'

const Home = () => {

  useGSAP(()=>{
    gsap.from("#Herotext",{
      opacity:0,
      y:60,
      duration:0.8
    })
    gsap.from("#para1",{
      opacity:0,
      y:60,
      duration:0.8
    })
    gsap.from("#para2",{
      opacity:0,
      y:60,
      duration:0.8
    })
    gsap.from(".btn1",{
      opacity:0,
      y:60,
      duration:0.8
    })
    gsap.from(".btn2",{
      opacity:0,
      y:60,
      duration:0.8
    })
    gsap.from("#scroll",{
      // opacity:0,
      y:-10,
      duration:0.8,
      repeat:-1,
      yoyo:true
    })
    gsap.from("#arrow",{
      y:-10,  
      duration:0.8,
      repeat:-1,
      yoyo:true
    })
    
  })

  return (
    <div id="home" className="lg:h-full w-full ">
      <div className="h-full w-full flex justify-center items-center flex-col  ">
        <div  className=" h-[70vh] lg:w-[60vw] w-[70vw] flex justify-center items-center flex-col">
          <h1 id="Herotext" className="text-white lg:text-6xl text-4xl lg:mb-4  ">
            Hey! I’m Alex,{" "}
            <span className="text-blue-300">FullStack Developer</span>
          </h1>
          <p id="para1" className="text-white/70 lg:text-xl mb-3 ">
            Just a guy who loves playing with code and making websites that
            actually look good.
          </p>
          <p id="para2" className="text-white/90 lg:text-2xl text-xl">
            Welcome to my little corner of the internet! <i class="ri-global-line"></i>
          </p>
          <div className="flex justify-center items-center gap-6 mt-6">
            <button className="btn1 text-white lg:px-5 lg:py-3 lg:text-xl rounded-full cursor-pointer lg:font-semibold ">Download CV <i className="ri-mail-download-line"></i></button>
            <button className="btn2 text-white lg:px-5 lg:py-3 lg:text-xl rounded-full cursor-pointer lg:font-semibold "><span className="bg-black rounded-full px-6 py-4">Explore Us <i class="ri-compass-discover-line"></i></span></button>
          </div>
        </div>
      </div>
      <div className="hidden lg:inline flex justify-center items-center flex-col text-center absolute bottom-5 left-1/2 text-amber-50">
        <p id="scroll" className="text-white/70">Scroll</p>
        <i id="arrow" className="ri-arrow-down-long-line"></i>

      </div>
    </div>
  );
};

export default Home;


