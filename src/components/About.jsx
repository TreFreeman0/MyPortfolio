import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1e2625] text-gray-300 '>
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-violet-700'>About</p>
                </div>
                <div>
                </div>
            </div>
            <div></div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                    <p>Hello. I'm Trevon its a pleasure to meet you. While your here please take a look around.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat esse nostrum, quas praesentium modi nam optio alias nobis quos ex nemo incidunt debitis asperiores quaerat quam, velit quibusdam deserunt mollitia?</p>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default About