import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import GitHub from '../assets/github.png'
import Java from '../assets/java.png'
import CSharp from '../assets/c#.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-green-600'>Skills</p>
                <p className='py-4'>Technologies that I have experience with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-{#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-{#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS Icon" />
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-{#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript Icon" />
                    <p>JavaScript</p>
                </div>
                <div className='shadow-md shadow-{#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt="Java Icon" />
                    <p>Java</p>
                </div>
                <div className='shadow-md shadow-{#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSharp} alt="C# Icon" />
                    <p>C#</p>
                </div>
                <div className='shadow-md shadow-{#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="Github Icon" />
                    <p>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills