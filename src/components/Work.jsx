import React from 'react'
import CalculatorImg from '../assets/calculator.png';
import WeatherImg from '../assets/weather.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-600'>Work</p>
          <p className='py-6'>Check out my recent projects!</p>
        </div>
      
      {/* Container */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> 

        {/* Grid Item */}
        <div style={{backgroundImage: `url(${CalculatorImg})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
          {/*Hover Effects*/}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Javascript Calculator
            </span>
            <div className='pt-8 text-center'>
              <a href='https://jcrisostomo1.github.io/odin-calculator/' rel="noreferrer" target="_blank">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
              </a>
              <a href='https://github.com/jcrisostomo1/odin-calculator' rel="noreferrer" target="_blank">
                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Grid Item */}
        <div style={{backgroundImage: `url(${WeatherImg})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
          {/*Hover Effects*/}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Weather App
            </span>
            <div className='pt-8 text-center'>
              <a href='https://jcrisostomo1.github.io/odin-weather-app/' rel="noreferrer" target="_blank">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
              </a>
              <a href='https://github.com/jcrisostomo1/odin-weather-app' rel="noreferrer" target="_blank">
                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Work