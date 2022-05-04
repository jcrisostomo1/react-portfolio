import React from 'react'

const 
About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div>
                    <p className='sm:text-right text-4xl font-bold'>Hi, I'm Josh, nice to meet you. Feel free to to take a look around!</p>
                </div>
                <div>
                    <p>I am passionate about buidling software applications that will help make our lives easier. I've had experience primarily with backend development using Java 8 and Spring Framework.
                        I would like to transition to a more full stack role to include front-end development skills and expertise to help me become a more well-rounded developer.
                    </p>
                </div>
            </div>
        </div>
    </div>
 
    )
}

export default About