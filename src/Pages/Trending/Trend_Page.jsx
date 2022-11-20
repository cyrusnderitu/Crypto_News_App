import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Trending from '../../components/Trending'

function Trend_Page() {
  return (
    <div className='mr-8 ml-8 w-full'>
      <Navbar />
      <Trending className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12 lg:mb-0' btn='hidden'/>
      <Footer className='bg-slate-700 -mr-8 -ml-8 flex lg:absolute lg:bottom-0 lg:w-full'/>
    </div>
  )
}
export default Trend_Page