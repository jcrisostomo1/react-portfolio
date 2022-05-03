import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)  

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
          <img src={Logo} alt="My Logo" style={{width: '50px'}} />
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Resume</li>
            <li>Contact</li>
        </ul>
        

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {nav ? <FaTimes /> : <FaBars /> }
        </div>

        {/* mobile menu */}
        <ul className= {nav ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden' }>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Resume</li>
            <li>Contact</li>
        </ul>
        
        {/* social icons */}
        <div className='hidden'>

        </div>
       
    </div>
  )
}

export default Navbar

