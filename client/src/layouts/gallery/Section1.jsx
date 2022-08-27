import React from 'react'
import MainGallery from '../../components/gallery/MainGallery'

export default function Section1() {
  return (
    <div className='py-10 lg:py-5 flex flex-col gap-10'>
        <div className='flex flex-col items-center gap-3'>
            <h1 className='text-3xl text-four-500'>Gallery</h1>
            <hr className='w-[5%] border-2 border-four-500 bg-four-500 rounded-full'/>
        </div>
        <div className='px-1 md:px-10'>
          <MainGallery/>
        </div>
    </div>
  )
}
