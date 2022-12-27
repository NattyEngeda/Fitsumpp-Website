import React from 'react'
import useWindowResize from '../../../hooks/useWindowResize';

export default function Section1Hero(props) {
    const windowSize = useWindowResize();
    return (
        <section className="mt-60 md:mt-52 lg:mt-0 text-gray-600 body-font">
            {/* Full Section */}
            <div className="container mx-auto flex md:pl-5  pt-24 md:py-5 md:mr-0 md:flex-row flex-col items-center md:items-start">
                {/* Word Section */}
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                </div>
                {/* Image Section */}
                <div className="lg:max-w-2xl relative md:pr-5 h-full lg:w-full md:w-1/2 w-full px-3 md:px-0">
                    <div
                        className="pattern-diagonal-lines-sm md:-ml-16"
                        style={{
                            color: props.color
                        }}
                    >
                        <img
                            style={{
                                transform: windowSize > 640 ? 'translate(30px, -30px)' : 'translate(5px, -5px)'
                            }}
                            className="object-cover object-center  w-full h-full" alt="hero" src={props.image} />
                    </div>
                </div>
            </div>
        </section>
    )
}
