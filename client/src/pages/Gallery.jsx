import React from 'react'
import { useEffect } from 'react';

import Section1 from '../layouts/gallery/Section1'

export default function Gallery() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className='w-full'>
        {/* Section 1 */}
            <Section1/>
    </div>
  )
}
