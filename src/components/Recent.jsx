import React from 'react'

function Recent() {
  return (
    <div className='recent'>
        <h1 className='text-xl font-bold mb-2 text-slate-800 uppercase'>Recent News</h1>
        <div className='w-3/5 h-0.5 bg-orange-400 mb-8'></div>
        <div className="container flex flex-col lg:flex-row lg:w-full lg:gap-x-4">
          <div className='lg:w-full grid gap-y-3 lg:w-2/5'>
                  <div className='w-full h-40 bg-slate-800 rounded-lg'>
                  
                  </div>
                  <div className='w-full h-40 bg-slate-800 rounded-lg'>
                  
                  </div>
                  <div className='w-full h-40 bg-slate-800 rounded-lg'>
                  
                  </div>
          </div>
          <div className='bg-orange-400 rounded-lg p-8 grid lg:w-3/5'>
            <h2 className='text-xl text-white font-bold'>Top Trending news</h2>
            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Deserunt deleniti consequatur et mollitia hic molestias!
            </p>
            <div className='card_cont grid gap-y-3'>
              <div className='bg-white h-20 rounded-lg'>

              </div>
              <div className='bg-white h-20 rounded-lg'>

              </div>
              <div className='bg-white h-20 rounded-lg'>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Recent
