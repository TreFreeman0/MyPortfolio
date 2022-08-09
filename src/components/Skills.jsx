import React from "react";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import css from "../assets/css.png"
import react from "../assets/react.png";
import redux from "../assets/redux.png"
import bootstrap from "../assets/bootstrap.png"

const Skills = () => {
  return (
    <div name="skills" className=" w-full h-screen bg-[#1e2625] text-[#ccd6f6]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="border-b border-slate-800">
          <p className="text-4xl font-bold inline border-b-4 border-violet-700">
            Skills
          </p>
          <p className="py-4">Here are some technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-95 duration-500">
            <img className="w-20 mx-auto" src={html} alt="html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-95 duration-500">
            <img className="w-20 mx-auto" src={css} alt="css icon" />
            <p>Css</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-95 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="Javascript icon" />
            <p>Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-95 duration-500">
            <img className="w-20 mx-auto" src={react} alt="react icon" />
            <p>React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-95 duration-500">
            <img className="w-20 mx-auto" src={bootstrap} alt="bootstrap icon" />
            <p>Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-95 duration-500">
            <img className="w-20 mx-auto" src={redux} alt="redux icon" />
            <p>Redux</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
