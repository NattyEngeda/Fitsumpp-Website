import React from 'react'

export default function SectionSix() {
  return (
    <div className='relative  w-full min-h-screen flex flex-col items-center pt-5 gap-24 border-b border-gray-200'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-center text-4xl'>A Selection of Our <br /> <span className='text-primary-500'>Latest & Gratest</span>  Projects</h1>
            <hr className='border-2 border-primary-500 rounded-full w-2/4 m-auto'/>
        </div>
        {/* Background Boxed */}
        <div className='absolute top-44 h-auto w-full z-10'>
            {/* Left Green Box */}
            <div className='absolute w-[15%] h-96 bg-primary-600'>
            </div>
            {/* Right Green Box */}
            <div className='absolute right-0 top-24 w-[25%] h-96 bg-primary-600 float-right'>
            </div>
        </div>
        {/* Foreground Data */}
        <div className='w-full h-96 bg-transparent z-20 flex flex-row gap-20 justify-evenly items-center'>
            <div className='w-[80%] h-96 md:w-48 md:h-52 bg-gray-300 shadow-xl'></div>
            <div className='hidden md:block w-48 h-52 bg-gray-400 shadow-xl'></div>
            <div className='hidden md:block w-48 h-52 bg-gray-400 shadow-xl'></div>
            <div className='hidden md:block w-48 h-52 bg-gray-400 shadow-xl'></div>
            <div className='hidden md:block w-48 h-52 bg-gray-400 shadow-xl'></div>
        </div>
    </div>
  )
}
