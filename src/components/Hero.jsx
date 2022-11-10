import React from 'react'

function Hero() {
  return (
    <div className='w-full flex-col gap-y-4 flex lg:flex-row lg:gap-x-4'>
      <div className='flex flex-col justify-between w-full lg:w-3/5 gap-y-4'>
        <div className='w-full h-96 bg-slate-800 rounded-xl'>

        </div>
        <div className='flex gap-x-4'>
            <div className='w-full h-40 bg-slate-800 rounded-lg'>
                
            </div>
            <div className='w-full bg-slate-800 rounded-lg'>
                
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-between w-full gap-y-4 lg:w-2/5'>
        <div className='w-full h-40 bg-slate-800 rounded-lg'>
                
        </div>
        <div className='w-full h-40 bg-slate-800 rounded-lg'>
                
        </div>
        <div className='w-full h-40 bg-slate-800 rounded-lg'>
                
        </div>
      </div>
    </div>
  )
}
export default Hero
