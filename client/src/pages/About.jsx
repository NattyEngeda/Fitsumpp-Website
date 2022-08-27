import React from 'react'
import { useEffect } from 'react'

// Sections
import Section1 from '../layouts/about/Section1'
import Section2 from '../layouts/about/Section2'
import Section3 from '../layouts/about/Section3'
import Section4 from '../layouts/about/Section4'
import Section5 from '../layouts/about/Section5'
import Section6 from '../layouts/about/Section6'
import Section7 from '../layouts/about/Section7'
import Section8 from '../layouts/about/Section8'
import Section9 from '../layouts/about/Section9'
import Section10 from '../layouts/about/Section10'


export default function About() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

 

  return (
    <div className='relative min-h-screen flex flex-col py-'>
      {/* Section One */}
       <Section1/>
      {/* Section Two */}
        <Section2/>
      {/* Section Three */}
        <Section3/>
      {/* Section Four */}
        <Section4/>
      {/* Section Five */}
        <Section5/>
      {/* Section Six */}
        <Section6/>
      {/* Section Seven */}
        <Section7/>
      {/* Section Eight */}
        <Section8/>
      {/* Section Nine */}
        <Section9/>
      {/* Section Ten */}
        {/* <Section10/> */}
    </div>
  )
}
