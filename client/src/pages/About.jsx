import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { ImageOverlay } from 'react-image-overlay-effect'

// Aos Library
import aos from 'aos';
import "aos/dist/aos.css"
// Images
import fullLogo from '../assets/images/logo/Fitsum Colred Logo_Own Color2.png'
import img1 from '../assets/images/About Us/Section 2.webp'
import mission from '../assets/images/AboutPageIcons/mission.png'
import vission from '../assets/images/AboutPageIcons/vission.png'
import values from '../assets/images/AboutPageIcons/values.png'
import roleImage from '../assets/images/AboutPageIcons/role.png'
import staff from '../assets/images/About Us/Icons/1Staff.png'
import role from '../assets/images/About Us/Icons/1Role.png'
import delivery from '../assets/images/About Us/Icons/1delivery.png';
import machine from '../assets/images/About Us/Icons/1Machine.png';
// Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import 'animate.css';

// Icons
import infra from '../assets/images/About Us/Icons/1infrastructure.png';
import InfraComp from '../components/about/Section6/InfraComp';
import award from '../assets/images/About Us/Icons/1Awards.png';
import Awards from '../data/Awards';
import car1 from '../assets/images/delivery/car1new.webp'
import car2 from '../assets/images/delivery/car2new.webp'
// Data
import InData from '../data/InfrastructureData';
import MachineNames from '../data/MachineNames';

export default function About() {

  const executeScroll = () => myRef.current.scrollIntoView()

  useEffect(() => {
    window.scrollTo(0, 0)
    executeScroll
    aos.init({ duration: 1000 })
  }, []);
  // Window Height calculation
  let windowHeight = window.innerHeight;
  // States
  const [active, setActive] = useState("Infa-1");
  const [isActive, setIsActive] = useState(false);
  const [mActive, setMActive] = useState("MInfa-1");
  return (
    <div className='relative min-h-screen flex flex-col overflow-x-hidden overflow-y-hidden'>
      {/* Section */}
      <section className='min-h-screen'>
      <section className='animate__animated animate__backInDown'>
        <div className='flex flex-col gap-10'>
          <div className='flex justify-center'>
            <img
              src={fullLogo}
              alt="Fitsum Advert Logo"
              className='w-full md:w-[40%] '
            />
          </div>
        </div>
      </section>

      {/* Section */}
      <section className='animate__animated animate__slideInUp h-full'>
        <div className='min-h-screen md:min-h-fit px-5 md:px-32 space-y-5 py-6 md:py-5'>
          <div className='flex flex-col gap-5 text-lg md:text-xl'>
            <p><span className='text-primary-500 font-semibold'>Fitsum Printing & Advertising P.l.C</span> is a printing & Advertisng company established on 2010 in the heart of Addis
              Ababa offering the full range of print & Adverting services to a variety of clients operating across many different
              local & international organizations sectors. We are a one-stop shop for all your printing requirements; our custom-
              ised solutions are tailored specifically to your individual needs, ensuring the best results every time throughout
              the prepress, printing, Fnishing and binding process & Advertisng products.
            </p>
            <p>At our company we believe in creating value for our customers who are looking for the highest quality of printing in
              Addis Ababa.
            </p>
            <p>
              Our strong reputation is built on the successful delivery of all assignments, no matter how challenging the brief or how
              tight the timeframe. From business cards to corporate brochures, we collaborate with the customer to understand their
              requirements fully and to provide the optimal results using the highest specifications appropriate for their budget.
            </p>
            <p>We pride ourselves on professionalism, loyalty and a commitment to upholding the needs of our clients.</p>
          </div>
        </div>
      </section>
      </section>

      {/* Section */}
      <section>
        <div className='w-full min-h-screen h-full md:h-auto relative md:block flex flex-col '>
          <div data-aot="fade-right" className='relative md:absolute md:top-20 md:left-10 w-full md:w-2/3 h-auto bg-secondary-300 z-10 py-10 px-5 md:pt-96 lg:pt-0 md:px-10 lg:pr-80 space-y-10 order-2'>
            <h1 className='text-4xl md:text-5xl font-semibold md:mt-20 lt:mt-0'>We succeed when you succeed.</h1>
            <p className='text-lg md:text-xl'>At Fitsum Advert, we approach every project with your success in mind, and we know that looks different for every client. We’ll discuss what has (and hasn’t) worked for you in the past and work together to decide what steps to take next. As your needs evolve, our varied capabilities and expertise allow us to accommodate your requests and help your business succeed.</p>
            <h1 className='text-3xl md:text-5xl font-semibold'>HELPING YOU ACHIEVE YOUR GOALS</h1>
            <p className='text-lg md:text-xl'>We see every print job as a way of
              building relationships that guarantee
              our clients’ success. Whether our
              clients are in business, government,
              educational institutions or individuals
              planning personal events that require
              professional printing, we are here to
              ensure that they achieve their goals
              by providing affordable, creative and
              high quality printing services.</p>
          </div>
          <div
            data-aos="fade-left"
            className='relative md:absolute md:top-3 md:right-10 w-full md:w-3/4 lg:w-2/4 bg-purple-500 z-20 order-1 overflow-hidden border border-gray-200 shadow-2xl'
            style={{
              height: windowHeight / 2 + windowHeight / 4,
            }}
          >
            <img
              className=' relative w-full h-auto'
              src={img1}
              alt="Section 2 Image" />
          </div>
        </div>
      </section>

      {/* Section */}
      <section>
        <div className='min-h-screen white grid grid-col-1 md:grid-cols-2 md:pt-[45rem] lg:pt-[40rem] xl:pt-64'>
          <div className='flex flex-col'>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className='h-auto w-full  flex flex-col items-start py-8  px-5 md:px-20 gap-5'>
              <img
                src={mission}
                alt="Our Mission"
                className='w-20'
              />
              <h1 className='text-4xl font-semibold text-secondary-300'>Our Mision</h1>
              <p className='text-xl'>To provide exceptional printing service
                by pursuing business through innovation & creativity that exceeds the
                expectation of our esteemed customers.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className='h-auto w-full  flex flex-col items-start py-8 px-5 md:px-20 gap-5'>
              <img
                src={vission}
                alt="Our Mission"
                className='w-20'
              />
              <h1 className='text-4xl font-semibold text-secondary-300'>Our Vision</h1>
              <p className='text-xl'>To be leader in printing & Advertising
                business by providing enhanced
                service, relationship & profitability.</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className='lg:min-h-screen h-auto w-full  flex flex-col items-start py-8  px-5 md:px-20 gap-5'>
            <img
              src={values}
              alt="Our Values"
              className='w-20'
            />
            <h1 className='text-4xl font-semibold text-secondary-300'>Our Values</h1>
            <p className='text-xl'>Delighted customers are key to our
              success & we strive to achieve this key
              every second Printing is our passion &
              hence no matter what your print need
              is, Fitsum Printing & Advertising has
              most effective print solutions.</p>
            <p className='text-xl'>So if you are just starting or expand
              ing your business, keep in mind that
              good print materials can make a new
              or small company look like a big pro
              fessional corporation and Fitsum
              Printing & Advertising P.L.C. Printing
              exists to help you do just that.</p>
          </div>
        </div>
      </section>

      {/* Section */}
      <section
        data-aos='fade-up'
        data-aos-delay='300'
      >
        <div className='w-full relative h-auto px-5 md:px-20'>
          <div className='flex flex-col gap-5'>
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
        </div>
      </section>

      <section
      data-aos='fade-up'
      data-aos-delay='300'
      >
        <div className='w-full px-5 md: md:px-20'>
          <div className='flex flex-col py-10 gap-5'>
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
      </section>

      {/* Section */}
      <section>
        <div className='flex flex-col gap-5 bg-gray-100'>
          {/* Title */}
          <div className='flex flex-col gap-3 px-5 py-5 md:px-20'>
            <img className='w-20 md:w-32' src={infra} alt="Infrastructure Icon" />
            <h1 className='text-3xl md:text-5xl text-three-500'>Infrastructure</h1>
            <hr className='border-2 border-three-500 bg-three-500 rounded-full w-1/5' />
          </div>
          {/* For Desktop View */}
          <div className='hidden relative w-full h-[30rem] lg:grid grid-cols-5 '>
            <div
              data-aos='fade-right'
              data-aos-delay='300'
              className='bg-three-400 col-span-2 shadow-xl'>
              <ul className='h-full flex flex-col items-start justify-evenly py-5 px-10 text-2xl'>
                <li className=' hover:ml-10 active:ml-10 transition-all duration-100'>
                  <button
                    onClick={() => setActive("Infa-1")}
                    style={{
                      fontWeight: active == "Infa-1" ? 'bold' : 'normal',
                      marginLeft: active == "Infa-1" ? '40px' : '0'
                    }}
                  > <p>01. Customer Service</p></button>
                </li>
                <li className=' hover:ml-10 transition-all duration-100'>
                  <button
                    onClick={() => setActive("Infa-2")}
                    style={{
                      fontWeight: active == "Infa-2" ? 'bold' : 'normal',
                      marginLeft: active == "Infa-2" ? '40px' : '0'
                    }}
                  ><p>02. Pre Press</p></button>
                </li>
                <li className=' hover:ml-10 transition-all duration-100'>
                  <button
                    onClick={() => setActive("Infa-3")}
                    style={{
                      fontWeight: active == "Infa-3" ? 'bold' : 'normal',
                      marginLeft: active == "Infa-3" ? '40px' : '0'
                    }}
                  ><p>03. Printing</p></button>
                </li>
                <li className=' hover:ml-10 transition-all duration-100'>
                  <button
                    onClick={() => setActive("Infa-4")}
                    style={{
                      fontWeight: active == "Infa-4" ? 'bold' : 'normal',
                      marginLeft: active == "Infa-4" ? '40px' : '0'
                    }}
                  ><p>04. Finishing</p></button>
                </li>
                <li className=' hover:ml-10 transition-all duration-100'>
                  <button
                    onClick={() => setActive("Infa-5")}
                    style={{
                      fontWeight: active == "Infa-5" ? 'bold' : 'normal',
                      marginLeft: active == "Infa-5" ? '40px' : '0'
                    }}
                  ><p>05. Logestics</p></button>
                </li>
              </ul>
            </div>

            <div
              data-aos='fade-left'
              data-aos-delay='200'
              className='relative white col-span-3 flex items-center'>
              {active === 'Infa-1' && <InfraComp image={InData[0]['image']} title={InData[0]['title']} detail={InData[0]['detail']} />}
              {active === 'Infa-2' && <InfraComp image={InData[1]['image']} title={InData[1]['title']} detail={InData[1]['detail']} />}
              {active === 'Infa-3' && <InfraComp image={InData[2]['image']} title={InData[2]['title']} detail={InData[2]['detail']} />}
              {active === 'Infa-4' && <InfraComp image={InData[3]['image']} title={InData[3]['title']} detail={InData[3]['detail']} />}
              {active === 'Infa-5' && <InfraComp image={InData[4]['image']} title={InData[4]['title']} detail={InData[4]['detail']} />}
            </div>
          </div>
          {/* For Mobile View */}
          <div className='lg:hidden min-h-[50vw] flex flex-col'>
            {/* Accordion Menu Top */}
            <div className='w-full  bg-three-600'>
              <div className="">
                <div
                  className="flex flex-row justify-between cursor-pointer bg-three-^00 p-5"
                  onClick={() => setIsActive(!isActive)} >
                  <div>
                    {mActive === 'MInfa-1' && <p>01. Customer Service</p>}
                    {mActive === 'MInfa-2' && <p>02. Pre Press</p>}
                    {mActive === 'MInfa-3' && <p>03. Printing</p>}
                    {mActive === 'MInfa-4' && <p>04. Finishing</p>}
                    {mActive === 'MInfa-5' && <p>05. Logestics</p>}
                  </div>
                  <div>{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="p-5 py-0 bg-three-500">
                  <ul >
                    <li className='w-full '>
                      <button className=' w-full py-5 text-start' onClick={() => setMActive("MInfa-1")}><p>01. Customer Service </p></button>
                    </li>
                    <li className='w-full'>
                      <button className=' w-full py-5 text-start' onClick={() => setMActive("MInfa-2")}>02. Pre Press</button>
                    </li>
                    <li className='w-full '>
                      <button className=' w-full py-5 text-start' onClick={() => setMActive("MInfa-3")}>03. Printing</button>
                    </li>
                    <li className='w-full '>
                      <button className=' w-full py-5 text-start' onClick={() => setMActive("MInfa-4")}>04. Finishing </button>
                    </li>
                    <li className='w-full '>
                      <button className=' w-full py-5 text-start' onClick={() => setMActive("MInfa-5")}>05. Logestics</button>
                    </li>
                  </ul>
                </div>}
              </div>
            </div>
            {/* Content Part */}
            <div>
              {mActive === 'MInfa-1' && <InfraComp image={InData[0]['image']} title={InData[0]['title']} detail={InData[0]['detail']} />}
              {mActive === 'MInfa-2' && <InfraComp image={InData[1]['image']} title={InData[1]['title']} detail={InData[1]['detail']} />}
              {mActive === 'MInfa-3' && <InfraComp image={InData[2]['image']} title={InData[2]['title']} detail={InData[2]['detail']} />}
              {mActive === 'MInfa-4' && <InfraComp image={InData[3]['image']} title={InData[3]['title']} detail={InData[3]['detail']} />}
              {mActive === 'MInfa-5' && <InfraComp image={InData[4]['image']} title={InData[4]['title']} detail={InData[4]['detail']} />}
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
      <section
        data-aos='fade-up'
        data-aos-delay='200'
      >
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
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {
                  Awards.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className='px-10 py-10'
                    ><div
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
      </section>

      {/* Section */}
      <section>
        <div className='w-full min-h-screen '>
          <div className='flex flex-col gap-5 py-2 md:py-10 px-5 md:px-20'>
            <img
              className='w-20 md:w-32'
              src={delivery}
              alt="Delivery Icon" />
            <div className='flex flex-col gap-5'>
              <h1 className='text-5xl text-primary-500'>Delivery</h1>
              <hr className='border-2 border-primary-500 bg-primary-500 rounded-full w-1/5' />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 h-auto gap-1 bg-white'>
            <div className='bg-white'>
              <img
                data-aos='fade-right'
                data-aos-delay='500'
                className='w-full'
                src={car1}
                alt="Car Image 1" />
            </div>
            <div className='bg-white flex justify-center items-center'>
              <img
                data-aos='fade-left'
                data-aos-delay='200'
                className='h-96'
                src={car2}
                alt="Car Image 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
      <section
        data-aos='fade-up'
        data-aos-delay='500'
      >
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
              modules={[Autoplay, Pagination]}
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
      </section>
    </div>
  )
}
