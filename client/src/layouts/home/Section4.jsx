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
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Data
import Role from '../../data/Role';

// hooks
import useWindowResize from '../../hooks/useWindowResize';


function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  export default function FourthContent() {

    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [workTiles, setWorkTiles] = useState(1);
    const windowResize = useWindowResize();

    function checkWidth(){
        if(windowResize >= 640){
            return 2;
        }else if(windowResize >= 1024){
            return 3;
        }
    }

    useEffect(() => {
        function handleWindowResize(){
            setWindowSize(checkWidth());
            console.log(workTiles)
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
    

    },[]);
  
  return (
    <div data-aos="slide-up" className='w-full relative bg-gray-200 flex-col px-5 py-5 sm:grid grid-cols-12 items-center'>
        <div className='sm:hidden flex flex-row  justify-between'>
            <ArrowNarrowLeftIcon className='w-10'/>
            <ArrowNarrowRightIcon className='w-10'/>
        </div>
        <div className='hidden sm:inline'>
            {/* <FiArrowLeft 
            className='hover:text-primary-500 cursor-pointer  w-20 h-16'/> */}
        </div>
        <div className='col-span-10 py-5'>
            <Swiper
                navigation={true}
                slidesPerView={workTiles}
                spaceBetween={30}
                autoplay={{
                    delay: 5000,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                >
               {
                Role.map((item)=>(
                    <SwiperSlide
                    className=''
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
            {/* <FiArrowRight
            className='hover:text-primary-500 cursor-pointer w-20 h-16'/> */}
        </div>

    </div>
  )
}
