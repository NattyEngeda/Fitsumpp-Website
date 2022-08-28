import React from 'react'
import '../tests/teststyle.css'

import car1 from '../assets/images/delivery/car1new.webp'
import car2 from '../assets/images/delivery/car2new.webp'


function Test() {
  return (

    <div className='w-full min-h-screen bg-blue-300 flex flex-row'>
      <div className='min-h-screen -skew-x-[30deg] w-full bg-white -ml-52'>
        <div className='skew-x-[30deg] boor'>
            <img
              className='hover:z-40 hover:w-'
              src={car1}
              alt="Car Image 1" />
        </div>
      </div>
      <div className='h-full -skew-x-[30deg] min-h-screen w-full bg-primary-800 -mr-40 z-10'>
      <div className='skew-x-[30deg] -ml-28 relative boor'>
            <img
              className=''
              src={car2}
              alt="Car Image 1" />
          </div>
      </div>
    </div>
  )
}

export default Test
