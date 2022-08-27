import React from 'react'

import fullLogo from '../../assets/images/logo/Fitsum Colred Logo_Own Color.png'

// css
import '../../assets/styles/global.css'
export default function Section1() {
  return (
    <div className='flex flex-col gap-10'>
      
      <div className='flex justify-center'>
        <img
          src={fullLogo}
          alt="Fitsum Advert Logo"
          className='w-full md:w-[40%] '
        />
      </div>
    </div>
  )
}
