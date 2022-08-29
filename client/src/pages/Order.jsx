import React from 'react'
import '../assets/styles/Order.css'

import { TextInput, Select } from '@mantine/core'

import img1 from '../assets/images/Order/order.webp'
import { useEffect } from 'react'


export default function Order() {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div className='flex flex-col'>

      <div className="container1 w-full px-5 md:px-20 ">
        <div className="shape-blob"></div>
        <div className="shape-blob one"></div>
        <div className="shape-blob two"></div>

        <div className='flex flex-col gap-5 bg-gray-200 pb-10 h-auto  min-h-screen rounded-2xl w-full mx-auto my-5 z-20  bg-opacity-80 backdrop-blur-lg py-5 px-2 md:px-10'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-primary-500 font-semibold text-4xl'>Order</h1>
            <hr className='w-1/5 border-2 border-primary-500 rounded-full ' />
          </div>
          <div className='w-full grid md:grid-cols-2'>
            <div className='flex flex-col gap-5 md:pr-10'>
              <TextInput
                placeholder='Your Name'
                label='Name'
                size='md'
                required
              />
              <TextInput
                placeholder='09XXXXXXXX'
                label='Phone Number'
                size='md'
                required
              />
              <TextInput
                placeholder='Your Email'
                label='Email'
                size='md'
                required
              />
              <Select
                label="Pick Product"
                placeholder="Pick your Product"
                size='md'
                data={[
                  { value: 'Cards', label: 'Bussiness Cards' },
                  { value: 'Banner', label: 'Banner' },
                  { value: 'Broucher', label: 'Broucher' },
                  { value: 'Sign', label: 'Signs' },
                  { value: 'Foam', label: '3D Foam' },
                  { value: 'Veichle', label: 'Veichle Graphics' },
                  { value: 'LED', label: 'P6 LEDS' },
                  { value: 'Calanders', label: 'Calander' },
                  { value: 'Car', label: 'Car Branding' },
                  { value: 'Cake', label: 'Cake Topper' },
                  { value: 'Full', label: 'Full Branding' },
                  { value: 'Other', label: 'Other' },
                ]}
              />
              <button className='px-4 py-3 bg-primary-500 shadow-md hover:bg-primary-600 hover:shadow-xl text-xl text-white'>Order</button>
            </div>
            <div className="hidden md:flex overflow-hidden rounded-xl px-20">
              <img className='rounded-xl' src={img1} alt="Order Image" />
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}
