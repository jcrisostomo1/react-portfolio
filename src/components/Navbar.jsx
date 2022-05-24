import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/jc_logo.png'
import {Link} from 'react-scroll'
import CV from '../assets/myCV.pdf'

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
            <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} duration={500}>About</Link></li>
            <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li><Link to='resume' smooth={true} duration={500}>Resume</Link></li>
            <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
        

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {nav ? <FaTimes /> : <FaBars /> }
        </div>

        {/* mobile menu */}
        <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden' }>
            <li class="mobile-navbar"><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
            <li class="mobile-navbar"><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
            <li class="mobile-navbar"><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li class="mobile-navbar"><Link onClick={handleClick} to='resume' smooth={true} duration={500}>Resume</Link></li>
            <li class="mobile-navbar"><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
        
        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a class="socials" href='https://www.linkedin.com/in/joshcrisostomo/' target="_blank" rel="noreferrer noopener">LinkedIn <FaLinkedin size={30} /></a> 
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a class="socials" href='https://github.com/jcrisostomo1'target="_blank" rel="noreferrer noopener">GitHub <FaGithub size={30} /></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a class="socials" href='mailto:joshuacr22@gmail.com'>Email <HiOutlineMail size={30} /></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a class="socials" href={CV} without rel="noopener noreferrer" target="_blank">Resume <BsFillPersonLinesFill size={30} /></a>
            </li>
          </ul>
        </div>
       
    </div>
  )
}

export default Navbar

