import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Recent from '../../components/Recent'
import Footer from '../../components/Footer'
import Trending from '../../components/Trending'
import Sidebar from '../../components/Sidebar'


function Home() {
  return (
      <div className='mr-8 ml-8 w-full'>
        <Navbar />
        <Hero />
        <div className='my-8'></div>
        <Recent />
        <div className='my-8'></div>
        <div className="trending flex flex-col lg:flex-row gap-x-10">
          <Trending className="grid-cols-2 grid gap-3" size='w-full lg:w-3/5' btn='border-2 border-orange-400 flex justify-center items-center font-bold py-2 hover:bg-orange-400 hover:text-white transition duration-4000 gap-x-2'/>
          <Sidebar className='w-full mt-16 lg:w-2/5'/>
        </div>
        <div className='my-8'></div>
        <Footer className='bg-slate-700 -mr-8 -ml-8 flex justify-center'/>
      </div>
  )
}

export default Home
