import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
function Sidebar({className}) {
  return (
<div className={className}>
    <div className='grid'>
        <div className="crypto_value mb-8">
                <div className='h-80 bg-slate-800 rounded-lg flex justify-center items-center'>
                <p className='text-white p-8 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, esse nobis. Dicta sapiente ducimus ut? Beatae ratione qui repellendus laboriosam.</p>
            </div>
        </div>
        <div className="newsletter">
            <h1 className='text-xl font-bold mb-2 text-slate-800 uppercase'>Newsletter</h1>
            <div className='w-full h-0.5 bg-orange-400 mb-10'></div>
            <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt voluptatibus odio, 
                ab optio officia esse expedita quos ducimus. Excepturi?
            </p>
            <form className='flex border-[3px] border-orange-400 rounded-sm items-center'>
                <input type="email" name="email" placeholder='Email' className='w-full outline-none indent-4 text-xl'/>
                <button className='bg-orange-400 w-1/5 flex justify-center py-2' type="submit">
                    <FaPaperPlane className='text-[25px]'/>
                </button> 
            </form>
        </div>
    </div>
</div>
  )
}

export default Sidebar
