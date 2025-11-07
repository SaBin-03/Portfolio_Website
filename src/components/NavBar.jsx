import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants/index'
gsap.registerPlugin(useGSAP);

const NavBar = () => {
    const NavbarAnimation = useRef(null)
    const Links = useRef(null)
    const btn = useRef(null)
    


    // const tl = gsap.timeline();
    useGSAP(()=>{
        gsap.from(NavbarAnimation.current,{
            y:-60,
            duration:0.8
            // delay:0.3,
        })
        gsap.from(Links.current.querySelectorAll('a'),{
            y:-60,
            duration:0.8
            
        });
        gsap.from(btn.current,{
            x:120,
            duration:0.8
        })

    },[])
  return (
    <div>
        <div id='fontnav' className='font1 overflow-x-hidden h-15 w-screen sm:bg-amber-500 flex  justify-between items-center px-3 py-2 absolute'>
            <div ref={NavbarAnimation} className="flex justify-center items-center  h-full w-50 gap-2 text-white text-4xl font-semibold"  >
                <img className='h-full w-1/4' src="public/logo.png" alt="" />
                <h2 className="text-white text-4xl font-semibold ">Alex</h2>
            </div>
            <div ref={Links}  className="flex justify-center items-center gap-6">
                {navLinks.map((elem)=>{
                    return <a  className='text-white' href={elem.id}>{elem.title}</a>
                })}
            </div>
            <div ref={btn}>
                <button id='reach' className='text-white rounded-full px-5 py-2 font-semibold cursor-pointer'>Reach Out <i class="ri-corner-up-left-double-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default NavBar