import React, {useState} from 'react'
import {FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
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
        <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden' }>
            <li class="mobile-navbar">Home</li>
            <li class="mobile-navbar">About</li>
            <li class="mobile-navbar">Skills</li>
            <li class="mobile-navbar">Resume</li>
            <li class="mobile-navbar">Contact</li>
        </ul>
        
        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a class="socials" href='/'>LinkedIn <FaLinkedin size={30} /></a> 
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a class="socials" href='/'>GitHub <FaGithub size={30} /></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a class="socials" href='/'>Email <HiOutlineMail size={30} /></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a class="socials" href='/'>Resume <BsFillPersonLinesFill size={30} /></a>
            </li>
          </ul>
        </div>
       
    </div>
  )
}

export default Navbar

