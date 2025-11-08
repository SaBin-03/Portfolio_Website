import React from 'react'
import NavBar from './components/navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './section/Home'
import About from './section/About'
import Contact from './section/Contactme'
import Projects from './section/Projects'
import Skills from './section/Skills'
import CustomCursor from './constants/cursor/customCursor'

const App = () => {
  return (
    <div className='h-screen w-full relative'>
      {/* CustomCursor */}
      <CustomCursor />

      {/* NavbAR Section */}
      <NavBar />

      {/* Home Section */}
      <Home />
      {/* About Section */}
      <About />
      {/* Skills Section */}

      {/* Projects Section */}

      {/* Contact Section */}

      {/* Footer Section */}



    </div>
  )
}

export default App