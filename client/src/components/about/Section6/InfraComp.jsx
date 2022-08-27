import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react'

export default function InfraComp(props) {
  const detail = `${props.detail.substring(0, 250)}...`;
  return (
    <div className='flex flex-col md:absolute lg:right-32 w-full h-auto md:h-96 md:grid grid-cols-3 gap-7 md:py-10 lg:py-0'>

      {/* Image Section */}
      <div className='overflow-hidden'>
        <div className=' h-full w-full lg:w-[40vw] overflow-hidden border border-gray-100'>
          <img
            src={props.image}
            alt="Place Holder"
            className='w-full'
          />
        </div>
      </div>

      {/* Content Section */}
      <div className='flex flex-col items-start gap-2  col-span-2 px-5 py-5'>
        <h1 className='text-[42px] '><span className='text-three-600 font-semibold'>{props.title}</span></h1>
        <p className='text-lg font-light '>{detail}</p>
        <div className='flex items-end justify-start gap-2'>
          <button className='text-three-600 text-lg'>Learn More</button>
          <ArrowRightIcon className='w-5 text-three-600' />
        </div>
      </div>

    </div>
  )
}
