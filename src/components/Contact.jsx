import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1e2625] flex justify-center items-center p-4 text-neutral-900'>
        <form method='POST' action="https://getform.io/f/e1bfdb12-b97f-4735-b2dd-acb89b9625fa" className='flex flex-col max-w-[600px] w-full '>
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-violet-700 text-[#ccd6f6]"> Contact</p>
                
            </div>
            <input className='bg-slate-50 p-2 text-neutral-900 font-bold ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-slate-50 text-neutral-900 font-bold ' type="email" name="email" placeholder='Email'  />
            <textarea className='bg-slate-50 text-neutral-900 font-bold p-2 ' name="message" placeholder='Message' rows="10"></textarea>
            <button className='bg-slate-50 my-8 py-3 px-4 mx-auto font-bold w-[100px] border-2 hover:bg-violet-700 border-violet-700 text-neutral-900'>Send</button>
        </form>
    </div>
  )
}

export default Contact