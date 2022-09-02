import React, { useRef, useState, useEffect } from 'react'

// Images
import img1 from '../assets/images/Contact/Contact Us Random.webp'
import img2 from '../assets/images/Contact/Office pic.jpg'
// Components
import Modal from '../components/contact/Modal'
// Icons
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
// Styles
import 'react-accessible-accordion/dist/fancy-example.css';
import 'animate.css';
// Aos Library
import aos from 'aos';
import "aos/dist/aos.css"

export default function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0)
    // executeScroll
    aos.init({ duration: 1000 })
  }, []);
  return (
    <div className='w-full overflow-x-hidden overflow-y-hidden'>
      {/* Section */}
      <section>
        <div className='relative md:min-h-screen h-[50rem]'>
          <div className='w-full relative h-96 flex flex-row z-10 border gray-200'>
            <div className='bg-gray-100 w-full flex flex-col md:justify-center items-start gap-6 px-5 md:px-20 py-20 animate__animated animate__fadeInLeft'>
              <h1 className='text-3xl md:text-6xl font-semibold'>Contact Us</h1>
              <p className='text-base md:text-xl'>Get in touch with us through text, call <br className='md:hidden' /> or sending us a message</p>
            </div>
            <div className='hidden w-full md:flex justify-center items-center animate__animated animate__fadeInRight  animate__delay-1s'>
              <img
                src={img1}
                alt="Contact Us" />
            </div>
          </div>
          <div className='absolute top-80 h-auto w-full z-10 flex flex-col md:flex-row justify-evenly gap-5 md:gap-0 px-5'>
            {/* Box One Call Us */}
            <div className='relative w-full md:w-1/3 h-auto flex flex-col gap-5 items-center px-10 py-10 bg-gray-50 shadow-2xl border border-gray-200 animate__animated animate__fadeInUp'>
              <div className='w-full flex flex-col gap-1 items-center text-gray-600'>
                <PhoneIcon className='w-20' />
                <h1 className='text-xl'>Talk to Customer Service</h1>
              </div>
              <div>
                <p className='text-gray-600'>Call us through these phones and ask any questions you want to know about </p>
              </div>
              <div className='flex flex-col gap-5'>
                <a href='tel:+251911753962' className='text-secondary-500 font-semibold hover:underline'>+251 911 753 962</a>
                <a href='tel:+251902276627' className='text-secondary-500 font-semibold hover:underline'>+251 902 276 627</a>
                <a href='tel:+251902278827' className='text-secondary-500 font-semibold hover:underline'>+251 902 278 827</a>
              </div>
            </div>
            {/* Box Two */}
            <div className='relative w-full md:w-1/3 h-auto flex flex-col gap-5 items-center px-10 py-10 bg-gray-50 shadow-2xl border border-gray-200  animate__animated animate__fadeInUp animate__delay-1.5s'>
              <div className='w-full flex flex-col gap-1 items-center text-gray-600'>
                <MailIcon className='w-20' />
                <h1 className='text-xl'>Send Us an E-mail</h1>
              </div>
              <div>
                <p className='text-gray-600'>Send us an E-email, with your name, phone (Optional) and message explaining what you want in detail </p>
              </div>
              <div className='flex flex-col gap-5'>
                <Modal />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section */}
      <section
      data-aos='fade-up'
      data-aos-delay='200'
      >
        <div className='relative w-full h-auto flex flex-col items-center bg-white pt-80 md:py-10 gap-10 border border-gray-200 '>
          <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='text-2xl md:text-5xl text-gray-800 text-center font-semibold'>Connect with Our Physical Office</h1>
            <hr className='border-2 border-gray-500 bg-gray-500 w-1/4 rounded-xl' />
          </div>
          <div className='w-full h-auto px-5 md:px-28 '>
            <div className='relative w-full md:h-[82vh] md:grid grid-cols-12 border border-gray-300 shadow-xl'>
              <div className='w-full h-auto bg-slate-700 col-span-8 border border-gray-200'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1469.130074057898!2d38.791668391574696!3d9.021367451232171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850fa5a07cab%3A0x466c325b95cec544!2sFitsum%20Printing%20%26%20Advertising!5e0!3m2!1sen!2set!4v1661630845731!5m2!1sen!2set"
                  width="100%"
                  className='h-96 md:h-[39rem]'
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className='w-full h-auto bg-[#F5F8FA] col-span-4 px-5 md:px-10 py-5 md:py-10 flex flex-col gap-5 '>
                {/* Office Address */}
                <div className='flex flex-col items-start gap-5'>
                  <h1 className='text-2xl md:text-3xl font-semibold'>Head Offce</h1>
                  <div className='flex flex-col gap-1 text-lg font-light'>
                    <p>Meseret Building</p>
                    <p>Kenenisa Ave</p>
                    <p>Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                {/* Phone Address */}
                <div className='flex flex-col items-start gap-5'>
                  <h1 className='text-2xl md:text-3xl font-semibold'>Phone / Fax</h1>
                  <div className='flex flex-col gap-1 text-lg font-light'>
                    <a href='tel:+251911753962' className='hover:underline hover:text-primary-500'>+251 911 753 962</a>
                    <p>Fax Number</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
      <section data-aos='fade-up'>
        <div id='office' className='w-full h-auto bg-white px-5 md:px-32 py-10'>
          <Accordion
            className='bg-white'
          >
            <AccordionItem
              className='bg-white'
            >
              <AccordionItemHeading
              >
                <AccordionItemButton
                  style={{
                    background: 'white',
                    fontSize: '25px',
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: 'start'
                  }}
                >
                  How to find this Office
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className='flex flex-col gap-5'>
                  <div className=' items-start md:items-end'>
                    <h1 className='text-lg inline font-semibold'>Driving: </h1>
                    <p className=' inline font-light md:font-normal'>Refer to directions provided by 
                      <a href='https://www.google.com/maps/dir//2QCR%2BHVQ+Fitsum+Printing+%26+Advertising,+Addis+Ababa/@9.0214663,38.7916879,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b850fa5a07cab:0x466c325b95cec544!2m2!1d38.7922364!2d9.0214663' target='blank' className='text-primary-500 font-semibold'>Google Maps.</a>
                    </p>
                  </div>
                  <div className=' gap-2 items-end'>
                    <h1 className='text-lg inline font-semibold'>Public Transportation: </h1>
                    <p className='inline font-light md:font-normal'>The Closest option for public transportation is to get a taxi that goes to <span className='text-primary-500 font-semibold'>Kazanchis</span>  from <span className='text-primary-500 font-semibold'>Megenagna.</span></p>
                  </div>
                  <div>
                    <h1 className='text-xl font-semibold inline'>Parking: </h1>
                    <p className='inline'>You can park anywhere starting from shola to the Sumeya Mosque </p>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Section */}
      <section 
      data-aos='fade-up'
      data-aos-delay='150'
      >
        <div className='w-full relative h-auto px-5 md:px-20 py-10 md:py-5 bg-gray-100'>
          <div className='h-auto flex flex-col md:flex-row '>
            <div className='h-80 w-full overflow-hidden py-5'>
              <img className=' w-auto' src={img2} alt="Place Holder" />
            </div>
            <div className=' w-full px-  md:px-20 py-5 flex flex-col gap-5'>
              <h1 className='text-2xl font-semibold'>Addis Ababa, Ethiopia (Main Office)</h1>
              <div className='flex flex-col items-start gap-2'>
                <h1 className='text-2xl font-semibold'>Address</h1>
                <div className='flex flex-col gap-1  font-light'>
                  <p>Meseret Building</p>
                  <p>Kenenisa Ave</p>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className='flex flex-col items-start gap-2'>
                <h1 className='text-2xl  font-semibold'>Phone / Fax</h1>
                <div className='flex flex-col gap-1 font-light'>
                  <a href='tel:+251911753962' className='hover:underline hover:text-primary-500'>+251 911 753 962</a>
                  <p>Fax Number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
