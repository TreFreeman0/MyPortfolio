import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div name="home" className=" flex w-full h-screen bg-[#1e2625] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-violet-700">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Trevon Freeman
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <Typewriter 
            onInit={(typewriter) => {
              typewriter.typeString('I am a Software Developer')
              .pauseFor(2000)
              // .deleteAll()
              .start()
              
            }}
            options={{
              autoStart:true,
              loop:true
            }}
           />
        </h2>
        
        <div>
          
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-700 hover:border-violet-700">
           <Link  to="projects" smooth={true} offset={50} duration={500} >
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
            <Link  to="projects" smooth={true} offset={50} duration={500} >
                <HiArrowNarrowRight className="ml-3" />
            </Link>
              </span>
          </button>
        </div>
        <div className="flex flex-row justify-end"></div>
      </div>
    </div>
  );
};

export default Home;
