import React from 'react'
import { ClockIcon, LocationMarkerIcon,
        PhoneIcon } from '@heroicons/react/outline'
export default function Section10() {
    return (
        <div className='min-h-screen px-5 md:px-20 py-10 flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                <LocationMarkerIcon className='w-32 text-primary-500'/>
                <h1 className='text-5xl text-primary-500'>Our Location</h1>
                <hr className='border-2 border-primary-500 w-1/4 '/>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1970.2339339210073!2d38.79311611849361!3d9.021013046038462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1658578185564!5m2!1sen!2set" 
                width="100%" 
                height="900px" 
                style={{
                    border: 0, 
                }}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {/* Contact Section */}
                    <div className='bg-gray-50 h-auto flex flex-col gap-5 items-start'>
                        <div className='flex gap-2'>
                            <PhoneIcon className='w-10 text-primary-500'/>
                            <h1 className='text-3xl text-primary-500'>Contact</h1>
                        </div>
                        <button className='bg-primary-500 px-16 py-3 text-white w-auto'>Call Now</button>
                        <div>
                            <p>+251 911 753 962</p>
                        </div>
                    </div>
                    {/* Address Section  */}
                    <div className='bg-gray-50 h-auto flex flex-col gap-5 items-start'>
                        <div className='flex gap-2'>
                            <LocationMarkerIcon className='w-10 text-primary-500'/>
                            <h1 className='text-3xl text-primary-500'>Adress</h1>
                        </div>
                        <button className='bg-primary-500 px-16 py-3 text-white w-auto'>Get Directions</button>
                        <div>
                            <p>Shola</p>
                            <p>NULL Building</p>
                            <p>Kenenisa Ave</p>
                            <p>Addis Ababa, Ethiopia</p>
                        </div>
                    </div>
                    {/* Bussiness Hours Section */}
                    <div className='bg-gray-50 h-auto flex flex-col gap-10 items-start'>
                        <div className='flex gap-2'>
                            <ClockIcon className='w-10 text-primary-500'/>
                            <p className='text-3xl text-primary-500'>Office Hours</p>
                        </div>
                        <div>
                            <p>Monday - Friday: 2am - 12pm</p>
                            <p>Saturday: 2am - 6am</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
