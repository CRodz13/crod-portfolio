import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import headshotImg from '../assets/headshot.jpg'

const Main = () => {
  return (
    <div id='main'>
        <img className="w-full h-screen scale-x-[-1]" src={headshotImg} alt="" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/25">
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center fade-in'>
                <h1 className='sm:text-5xl text-4xl font-bold shadow-xl text-gray-800 transform'>I'm Chris Rodriguez</h1>
                <h2 className='flex sm:text-3xl text-2xl shadow-xl pt-4 text-gray-800'>I'm a
                    <TypeAnimation
                        sequence={[
                            'Coder', 
                            1000, 
                            'Developer', 
                            2000, 
                            'Programmer',
                            2000,
                            'Father',
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: '5px', color: '#4ade80' }}
                    />
                </h2>
                <div className='flex justify-between pt-10 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer md:hover:scale-[2] ease-in duration-200 md:hover:fill-green-400' size={30}/>
                    <FaFacebookF className='cursor-pointer md:hover:scale-[2] ease-in duration-200 md:hover:fill-green-400' size={30}/>
                    <FaInstagram className='cursor-pointer md:hover:scale-[2] ease-in duration-200 md:hover:fill-green-400' size={30}/>
                    <FaLinkedinIn className='cursor-pointer md:hover:scale-[2] ease-in duration-200 md:hover:fill-green-400' size={30}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
