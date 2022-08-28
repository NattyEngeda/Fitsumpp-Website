import React from 'react'

import car1 from '../../assets/images/delivery/car1new.webp'
import car2 from '../../assets/images/delivery/car2new.webp'

// Images 
import delivery from '../../assets/images/About Us/Icons/1delivery.png';

export default function Section8() {
  return (
    <div className='w-full min-h-screen '>
        <div className='flex flex-col gap-5 py-2 md:py-10 px-5 md:px-20'>
            <img  
                className='w-20 md:w-32'
                src={delivery} 
                alt="Delivery Icon" />
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl text-primary-500'>Delivery</h1>
                <hr className='border-2 border-primary-500 bg-primary-500 rounded-full w-1/5'/>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 h-auto gap-1 bg-black'>
            <div className='bg-white'>
                <img 
                className='w-full'
                src={car1}
                alt="Car Image 1" />
            </div>
            <div className='bg-blue-400 flex justify-center items-center'>
            <img 
                className='h-96'
                src={car2}
                alt="Car Image 2" />
            </div>

        </div>

    </div>
  )
}
