import React from 'react'
import { HiChevronUp } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram,FaRegFile} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#1e2625] w-full h-44 flex flex-col justify-center items-center text-white'>
        <div className='m-5 hover:-translate-y-1 ease-in-out delay-150 duration-300'>
            <span className='text-4xl '><HiChevronUp /></span>
        </div>
        <div className='w-full flex justify-center items-center text-4xl space-x-4 '>
           <a className='hover:-translate-y-1 ease-in-out delay-150 duration-300' href="/"><FaGithub /></a>
           <a className='hover:-translate-y-1 ease-in-out delay-150 duration-300' href="/"><FaLinkedin /></a>
           <a className='hover:-translate-y-1 ease-in-out delay-150 duration-300' href="/"><FaTwitter /></a>
           <a className='hover:-translate-y-1 ease-in-out delay-150 duration-300' href="/"><FaInstagram /></a>
           <a className='hover:-translate-y-1 ease-in-out delay-150 duration-300' href="/"><FaRegFile /></a>
        </div>
    </div>
  )
}

export default Footer