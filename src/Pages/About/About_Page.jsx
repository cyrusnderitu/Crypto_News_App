import React from 'react'
import About from '../../components/About'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function About_Page() {
  return (
    <div className='mr-8 ml-8 w-full'>
      <Navbar />
      <About />
      <Footer className='bg-slate-700 -mr-8 -ml-8 flex justify-center absolute bottom-0 w-full'/>
    </div>
  )
}
export default About_Page