import React from 'react'

export default function CompanyCards(props) {

  return (
    <div className='rounded-xl overflow-hidden border border-gray-200 bg-white flex justify-center items-center shadow-lg'>
              <img className='h-28 w-auto' src={props.image} alt="First Company Logo" />
    </div>
  )
}
