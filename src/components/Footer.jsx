import React from 'react'
import {FaInstagram, FaFacebook, FaPinterest} from 'react-icons/fa'

const Footer = ({className}) => {
  return (
    <div className={className}>
        <div className="container px-8 py-8">
            <div className="footer_sec flex items-center justify-between flex-col md:flex-row md:items-start">
                <div className="flex-1 flex flex-col mb-8 text-center">
                    <h1 className='text-2xl font-bold mb-4 md:text-left'>
                        Crypto-<span className='text-orange-400'>News</span>
                    </h1>
                    <p className='mb-4 w-4/5 m-auto md:w-full md:text-left'>Lorem ipsum dolor sit, amet consectetur.
                    </p>
                    <div className="socials flex justify-center gap-x-4 md:justify-start">
                        <a href="https://www.instagram.com"><FaInstagram className='text-xl md:text-2xl'/></a>
                        <a href="https://www.facebook.com"><FaFacebook className='text-xl md:text-2xl'/></a>
                        <a href="https://ww.pinterst.com"><FaPinterest className='text-xl md:text-2xl'/></a>
                    </div>
                </div>
                <div className="flex-1 footer_links text-center mb-8">
                    <h1 className='text-2xl font-bold mb-4'>
                        Our-<span className='text-orange-400'>News</span>
                    </h1>
                    <div className="grid justify-center gap-x-4">
                        <a href="https://ww.pinterst.com">Indices</a>
                        <a href="https://ww.pinterst.com">Shares</a>
                        <a href="https://www.instagram.com">Currency</a>
                        <a href="https://www.facebook.com">Cryptocurrency</a>
                    </div>
                </div>
                <div className="flex-1 footer_links">
                    <h1 className='text-2xl font-bold'>
                        Crypto-<span className='text-orange-400'>News</span>
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Footer
