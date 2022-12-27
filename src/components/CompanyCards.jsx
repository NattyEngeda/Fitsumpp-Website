import React from 'react'
export default function CompanyCards(props) {
  return (
    <div className='rounded-xl overflow-hidden border border-gray-200 bg-white flex justify-center items-center shadow-xl h-auto w-full transBox'>
      <img
        style={{
          paddingTop: props.pad,
          paddingBottom: props.pad
        }}
        className=' h-44 md:h-auto w-auto'
        src={props.image}
        alt="First Company Logo" />
    </div>
  )
}
