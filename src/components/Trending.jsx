import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Trending({className, size, btn}) {

    const navigate = useNavigate()
    const handleNav = ()=>{
        navigate('/trend')
    }
  return (
    <div className={`${size}`}>
        <h1 className='text-lg font-bold mb-2 text-slate-800 uppercase'>Trending News</h1>
        <div className=' h-0.5 bg-orange-400 mb-8'></div>

        <div className="container">
            <div className='flex flex-col gap-4'>
                <div className={className}>
                    <div className='h-60 bg-slate-800 rounded-lg'>
                    
                    </div>
                    <div className='h-60 bg-slate-800 rounded-lg'>
                    
                    </div>
                    <div className='h-60 bg-slate-800 rounded-lg'>
                    
                    </div>
                    <div className='h-60 bg-slate-800 rounded-lg'>
                    
                    </div>
                    <div className='h-60 bg-slate-800 rounded-lg'>
                    
                    </div>
                    <div className='h-60 bg-slate-800 rounded-lg'>
                    
                    </div>
                </div>
                <button className={btn} onClick={handleNav}>
                    View More Trending News
                    <FaArrowDown />
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default Trending
