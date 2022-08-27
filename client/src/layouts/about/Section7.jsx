import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay,Pagination } from "swiper";


import award from '../../assets/images/About Us/Icons/1Awards.png';
import Awards from '../../data/Awards';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";





export default function Section7() {
  return (
    <div className='w-full flex flex-col min-h-screen  py-5 sm:px-5 md:px-20'>
      <div className='flex flex-col gap-10'>
       <div className='px-5 sm:px-0'>
          <img
            className='w-20 md:w-32 '
            src={award}
            alt="Award Icon" />
          <div className='flex flex-col gap-5'>
            <h1 className='text-3xl md:text-5xl text-[#FFA200]'>Awards</h1>
            <hr className='border-2 border-[#FFA200] bg-[#FFA200] rounded-full w-1/5 ' />
          </div>
        </div>
        {/* Above sm: Content */}
        <div className='hidden sm:grid grid-col-1 sm:grid-cols-2 lg  lg:grid-cols-3 gap-10'>
          {
            Awards.map((item) => (
              <div
                key={item.id}
                className='w-full bg-gray-50 h-60 rounded-2xl shadow-md border border-gray-200 hover:shadow-2xl cursor-pointer flex justify-center items-center transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300 '>
                <img
                  className='w-auto h-full'
                  src={item.image}
                  alt="Awards Image" />
              </div>
            ))
          }
        </div>
        {/* Mobile Content */}
        <div className='pb-5 sm:hidden'>
            <Swiper
                navigation={false}
                slidesPerView={1}
                spaceBetween={30}
                
                autoplay={{
                    delay: 1500,
                }}
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Autoplay,Pagination,Navigation]}
                className="mySwiper"
                >
              {
            Awards.map((item) => (
              <SwiperSlide className='px-10 py-10'><div
                key={item.id}
                className='w-full bg-gray-100 h-full py-10 rounded-none shadow-md border border-gray-200 hover:shadow-2xl cursor-pointer flex justify-center items-center '>
                <img
                  className='w-auto h-full'
                  src={item.image}
                  alt="Awards Image" />
              </div>
              </SwiperSlide>
            ))
          }
            </Swiper>
        </div>

      </div>
    </div>
  )
}
