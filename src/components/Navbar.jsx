import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll'
import myLogo from "../assets/myLogo.PNG"

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1e2625] text-violet-700">
      <div>
        <img style={{width:70}} src={myLogo} alt="" />
      </div>

      <div>
        <ul className="hidden md:flex text-xl">
          <li className="transition ease-out duration-300 transform hover:scale-95 hover:border-b hover:text-[#ccd6f6]">
          <Link  to="home"  smooth={true} offset={50} duration={800} >
          Home
        </Link>
          </li>
          <li className="transition ease-out duration-300 transform hover:scale-95 hover:border-b hover:text-[#ccd6f6]">
          <Link  to="about"  smooth={true} offset={50} duration={500} >
          About
        </Link>
          </li>
          <li className="transition ease-out duration-300 transform hover:scale-95 hover:border-b hover:text-[#ccd6f6]">
          <Link  to="skills"  smooth={true} offset={50} duration={500} >
          Skills
        </Link>
          </li>
          <li className="transition ease-out duration-300 transform hover:scale-95 hover:border-b hover:text-[#ccd6f6]">
          <Link  to="projects"  smooth={true} offset={50} duration={500} >
          Projects
        </Link>
          </li>
          <li className="transition ease-out duration-300 transform hover:scale-95 hover:border-b hover:text-[#ccd6f6]">
          <Link  to="contact"  smooth={true} offset={50} duration={500} >
          Contact
        </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

        {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1e2625] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick}  to="home"  smooth={true} offset={50} duration={500} >
          Home
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="about"  smooth={true} offset={50} duration={500} >
          About
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="skills"  smooth={true} offset={50} duration={500} >
          Skills
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="projects"  smooth={true} offset={50} duration={500} >
          Projects
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="contact"  smooth={true} offset={50} duration={500} >
          Contact
        </Link>
        </li>
      </ul>
    
    {/* Social Icons */}
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
                <a className="flex justify-between items-center w-full text-gray-300"
                href="/">
                    LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]">
                <a className="flex justify-between items-center w-full text-gray-300"
                href="/">
                    GitHub <FaGithub size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-red-600">
                <a className="flex justify-between items-center w-full text-gray-300"
                href="/">
                    Email <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-teal-600">
                <a className="flex justify-between items-center w-full text-gray-300"
                href="/">
                    Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
    </div>

    </div>
    
  );
};

export default Navbar;