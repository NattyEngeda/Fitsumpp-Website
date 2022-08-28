import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import aos from 'aos'
import "aos/dist/aos.css"

export default function SectionThree() {

  
let navigate = useNavigate();
const changePage = () => {
  let path = 'about';
  navigate(path);
}


  return (
    <div data-aos="fade-up" className='w-full relative bg-white sm:px-10'>
        <section className='w-full h-auto flex flex-col md:flex-row'>
          <div className='w-full h-auto md:py-10 px-5 md:pl-0 lg:pl-0'>
              <h1 className='text-4xl md:text-5xl font-light tracking-wide'>A <span className='font-semibold text-primary-500'>full-service printing experience</span> build on top of experience and professionalism. </h1>
          </div>
          <div className='flex flex-col items-start w-full h-auto py-10 text-lg space-y-10 px-5 2xl:pl-20 md:px-0'>
              <p>Our strong reputation is built on the successful delivery of all assignments, no matter how challenging the brief or how tight the timeframe. From business cards to corporate brochures, we collaborate with the customer to understand their requirements fully and to provide the optimal results using the highest specifications appropriate for their budget.We pride ourselves on professionalism, loyalty and a commitment to upholding the needs of our clients</p>
              <button onClick={changePage} className='px-3 py-4 bg-primary-500 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl '>More About Us </button>
          </div>
        </section>
    </div>
  )
}
