import React from 'react'
import Section8Data from '../../data/Section8';
// Images
import logo from '../../assets/images/logo/Fitsum Colred Logo_Own Color.png'
import CardsSection8 from '../../components/home/CardsSection8';
import Test from '../../pages/Test';

export default function Section8() { 
    return (
        <section data-aos='zoom-in' className="text-gray-600 body-font">
            <div className="container grid sm:grid-cols-2  py-5 mx-auto">
                {/* Left Part */}
                <div className="flex flex-col  w-full mb-20 sm:mb-0 pt-10 ">
                    <img className='w-full' src={logo} alt="Fitsum Advert Logo" />
                </div>
                {/* Roght Part */}
                <div className="grid sm:grid-cols-2 text-center">
                   {
                    Section8Data.map((items)=>(
                        <CardsSection8 
                        key={items.id}
                        id={items.id}
                        name={items.name} 
                        desc={items.desc}
                        num={items.num}
                        time={items.time}
                        />
                    ))
                   }
                </div>
            </div>
        </section>
    )
}
