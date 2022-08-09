import React from "react";
import demo from "../assets/demopic.jpg";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-[#ccd6f6] bg-[#1e2625]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl border-b-4 font-bold border-violet-700 inline ">
            Projects
          </p>
          <p className="py-6">Here is some of my recent projects</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${demo})` }}
            className="shadow-lg shadow-neutral-700 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover affect */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col">
              <span className="text-2xl text-center font-bold text-white tracking-wider">
                NuCamp
              </span>
              <div className="pt-8  text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className=" rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Git
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
