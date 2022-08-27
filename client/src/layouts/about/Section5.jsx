import { CogIcon, UserGroupIcon } from '@heroicons/react/outline'
import React from 'react'

import roleImage from '../../assets/images/AboutPageIcons/role.jpg'

import staff from '../../assets/images/About Us/Icons/1Staff.png'
import role from '../../assets/images/About Us/Icons/1Role.png'

export default function Section5() {
    return (
        <div className='w-full relative min-h-screen px-5 md:px-20'>
            <div className='flex flex-col gap-5'>
                {/* <UserGroupIcon className='w-20 md:w-32 text-primary-500'/> */}
                <img
                    className='w-20 md:w-32'
                    src={staff}
                    alt="Staff Image" />
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-5xl font-semibold text-secondary-500'>Our Staff</h1>
                    <hr className='border-2 border-secondary-500 bg-secondary-500 rounded-full w-1/5' />
                </div>
                <div className='text-xl flex flex-col gap-5 w-full lg:w-4/5'>
                    <p>Our organization have well experinced & disciplined staffs who have the ability to accomplish the given
                        activities in due deligence.</p>
                    <p>Fitsum Printing & Advertisng commands in themarket is thanks to the highly professionalteam members who are dedicated to ensuring client
                        satisfaction, reliability and value. Commitment to regular training and to sourcing the very best talent has been central to the continued
                        success.</p>
                    <p>Seamless integration across all business disciplines and departments, along with aculture of encouraging individual initiative and independent thinking help to achieve
                        exceptional results.</p>
                </div>
            </div>
            <div className='flex flex-col py-10 gap-5'>
                {/* <CogIcon className='w-32 text-primary-500' /> */}
                <img 
                className='w-20 md:w-32'
                src={role} 
                alt="Role Icon" />
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-5xl font-semibold text-secondary-500'>Our Role</h1>
                    <hr className='border-2 border-secondary-500 bg-secondary-500 rounded-full w-1/5' />
                </div>
                <h1 className='text-3xl md:text-4xl'>We Create synergy with other organizations</h1>
                <div className='flex justify-center'>
                    <img src={roleImage} alt="How We Create Things" />
                </div>
            </div>
        </div>
    )
}
