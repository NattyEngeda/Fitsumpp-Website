import React from 'react'

// Images
import img2 from '../../assets/images/Contact/Office pic.jpg'

export default function Section4() {
    return (
        <div className='w-full relative h-auto px-5 md:px-20 py-10 md:py-5 bg-gray-100'>
            <div className='h-auto flex flex-col md:flex-row '>
                <div className='h-80 w-full overflow-hidden py-5'>
                    <img className=' w-auto' src={img2} alt="Place Holder" />
                </div>
                <div className=' w-full px-5 md:px-20 py-5 flex flex-col gap-5'>
                    <h1 className='text-2xl font-semibold'>Addis Ababa, Ethiopia (Main Office)</h1>
                    <div className='flex flex-col items-start gap-2'>
                            <h1 className='text-2xl font-semibold'>Address</h1>
                            <div className='flex flex-col gap-1 text- font-light'>
                                <p>Building Name</p>
                                <p>Kenenisa Ave</p>
                                <p>Addis Ababa, Ethiopia</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <h1 className='text-2xl  font-semibold'>Phone / Fax</h1>
                            <div className='flex flex-col gap-1 font-light'>
                                <p>+251 911 753 962</p>
                                <p>Fax Number</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
