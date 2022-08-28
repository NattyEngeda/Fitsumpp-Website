import React from 'react'
import { useState } from 'react';

import { ImageOverlay } from 'react-image-overlay-effect'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay,Pagination } from "swiper";


// CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Images
import machine from '../../assets/images/About Us/Icons/1Machine.png';

// Data
import MachineNames from '../../data/MachineNames';
export default function Section9() {
    const [active, setActive] = useState('mach-1');



    return (
        <div className='relative w-full min-h-screen bg-gray-100 pb-10'>
            <div className='py-5 md:py-10 px-5 md:px-20 flex flex-col gap-5'>
                <img
                    className='w-28 md:w-32'
                    src={machine}
                    alt="Machine Icon" />
                <div className='flex flex-col gap-5'>
                    <h1 className='text-3xl md:text-5xl'>Current <span className='text-primary-500'>Printing Machines</span></h1>
                    <hr className='border-2 border-primary-500 bg-primary-500 rounded-full w-1/4 ' />
                </div>
            </div>
            {/* Web View Content */}
            <div className='hidden relative w-full h-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:px-20 py-5'>
                {
                    MachineNames.map((item) => (
                        <div
                            key={item.id}
                            className='overflow-hidden flex items-center justify-center bg-white bg-repeat w-full h-auto bg-gray-3 rounded-xl cursor-pointer hover:shadow-xl transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300 '
                        >
                            <ImageOverlay
                                className='h-auto w-full flex items-center justify-center object-cover'
                                src={item.image}
                                description={<p className='text-2xl md:text-3xl text-white font-bold'>{item.name}</p>}
                            />
                            {/* <img src={item.image} alt={item.name} />        */}
                        </div>
                    ))
                }
            </div>
            {/* Mobile View Content */}
            <div className='sm:hidden'>
                <Swiper
                    navigation={false}
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 5000,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Autoplay,Pagination]}
                    className="mySwiper"
                >
                    {
                        MachineNames.map((item) => (
                        <SwiperSlide 
                        key={item.id}
                        className='px-5 pb-8'>
                            <div
                                className='w-full bg-gray-100 h-full py-0 rounded-none shadow-md border border-gray-200 hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center '>
                                    <img
                                    className='w-auto h-full'
                                    src={item.image}
                                    alt="Awards Image" />
                                    <div className='py-5'>
                                        <p className='text-xl'>{item.name}</p>
                                    </div>
                        </div>
                        </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}
