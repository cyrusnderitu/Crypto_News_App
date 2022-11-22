import React from 'react'

function Hero({trend}) {
  console.log("The Trend coming to Home Component is", trend)
  return (
    <div className='w-full flex-col gap-y-4 flex lg:flex-row lg:gap-x-4'>
      <div className='flex flex-col justify-between w-full lg:w-3/5 gap-y-4'>
        <div className='w-full h-96 bg-slate-800 rounded-xl  bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${trend[0].related_image_big})`}}>
          <div className="w-full h-full flex items-end">
            <div className='p-8'>
              <h2 className='text-2xl text-white font-bold w-3/5'>{trend[0].HEADLINE}</h2>
              <p dangerouslySetInnerHTML={{__html: trend[0].BODY}} className='text-white'></p>
            </div>
          </div>
        </div>
        <div className='flex gap-x-4'>
            <div className='w-full h-40 bg-slate-800 rounded-lg'>
                
            </div>
            <div className='w-full bg-slate-800 rounded-lg'>
                
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-between w-full lg:w-2/5 gap-y-4 '>
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
