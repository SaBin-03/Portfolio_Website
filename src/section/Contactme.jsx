import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { ScrollTrigger } from "gsap/all";

const Contact = () => {

  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setemail] = useState("")
  const [text, settext] = useState("")

  const title1 = useRef(null)
  const boxes1 = useRef(null)

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.from(title1.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: title1.current,
        start: "top 65%",
      },
    });
    gsap.from(boxes1.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: boxes1.current,
        start: "top 65%",
      },
    });
  },[])

  return (
    <div className='lg:h-full  w-full '>
      <div  className="lg:h-full w-full  flex justify-center items-center">
        <div id='cardsbox' className="lg:h-[95vh] h-screen lg:w-[75vw] ">
          <div className="h-[15%] w-full flex justify-center items-center">
            <h2 ref={title1} className="text-white lg:text-6xl text-3xl">
              Contact <span className="text-blue-300">Me</span>
            </h2>
          </div>
          <div id='contact' className="h-[85%] w-full lg:gap-3 lg:p-7  flex justify-center items-center">
              <div ref={boxes1} className="lg:h-full lg:w-[80%] w-full">
                <div className="lg:flex flex-col justify-around items-center lg:h-[30%] lg:mt-2">
                  <input onChange={(e)=>{
                    setfirstName(e.target.value)
                  }} value={firstName} className='h-[15%] w-full lg:p-8 px-5 py-3 text-xl rounded-full border-2 mb-2' type="text" placeholder='First Name'/>
                  <input onChange={(e)=>{
                    setlastName(e.target.value)
                  }} value={lastName}  className='h-[15%] w-full lg:p-8 px-5 py-3 text-xl rounded-full border-2' type="text" placeholder='Last Name'/>
                </div>
                <div className="h-[70%] p-5 lg:gap-8 gap-5 w-full  flex  items-center flex-col">
                  <input onChange={(e)=>{
                    setemail(e.target.value)
                  }} value={email} className='lg:h-[15%] lg:w-[40%] w-full lg:p-8 px-6 py-3 lg:text-xl rounded-full border-white' type="email" placeholder='Email'/>
                  <input onChange={(e)=>{
                    settext(e.target.value)
                  }} value={text} className='lg:h-[35%] lg:w-[70%] w-full lg:p-8 px-6 py-3 lg:text-xl rounded-full border-white' type="text" placeholder='What can we do for you?'/>
                <button className='bg-green-500 cursor-pointer text-white border-2 text-2xl rounded-full px-5 py-1 w-50 font-semibold'>Submit</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
