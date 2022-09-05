import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { Link, useNavigate } from 'react-router-dom';
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightIcon } from '@heroicons/react/outline';
import ScrollTrigger from 'react-scroll-trigger';
import { useTransition, animated } from 'react-spring';

// Aos Library
import aos from 'aos';
import "aos/dist/aos.css"
// Styles
import '../assets/styles/pattern.css'
import '../assets/styles/FourthContentStyle.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import 'animate.css';
// Data
import works from '../data/Works';
import Role from '../data/Role';
import Section8Data from '../data/Section8';
// hooks
import useWorkTiles from '../hooks/useWorkTiles';
// Components
import ImageCounter from '../components/home/Section1/ImageCounter'
import SectionOneSlider from '../components/home/Section1/SectionOneSlider';
import WorksBox from '../components/WorksBox';
import CompanyCardHolder from '../components/CompanyCardHolder'
import CompanyCards from '../components/CompanyCards'
// Images
import image from '../assets/images/Horizontal Image/Horizontal Image.png'

// Company Worked For Images
import logo1 from '../assets/images/Compnays/1.jpg'
import logo2 from '../assets/images/Compnays/2.jpg'
import logo3 from '../assets/images/Compnays/3.jpg'
import logo4 from '../assets/images/Compnays/4.jpg'
import logo5 from '../assets/images/Compnays/5.jpg'
import logo6 from '../assets/images/Compnays/6.jpg'
import logo7 from '../assets/images/Compnays/7.png'
import logo8 from '../assets/images/Compnays/8.png'
import logo9 from '../assets/images/Compnays/9.jpg'
import logo10 from '../assets/images/Compnays/10.png'
import logo11 from '../assets/images/Compnays/11.jpg'
import logo12 from '../assets/images/Compnays/12.jpg'
import logo13 from '../assets/images/Compnays/13.jpg'
import logo14 from '../assets/images/Compnays/14.jpg'
import logo15 from '../assets/images/Compnays/15.jpg'
import logo16 from '../assets/images/Compnays/16.png'


import logo from '../assets/images/logo/Fitsum Colred Logo_Own Color.png'
import flogo from '../assets/images/logo/F Only Colored Logo.png'
import CardsSection8 from '../components/home/CardsSection8';

// Icons
import location from '../assets/images/About Us/Icons/1location.png'
import {
  ClockIcon,
  LocationMarkerIcon,
  PhoneIcon
} from '@heroicons/react/outline'


// Functions
function checkName(id) {
  let name = '';
  let color = '';
  let style = '';
  let color2 = '';

  name = works[id - 1]['name'];
  color = works[id - 1]['color'];
  style = works[id - 1]['textStyle'];
  color2 = works[id - 1]['color2'];


  let currentArr = [name, color, style, color2];
  return currentArr;
}

export default function Home() {
  // Navigate function for navigateion to pages
  let navigate = useNavigate();
  // Determine worktiles number 1-3
  const tiles = useWorkTiles();

  let [nid, setNid] = useState(1);

  const executeScroll = () => myRef.current.scrollIntoView()

  const [companyIn, setCompanyIn] = useState(true);
  const transition = useTransition(companyIn, {

  });


  // Functions
  const changePage = () => {
    let path = 'about';
    navigate(path);
  }

  // useEffect to scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
    executeScroll
    aos.init({ duration: 1000 })
  }, []);
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  return (
    // Whole Home Body
    <div className='bg-white flex flex-col overflow-hidden'>
      {/* Section */}
      <section className='min-h-screen animate__animated animate__backInDown'>
        <div className='relative'>
          <div className=' flex flex-col gap-8 absolute py-10 sm:py-20 pl-1 md:py-10 lg:py-20 md:pl-5 lg:pl-20 md:w-full w-full z-30'>
            <div className='sm:hidden text-[40px] md:text-7xl  w-full  md:w-full mb-4 font-medium font-sans text-gray-900 flex flex-col gap-2 md:gap-5'>
              <h1>Producing Different
                <br className='mb-5' /> Kind of <br className='block sm:hidden' /><span
                  style={{
                    background: checkName(nid)[1]
                  }}
                  className={checkName(nid)[2]}>{checkName(nid)[0]}</span></h1>
              <h1>with quality</h1>
            </div>

            <div className='hidden text-[40px] md:text-6xl lg:text-7xl  w-full  md:w-full mb-4 font-medium text-gray-900 sm:flex flex-col gap-2 sm:gap-8'>
              <h1>Producing Different</h1>
              <h1> Kind of <br className='block sm:hidden' /><span
                style={{
                  background: checkName(nid)[1]
                }}
                className={checkName(nid)[2]}>{checkName(nid)[0]}</span></h1>
              <h1>with quality</h1>
            </div>

            <ImageCounter work={works} current={nid} />
          </div>
          <SectionOneSlider countt={setNid} color={checkName(nid)[3]} />
          <div className='w-52 h-52 absolute  top-10 md:top-20 right-1 md:left-1 pattern-dots-md text-secondary-600'>
          </div>
        </div>
      </section>

      {/* Section */}
      <section>
        <div className='w-full relative bg-white sm:px-10 py-10'>
          <section className='w-full h-auto flex flex-col md:flex-row'>
            <div data-aos="fade-right" className='w-full h-auto md:py-10 px-5 md:pl-0 lg:pl-0'>
              <h1 className='text-4xl md:text-5xl 2xl:text-6xl font-light tracking-wide'>A <span className='font-semibold text-primary-500'>full-service printing experience</span> build on top of experience and professionalism. </h1>
            </div>
            <div data-aos="fade-left" className='flex flex-col gap-1 items-start w-full h-auto py-10 text-lg xl:text-xl 2xl:text-xl space-y-10 px-5 2xl:pl-20 md:px-0'>
              <p>Our strong reputation is built on the successful delivery of all assignments, no matter how challenging the brief or how tight the timeframe. From business cards to corporate brochures, we collaborate with the customer to understand their requirements fully and to provide the optimal results using the highest specifications appropriate for their budget.We pride ourselves on professionalism, loyalty and a commitment to upholding the needs of our clients. We Pride ourselves on professionalism, loyality and a commitment to upholding the needs of our clients</p>
              {/* <p></p> */}
              <button onClick={changePage} className='px-3 py-4 bg-primary-500 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl '>More About Us </button>
            </div>
          </section>
        </div>
      </section>

      {/* Section */}
      <section data-aos="slide-up">
        <div className='w-full relative bg-gray-200 flex-col px-5 py-20 sm:grid grid-cols-1 items-center'>
          <div className='col-span-10 py-5 px-1 md:px-10'>
            <Swiper
              navigation={true}
              slidesPerView={tiles}
              spaceBetween={30}
              autoplay={{
                delay: 7000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {
                Role.map((item) => (
                  <SwiperSlide
                    className=''
                    key={item.id}
                  >
                    <WorksBox
                      className=""
                      key={item.id}
                      icon={item.icon}
                      name={item.name}
                      description={item.description}
                      img1={item.img1}
                      img2={item.img2}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </section>

      {/* Section */}
      <section data-aos="zoom-in">
        <div className='w-full min-h-[40rem] md:min-h-screen py-10 px-1 md:px-5'>
          {/* Behind the Scene Box */}
          <div className='absolute w-[50%] md:w-[30%] h-80 bg-gray-300 mt-56'>

          </div>
          {/* Middle Box */}
          <div className='my-20 relative w-full md:w-[80%] h-80 sm:h-[35vw] m-auto overflow-hidden pattern-dots-md text-primary-500'>
            <img
              style={{
                transform: 'translate(30px, 30px)'
              }}
              src={image} alt="Works Image" />
          </div>
          {/* Text Box */}
          <div className='absolute -mt-52  md:mx-20 w-[80%] mx-5 md:w-[30%] h-52 px-10 py-5 space-y-5 bg-gray-50 shadow-xl '>
            <h1 className='text-4xl '>See The Works Done</h1>
            <Link
              to={"/gallery"}
              className='flex items-center text-xl gap-5  hover:text-primary-500'>View Gallery <ArrowRightIcon className="w-5" /></Link>
          </div>
        </div>
      </section>

      {/* Section */}
      <section
        data-aos='zoom-in'
        className='relative'>
        <div className='absolute h-[20rem] w-[28rem] top-28 md:top-0 right-0 pattern-dots-md text-green-600'>

        </div>
        <div className='absolute h-[20rem] w-[28rem] bottom-0 left-0 pattern-dots-md text-primary-500'>

        </div>
        <div className='w-full relative h-auto  flex flex-col items-center gap-16 py-5'>
          <div className='flex flex-col gap-2 lg:gap-5'>
            <h1 className='text-4xl lg:text-5xl text-center'>Some of our <span className='text-primary-500'>Satisfied Clients</span></h1>
            <hr className='border-2 border-primary-500 bg-primary-500 w-1/4 m-auto rounded-full' />
          </div>
          {/* Company List For PC*/}
          <ScrollTrigger onEnter={() => {
            // console.log("Enterrd")
            // console.log(companyIn)
            setCompanyIn(true)
          }}>
            <div className='hidden w-full h-auto  lg:grid grid-cols-1 lg:grid-cols-8 gap-5 min-h-screen px-5'>
              <div className=' w-full flex flex-col justify-center gap-5 pb-44'>
                <CompanyCards image={logo11}/>
                <CompanyCards image={logo4} />
                <CompanyCards image={logo1} />
              </div>
              <div className=' w-full flex flex-col gap-5 justify-center'>
                <CompanyCards image={logo5} />
                <CompanyCards image={logo6} />
                <CompanyCards image={logo7} />
              </div>
              <div className=' w-full flex flex-col justify-center gap-5'>
                <CompanyCards image={logo3} />
                <CompanyCards
                 image={logo14} />
              </div>
              <div className=' w-full col-span-2 flex flex-col justify-center pb-44'>
                {companyIn && <CompanyCards image={flogo} pad={'64px'} />}
                {transition((style, item) => {
                  item ? <animated.div style={style}><CompanyCards image={flogo} pad={'64px'} /></animated.div> : ''
                })}

              </div>
              <div className=' w-full flex flex-col items-center justify-center gap-5'>
                <CompanyCards image={logo15} />
                <CompanyCards image={logo2} />
              </div>
              <div className=' w-full flex flex-col gap-5 justify-center'>
                <CompanyCards image={logo8} />
                <CompanyCards image={logo9} />
                <CompanyCards image={logo10} />
              </div>
              <div className=' w-full flex flex-col justify-center gap-5 pb-44'>
                <CompanyCards image={logo12} />
                <CompanyCards image={logo13} />
                <CompanyCards image={logo16} />
              </div>
            </div>
          </ScrollTrigger>
          {/* Company List for Phone */}
          <div className='lg:hidden w-full px-5 lg:w-full h-auto flex flex-col items-center gap-2'>

            <div className='w-[60vw] m-auto'>
              <CompanyCards image={logo10} />
            </div>

            <div className='w-full my-1'>
              <div className='w-[75vw] m-auto'>
                <CompanyCards image={logo1} />
              </div>

              <div className='w-full m-auto my-2'>
                <CompanyCards image={logo14} />
              </div>

              <div className='w-[75vw] m-auto'>
                <CompanyCards image={logo15} />
              </div>
            </div>

            <div className='w-[60vw] m-auto'>
              <CompanyCards image={logo4} />
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
      <section
        data-aos='zoom-out-up'
        data-aos-delay='200'
        className="text-gray-600 body-font">
        <div className="container grid sm:grid-cols-2  py-5 mx-auto">
          {/* Left Part */}
          <div className="flex flex-col  w-full mb-20 sm:mb-0 pt-10 ">
            <img className='w-full' src={logo} alt="Fitsum Advert Logo" />
          </div>
          {/* Roght Part */}
          <div className="grid sm:grid-cols-2 gap-5 text-center">
            {
              Section8Data.map((items) => (
                <CardsSection8
                  key={items.id}
                  id={items.id}
                  name={items.name}
                  desc={items.desc}
                  num={items.num}
                  duration={items.duration}
                />
              ))
            }
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="text-gray-600 body-font relative">
        <div className='min-h-screen px-5 md:px-5 lg:px-20 py-5 lg:py-10 flex flex-col gap-10'>
          <div className='flex flex-col gap-5'>
            {/* <LocationMarkerIcon className='w-32 text-primary-500'/> */}
            <img
              className='w-32'
              src={location}
              alt="Location Icon" />
            <h1 className='text-4xl text-green-600'>Our Location</h1>
            <hr className='border-2 border-green-600 bg-green-600 w-1/5 ' />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1469.130074057898!2d38.791668391574696!3d9.021367451232171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850fa5a07cab%3A0x466c325b95cec544!2sFitsum%20Printing%20%26%20Advertising!5e0!3m2!1sen!2set!4v1661630845731!5m2!1sen!2set"
            width="100%"
            className='h-96 md:h-[30rem]'
            // height="600px" /
            // style="border:0" 
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20'>
            {/* Contact Section */}
            <div className=' h-auto flex flex-col gap-5 items-start'>
              <div className='flex gap-2'>
                <PhoneIcon className='w-10 text-green-600' />
                <h1 className='text-3xl text-green-600'>Contact</h1>
              </div>
              <a href='tel:+251911753962' className='bg-green-600 px-16 py-3 text-white w-auto hover:shadow-xl transition ease-in-out delay-150 cursor-pointer  hover:-translate-y-1 hover:scale-110  duration-150 '>Call Now</a>
              <div className='flex flex-col gap-1'>
                <a href='tel:+251911753962' className='hover:underline hover:text-green-600 cursor-pointer'>+251 911 753 962</a>
                <a href='tel:+251902276627' className='hover:underline hover:text-green-600 cursor-pointer'>+251 902 276 627</a>
                <a href='tel:+251902278827' className='hover:underline hover:text-green-600 cursor-pointer'>+251 902 278 827</a>
              </div>
            </div>
            {/* Address Section  */}
            <div className=' h-auto flex flex-col gap-5 items-start'>
              <div className='flex gap-2'>
                <LocationMarkerIcon className='w-10 text-green-600' />
                <h1 className='text-3xl text-green-600'>Address</h1>
              </div>
              <a href='https://www.google.com/maps/dir//2QCR%2BHVQ+Fitsum+Printing+%26+Advertising,+Addis+Ababa/@9.0214663,38.7916879,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b850fa5a07cab:0x466c325b95cec544!2m2!1d38.7922364!2d9.0214663' target='blank' className='bg-green-600 px-12 md:px-14 lg:px-14  py-3 text-white w-auto hover:shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150'>Get Directions</a>

              <div>
                <p>Shola</p>
                <p>Meseret Building</p>
                <p>Kenenisa Ave</p>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
            {/* Bussiness Hours Section */}
            <div className=' h-auto flex flex-col gap-5 items-start'>
              <div className='flex gap-2'>
                <ClockIcon className='w-10 text-green-600' />
                <h1 className='text-3xl text-green-600'>Office Hours</h1>
              </div>
              <Link
                to='/contact#office'
                className='bg-green-600 px-16 py-3 text-white w-auto hover:shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150'>View Office</Link>
              <div>
                <p>Monday - Friday: 2am - 12pm</p>
                <p>Saturday: 2am - 6am</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
