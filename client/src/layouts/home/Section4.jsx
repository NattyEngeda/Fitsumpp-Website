import React, { useEffect, useState } from 'react'
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline/';
import { FiArrowRight,FiArrowLeft } from 'react-icons/fi'
import { Swiper, SwiperSlide } from "swiper/react";
import WorksBox from '../../components/WorksBox';
import aos from 'aos';
import { Navigation,Autoplay,Pagination } from "swiper";

import '../../assets/styles/FourthContentStyle.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Data
import Services from '../../data/Services';
import Role from '../../data/Role';


function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
function checkWidth(){
    if(getWindowSize().innerWidth >= 783){
        return 3;
    }else if(getWindowSize().innerWidth >= 1024){
        return 3;
    }
}
  export default function FourthContent() {

    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [workTiles, setWorkTiles] = useState(checkWidth());
    
    useEffect(() => {
        function handleWindowResize(){
            setWindowSize(getWindowSize());
            if(getWindowSize().innerWidth >= 783){
                setWorkTiles(2);
            }else if(getWindowSize().innerWidth >= 1024){
                setWorkTiles(3);
            }
        }
        
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
          };
    aos.init({
        duration: 1000
    })

    },[]);
  
  return (
    <div data-aos="slide-up" className='w-full relative bg-gray-200 flex-col px-5 py-5 sm:grid grid-cols-12 items-center'>
        <div className='sm:hidden flex flex-row  justify-between'>
            <ArrowNarrowLeftIcon className='w-10'/>
            <ArrowNarrowRightIcon className='w-10'/>
        </div>
        <div className='hidden sm:inline'>
            <FiArrowLeft 
            className='hover:text-primary-500 cursor-pointer  w-20 h-16'/>
        </div>
        <div className='col-span-10   py-5'>
            <Swiper
                navigation={false}
                slidesPerView={workTiles}
                spaceBetween={30}
                autoplay={{
                    delay: 5000,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
                >
               {
                Role.map((item)=>(
                    <SwiperSlide
                    key={item.id}
                    >
                        <WorksBox 
                        key={item.id}
                        icon={item.icon}
                        name={item.name}
                        description={item.description}
                        />
                    </SwiperSlide>
                ))
               }
            </Swiper>
        </div>
        <div className='hidden sm:inline'>
            <FiArrowRight
            className='hover:text-primary-500 cursor-pointer w-20 h-16'/>
        </div>

    </div>
  )
}
