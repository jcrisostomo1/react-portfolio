import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div  name='home'className='w-full h-screen bg-[#0a192f]'>
        
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-green-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Josh Crisostomo.</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer looking to continiously learn while leveraging my current skills 
            as I gain valuable experience and knowledge in the software development industry
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home