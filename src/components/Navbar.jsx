import React, {useState} from 'react'
import {useNavigate, NavLink} from 'react-router-dom'
import {FaHamburger} from 'react-icons/fa'

function Navbar() {

  const [hiddenMenu, setHidenMenu] = useState(true)

  const navigate = useNavigate()
  const handleHome = ()=>{
    navigate('/')
  }
  const handleDeploy = ()=>{
    setHidenMenu(!hiddenMenu)
  }
  // (hiddenMenu ? "w-[calc(100%+4rem)] absolute top-16 left-0 right-0 m-auto bg-yellow-500 h-screen hidden -mr-8 -ml-8" : "w-[calc(100%+4rem)] absolute top-16 left-0 right-0 m-auto bg-yellow-500 h-screen flex justify-center -mr-8 -ml-8")
  return (
    <div className='flex items-center justify-between py-8 relative'>
      <div className="nav_logo">
        <h1 className='text-xl lg:text-3xl font-bold cursor-pointer' onClick={handleHome}>
          Crypto-<span className='text-orange-400'>News</span>
        </h1>
      </div>
      <div className="nav_list">
        <div className={hiddenMenu ? 'hidden flex-col font-semibold mt-10 rounded-md items-center pt-24 left-0 right-0 mx-auto bg-orange-400 h-screen lg:h-0 absolute lg:bg-none lg:m-0 lg:pt-0 lg:flex-row lg:gap-x-8 lg:static lg:flex': 'flex flex-col font-semibold mt-10 rounded-md items-center pt-24 left-0 right-0 mx-auto bg-orange-400 h-screen lg:h-0 absolute lg:bg-none lg:m-0 lg:pt-0 lg:flex-row lg:gap-x-8 lg:static lg:flex'}>
                <NavLink to={'/'} onClick={handleDeploy} className="nav_link text-2xl mb-5 lg:m-0 uppercase cursor-pointer hover:border-b-4 hover:border-orange-400 transition delay-150 duration-300 ease-in-out">Home</NavLink>
                <NavLink to={'/trend/'} onClick={handleDeploy} className="nav_link text-2xl mb-5 lg:m-0 uppercase cursor-pointer hover:border-b-4 hover:border-orange-400 transition delay-150 duration-300 ease-in-out">News</NavLink>
                <NavLink to={'/about/'} onClick={handleDeploy} className="nav_link text-2xl mb-5 lg:m-0 uppercase cursor-pointer hover:border-b-4 hover:border-orange-400 transition delay-150 duration-300 ease-in-out">About</NavLink>
                <NavLink to={'/blogs/'} onClick={handleDeploy} className="nav_link text-2xl mb-5 lg:m-0 uppercase cursor-pointer hover:border-b-4 hover:border-orange-400 transition delay-150 duration-300 ease-in-out">Blogs</NavLink>
        </div>
      </div>
        <FaHamburger onClick={handleDeploy} className='text-2xl lg:hidden'/>
    </div>
  )
}
export default Navbar
