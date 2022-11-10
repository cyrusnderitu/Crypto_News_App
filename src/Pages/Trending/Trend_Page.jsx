import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Trending from '../../components/Trending'

function Trend_Page() {
  return (
    <div className='mr-8 ml-8 w-full md:mr-16 md:ml-16'>
      <Navbar />
      <div className='my-4'></div>
      <Trending className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3' btn='hidden'/>
      <div className='my-8'></div>
      <Footer className='bg-slate-700 -mr-8 -ml-8 flex justify-center lg:absolute lg:bottom-0 lg:w-full'/>
    </div>
  )
}
export default Trend_Page