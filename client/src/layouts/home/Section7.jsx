import React from 'react'
import CompanyCardHolder from '../../components/CompanyCardHolder'
import CompanyCards from '../../components/CompanyCards'
import aos from 'aos';
import { useEffect } from 'react';

// Company Worked For Images
import logo1 from '../../assets/images/Compnays/1.png'
import logo2 from '../../assets/images/Compnays/2n.jpg'
import logo3 from '../../assets/images/Compnays/3.jpg'
import logo4 from '../../assets/images/Compnays/4.png'
import logo5 from '../../assets/images/Compnays/5.png'
import logo6 from '../../assets/images/Compnays/6n.jpg'
import logo7 from '../../assets/images/Compnays/7.png'
import logo8 from '../../assets/images/Compnays/8 n.jpg'
import logo9 from '../../assets/images/Compnays/9.png'
import logo10 from '../../assets/images/Compnays/10.png'
import logo11 from '../../assets/images/Compnays/11.png'
import logo12 from '../../assets/images/Compnays/12.jpg'

export default function SectionSeven() {
  
  useEffect(()=>{
    aos.init({duration:1000})
  })
  
  return (
    <div data-aos="fade-down" className='w-full relative h-auto  bg-[#E4F8F2] flex flex-col items-center gap-5 py-5'>
      <div className='flex flex-col gap-2 lg:gap-5'>
        <h1 className='text-3xl lg:text-5xl text-center'>Some of our <span className='text-primary-500'>Satisfied Clients</span></h1>
        <hr className='border-2 border-primary-500 bg-primary-500 w-1/4 m-auto rounded-full' />
      </div>
      {/* Company List For PC*/}
      <div className='hidden w-96 lg:w-full h-auto  lg:grid grid-cols-1 lg:grid-cols-7 gap-10'>
        <CompanyCardHolder />
        <div className='w-full h-full hidden lg:flex flex-col md:py-56'>
          <CompanyCards image={logo8} />
        </div>
        <div className='w-full h-full  flex flex-col gap-12 lg:py-36'>
          <CompanyCards image={logo4} />
          <CompanyCards image={logo5} />
        </div>

        <div className='w-full h-full  flex flex-col gap-12 lg:py-12'>
          <CompanyCards image={logo1} />
          <CompanyCards image={logo2} />
          <CompanyCards image={logo3} />
        </div>

        <div className='w-full h-full  flex flex-col gap-12 lg:py-36'>
          <CompanyCards image={logo6} />
          <CompanyCards image={logo7} />
        </div>

        <div className='w-full h-full hidden lg:flex flex-col md:py-56'>
          <CompanyCards image={logo10} />
        </div>
        <CompanyCardHolder />
      </div>

      {/* Company List for Phone */}
      <div className='lg:hidden w-full px-5 lg:w-full h-auto flex flex-col items-center gap-2'>
      
        <div className='w-[60vw] m-auto'>
          <CompanyCards image={logo5} />
        </div>
      
        <div className='w-full my-1'>
          <div className='w-[75vw] m-auto'>
            <CompanyCards image={logo1} />
          </div>
          
          <div className='w-full m-auto my-2'>
            <CompanyCards image={logo2} />
          </div>

          <div className='w-[75vw] m-auto'>
            <CompanyCards image={logo3} />
          </div>
        </div>

        <div className='w-[60vw] m-auto'>
          <CompanyCards image={logo4} />
        </div>

      </div>
    
    </div>
  )
}
