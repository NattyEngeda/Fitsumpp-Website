import React from 'react'
import FadeIn from '../../components/home/FadeIn'
import Fadeintest from '../../tests/Fadeintest'
import  { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import aos from 'aos';

export default function SectionTwo() {
    let navigate = useNavigate();

    const changePage = () => {
        let path = '/order'
        navigate(path);
    }

        useEffect(() => {
        aos.init({duration: 1000});
    },[]);
  
  return (
    <div data-aos="slide-up" className='w-full relative h-auto bg-white'>
        <section className='w-full flex flex-col md:flex-row justify-center items-center h-auto py-10 md:h-[70vh]'>
            <div className='h-full w-full md:flex hidden'>
                <div className='relative w-[35%] h-[90%]  m-auto bg-pink-300'>
                    <FadeIn/>
                    {/* <Fadeintest/> */}
                </div>
            </div>
            <div className='h-full w-full flex'>
                <div className='w-full md:w-[90%] lg:w-[60%] px-5 md:px-0  sm:my-auto  h-auto sm:h-[80%] bg-gary-50 md:space-y-4 flex flex-col justify-start items-start gap-10'>
                <h1 className='text-3xl'>Printing & Advertisements of any Types</h1>
                <p className='text-base'>Business Cards, Corporate brouchers, Tea glasses, Sanitizer pens, Door signs, Cake toppers,  LED displays, Car Branding, Notice boards, Acrylic engraving & golden painting, Callanders and many more ...</p>
                <button onClick={changePage} className='px-5 py-3 bg-primary-500 text-gray-50 shadow-md hover:shadow-lg'>Order Now</button>
                </div>
            </div>
        </section>
    </div>
  )
}
