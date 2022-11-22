import React, {useState} from 'react'
import {useNavigate, NavLink} from 'react-router-dom'
import {FaDoorClosed, FaDoorOpen} from 'react-icons/fa'
import {NavStyle} from "./style"

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
    <div className='flex items-center justify-between py-8 relative sticky top-0 bg-white'>
      <div className="nav_logo">
        <h1 className='text-xl lg:text-2xl font-bold cursor-pointer' onClick={handleHome}>
          Crypto-<span className='text-orange-400'>News</span>
        </h1>
      </div>
      <div>
        <div className={`${hiddenMenu ? 'hidden': ''} ${NavStyle.linkCont}`}>
                <NavLink to={'/'} onClick={handleDeploy} className={`${NavStyle.linkStyle}`}>Home</NavLink>
                <NavLink to={'/trend/'} onClick={handleDeploy} className={`${NavStyle.linkStyle}`}>News</NavLink>
                <NavLink to={'/about/'} onClick={handleDeploy} className={`${NavStyle.linkStyle}`}>About</NavLink>
                <NavLink to={'/blogs/'} onClick={handleDeploy} className={`${NavStyle.linkStyle}`}>Blogs</NavLink>
        </div>
      </div>
      {hiddenMenu ? (<FaDoorClosed onClick={handleDeploy} className='text-3xl lg:hidden cursor-pointer'/>): (<FaDoorOpen onClick={handleDeploy} className='text-3xl lg:hidden cursor-pointer'/>)}
    </div>
  )
}
export default Navbar
