import React from 'react'

export default function AboutIcon(props) {
  return (
    <div className="p-4 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
               {props.icon}     
            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
            <p className="leading-relaxed">{props.name}</p>
        </div>
    </div>  
  )
}
