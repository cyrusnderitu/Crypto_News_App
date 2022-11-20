import React from 'react'
import Articles from '../../components/Articles'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function Blog_page() {
  return (
    <div className='mr-8 ml-8 w-full'>
        <Navbar />
        <Articles />
        <Footer className='bg-slate-700 -mr-8 -ml-8 flex justify-center'/>
    </div>
  )
}
export default Blog_page
