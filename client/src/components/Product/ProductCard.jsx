import React from 'react'

export default function ProductCard(props) {
    return (
        <div className="rounded-2xl overflow-hidden h-auto w-full bg-gray-100 border border-gray-200 shadow-xl cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105  duration-300 ">
            <div className='overflow-hidden w-full'>
                <img className='w-full h-60' src="https://wiki.dave.eu/images/4/47/Placeholder.png" alt="Place Holder" />
            </div>
            <div className="flex justify-center py-5 text-xl">
                <p>{props.name}</p>
            </div>
        </div>
    )
}
