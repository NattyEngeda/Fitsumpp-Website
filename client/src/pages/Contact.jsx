import React from 'react'
import { useEffect } from 'react'

import Section1 from '../layouts/contact/Section1'
import Section2 from '../layouts/contact/Section2'
import Section3 from '../layouts/contact/Section3'
import Section4 from '../layouts/contact/Section4'

// Sections


export default function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className='w-full'>
      {/* Section One */}
        <Section1/>
      {/* Section Two */}
        <Section2/>
      {/* Section Three */}
        <Section3/>
      {/* Section Four */}
        <Section4/>
    </div>
  )
}
