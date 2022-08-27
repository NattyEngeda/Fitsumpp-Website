import React from 'react'
import { useState } from 'react';
import { useSpring, animated } from 'react-spring' 

import {
    FcCalendar,
    FcWorkflow,
    FcCustomerSupport,
    FcComboChart
} from "react-icons/fc";


// Images
import logo from '../../assets/images/logo/Fitsum Colred Logo_Own Color.png'


export default function Section8() {
   
      function Number(num){
        const [flip, set] = useState(false)
        const { number } = useSpring({
          reset: true,
          reverse: flip,
          from: { number: 0 },
          number: num,
          delay: 2500,
        //   config: config.molasses,
          onRest: () => set(!flip),
        })
     
        return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
    }

    function App() {
        const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
        return <animated.div style={props}>I will fade in</animated.div>
      }
    // const AnimatedDonut = animated(Donut)
    
    return (
        <section data-aos='zoom-in' className="text-gray-600 body-font">
            <div className="container grid sm:grid-cols-2  py-5 mx-auto">
                <div className="flex flex-col  w-full mb-20 sm:mb-0 pt-10 ">
                    {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                    <p className="lg:w-2/3 leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
                    <img className='w-full' src={logo} alt="Fitsum Advert Logo" />
                </div>

                <div className="grid sm:grid-cols-2 text-center">
                    <div className="p-4 w-full">
                        <div className="border-2 border-gray-200 flex flex-col items-center px-4 py-6 rounded-lg shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-50 duration-150 ">
                            <FcCalendar className='w-20 h-20' />
                            <h2 className="title-font font-medium text-3xl text-gray-900">{Number(10)}</h2>
                            <p className="leading-relaxed">Years Workeds</p>
                        </div>
                    </div>

                        <div className="p-4 w-full">
                            <div className="border-2 border-gray-200 flex flex-col items-center px-4 py-6 rounded-lg shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-50 duration-150">
                                <FcWorkflow className='w-20 h-20' />
                                <h2 className="title-font font-medium text-3xl text-gray-900">{Number(200) } </h2>
                                <p className="leading-relaxed">Works Completed</p>
                            </div>
                        </div>

                        <div className="p-4 w-full">
                            <div className="border-2 border-gray-200 flex flex-col items-center px-4 py-6 rounded-lg shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-50 duration-150">
                                <FcCustomerSupport className='w-20 h-20' />
                                <h2 className="title-font font-medium text-3xl text-gray-900">{Number(100)} +</h2>
                                <p className="leading-relaxed">Satisfied Customers</p>
                            </div>
                        </div>

                        <div className="p-4 w-full">
                            <div className="border-2 border-gray-200 flex flex-col items-center px-4 py-6 rounded-lg shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-50 duration-150">
                                <FcComboChart className='w-20 h-20' />
                                <h2 className="title-font font-medium text-3xl text-gray-900">1000+</h2>
                                <p className="leading-relaxed">Products Sold</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}
