import React from 'react'
import ProgressiveImage from "react-progressive-graceful-image";


export default function Section1Hero(props) {
  return (
        <section className="mt-60 md:mt-52 lg:mt-0 text-gray-600 body-font">
                {/* Full Section */}
            <div className="container mx-auto flex md:pl-5  py-24 md:py-5 md:mr-0 md:flex-row flex-col items-center md:items-start">
                {/* Word Section */}
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    
                </div>
                {/* Image Section */}
                <div className="lg:max-w-2xl relative md:-pr-5 h-full lg:w-full md:w-1/2 w-full px-3 md:px-0 shadow-xl">
                {/* <ProgressiveImage
                // delay={001}
                src={props.image}>
                    {(src) => <img src={src} alt="an image" />}
                </ProgressiveImage> */}
                    <img className="object-cover object-center  w-full h-full" alt="hero" src={props.image}/>
                </div>
            </div>
        </section>
  )
}
