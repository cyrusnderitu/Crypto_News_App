import React from 'react'
import { FaSearch, FaUserCircle, FaHeart, FaShare} from 'react-icons/fa'

function Articles() {
  return (
    <div className="blog grid w-full">
    <form className='border rounded-3xl p-4 mb-8 w-4/5 indent-4 flex gap-x-3 lg:w-2/5'>
      <FaSearch />
      <input type="text" placeholder='Search Article' className='border-none outline-none font-poppins'/>
    </form>
    <div className='w-full flex-col gap-y-4 flex lg:flex-row lg:gap-x-4 mb-8'>
      <div className='flex flex-col justify-between w-full lg:w-3/5 gap-y-4'>
        <div className='w-full h-96 bg-slate-800 rounded-xl'>

        </div>
      </div>
      <div className='flex flex-col gap-y-4 justify-between w-full lg:w-2/5'>
        <div className='w-full h-44 bg-slate-800 rounded-lg'>
                
        </div>
        <div className='w-full h-44 bg-slate-800 rounded-lg'>
                
        </div>
      </div>
    </div>
    <h2 className='text-3xl font-bold mb-4'>Articles</h2>
    <div className="blog_content mb-8 flex flex-col lg:flex-row gap-x-4">
      <div className="lg:w-3/5 w-full gap-y-4 grid grid-cols-1 lg:gap-x-4">
        <div className='w-full p-8 bg-slate-800 rounded-lg flex flex-col gap-4'>
          <div className="first inline-flex items-center gap-x-2 text-white">
            <FaUserCircle className='avatar text-5xl'/>
            <div className="avatar_data">
              <h2><span>John Doe</span> . {Date.now()}</h2>
              <span>Founder &Chief designer</span>
            </div>
          </div>
          <div className="middle">
            <h2 className='text-2xl font-bold'>Institutional Adoption Of The Crypto Ecosystem</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos necessitatibus sit non numquam tenetur cum magni expedita nesciunt rem eum.
            </p>
          </div>
          <div className="last flex justify-between items-center mt-4">
            <button className='px-4 py-2 text-white border rounded-lg font-bold'>Read More</button>
            <div className="last_react flex gap-x-3">
              <FaHeart className='text-2xl text-white'/>
              <FaShare className='text-2xl text-white'/>
            </div>
          </div>
        </div>
        <div className='w-full p-8 bg-slate-800 rounded-lg flex flex-col gap-4'>
          <div className="first inline-flex items-center gap-x-2 text-white">
            <FaUserCircle className='avatar text-5xl'/>
            <div className="avatar_data">
              <h2><span>John Doe</span> . {Date.now()}</h2>
              <span>Founder &Chief designer</span>
            </div>
          </div>
          <div className="middle">
            <h2 className='text-2xl font-bold'>Institutional Adoption Of The Crypto Ecosystem</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos necessitatibus sit non numquam tenetur cum magni expedita nesciunt rem eum.
            </p>
          </div>
          <div className="last flex justify-between items-center mt-4">
            <button className='px-4 py-2 text-white border rounded-lg font-bold'>Read More</button>
            <div className="last_react flex gap-x-3">
              <FaHeart className='text-2xl text-white'/>
              <FaShare className='text-2xl text-white'/>
            </div>
          </div>
        </div>
        <div className='w-full p-8 bg-slate-800 rounded-lg flex flex-col gap-4'>
          <div className="first inline-flex items-center gap-x-2 text-white">
            <FaUserCircle className='avatar text-5xl'/>
            <div className="avatar_data">
              <h2><span>John Doe</span> . {Date.now()}</h2>
              <span>Founder &Chief designer</span>
            </div>
          </div>
          <div className="middle">
            <h2 className='text-2xl font-bold'>Institutional Adoption Of The Crypto Ecosystem</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos necessitatibus sit non numquam tenetur cum magni expedita nesciunt rem eum.
            </p>
          </div>
          <div className="last flex justify-between items-center mt-4">
            <button className='px-4 py-2 text-white border rounded-lg font-bold'>Read More</button>
            <div className="last_react flex gap-x-3">
              <FaHeart className='text-2xl text-white'/>
              <FaShare className='text-2xl text-white'/>
            </div>
          </div>
        </div>
        <div className='w-full p-8 bg-slate-800 rounded-lg flex flex-col gap-4'>
          <div className="first inline-flex items-center gap-x-2 text-white">
            <FaUserCircle className='avatar text-5xl'/>
            <div className="avatar_data">
              <h2><span>John Doe</span> . {Date.now()}</h2>
              <span>Founder &Chief designer</span>
            </div>
          </div>
          <div className="middle">
            <h2 className='text-2xl font-bold'>Institutional Adoption Of The Crypto Ecosystem</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos necessitatibus sit non numquam tenetur cum magni expedita nesciunt rem eum.
            </p>
          </div>
          <div className="last flex justify-between items-center mt-4">
            <button className='px-4 py-2 text-white border rounded-lg font-bold'>Read More</button>
            <div className="last_react flex gap-x-3">
              <FaHeart className='text-2xl text-white'/>
              <FaShare className='text-2xl text-white'/>
            </div>
          </div>
        </div>
        <div className='w-full p-8 bg-slate-800 rounded-lg flex flex-col gap-4'>
          <div className="first inline-flex items-center gap-x-2 text-white">
            <FaUserCircle className='avatar text-5xl'/>
            <div className="avatar_data">
              <h2><span>John Doe</span> . {Date.now()}</h2>
              <span>Founder &Chief designer</span>
            </div>
          </div>
          <div className="middle">
            <h2 className='text-2xl font-bold'>Institutional Adoption Of The Crypto Ecosystem</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos necessitatibus sit non numquam tenetur cum magni expedita nesciunt rem eum.
            </p>
          </div>
          <div className="last flex justify-between items-center mt-4">
            <button className='px-4 py-2 text-white border rounded-lg font-bold'>Read More</button>
            <div className="last_react flex gap-x-3">
              <FaHeart className='text-2xl text-white'/>
              <FaShare className='text-2xl text-white'/>
            </div>
          </div>
        </div>
        <div className='w-full p-8 bg-slate-800 rounded-lg flex flex-col gap-4'>
          <div className="first inline-flex items-center gap-x-2 text-white">
            <FaUserCircle className='avatar text-5xl'/>
            <div className="avatar_data">
              <h2><span>John Doe</span> . {Date.now()}</h2>
              <span>Founder &Chief designer</span>
            </div>
          </div>
          <div className="middle">
            <h2 className='text-2xl font-bold'>Institutional Adoption Of The Crypto Ecosystem</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos necessitatibus sit non numquam tenetur cum magni expedita nesciunt rem eum.
            </p>
          </div>
          <div className="last flex justify-between items-center mt-4">
            <button className='px-4 py-2 text-white border rounded-lg font-bold'>Read More</button>
            <div className="last_react flex gap-x-3">
              <FaHeart className='text-2xl text-white'/>
              <FaShare className='text-2xl text-white'/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 pl-4">
        <h2 className="font-bold text-2xl -mt-[46px]"> People you might Know</h2>
        <div className='flex flex-col gap-y-8 mt-4'>
          <div className='w-full h-44 bg-slate-800 rounded-[40px]'></div>
          <div className='w-full h-44 bg-slate-800 rounded-[40px]'></div>
          <div className='w-full h-44 bg-slate-800 rounded-[40px]'></div>
        </div>
        <div className='w-full h-96 bg-slate-800 rounded-[40px] mt-24 flex gap-x-4 items-center p-12'>
          <div className=''>
            <h2 className='font-bold text-2xl'>Get Unlimited access to everything on Reader</h2>
            <p>Plans starting at less than $1/week</p>
            <button className='mt-6 border-2 p-4 rounded-lg font-poppins'>
              Get Unlimited access
            </button>
          </div>
          <div className=''></div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Articles

