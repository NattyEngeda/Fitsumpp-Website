import React, { useEffect } from 'react'
import { useState } from 'react'

import ImageCounter from '../../components/home/Section1/ImageCounter'
import SectionOneSlider from '../../components/home/Section1/SectionOneSlider';

// Import Data
import works from '../../data/Works';

function checkName(id) {

  let name = '';
  let color = '';
  let style = '';
  
  name = works[id - 1]['name'];
  color = works[id - 1]['color'];
  style = works[id - 1]['textStyle'];

  let currentArr = [name,color,style];

  return currentArr;
}

export default function SectionOne() {
  let [nid, setNid] = useState(1);
  return (
    <div>
      <div className=' flex flex-col gap-8 absolute py-10 sm:py-20 pl-1 md:py-10 lg:py-20 md:pl-5 lg:pl-20 md:w-full w-full z-30'>
        <div className='sm:hidden text-[40px] md:text-7xl  w-full  md:w-full mb-4 font-medium text-gray-900 flex flex-col gap-2 md:gap-5'>
          <h1>Producing Different
          <br className='mb-5'/> Kind of <br className='block sm:hidden'/><span 
          style={{
            background: checkName(nid)[1]
          }}
          className={checkName(nid)[2]}>{checkName(nid)[0]}</span></h1>
          <h1>with quality</h1>
        </div>

        <div className='hidden text-[40px] md:text-6xl lg:text-7xl  w-full  md:w-full mb-4 font-medium text-gray-900 sm:flex flex-col gap-2 sm:gap-8'>
          <h1>Producing Different</h1>
          <h1> Kind of <br className='block sm:hidden'/><span 
          style={{
            background: checkName(nid)[1]
          }}
          className={checkName(nid)[2]}>{checkName(nid)[0]}</span></h1>
          <h1>with quality</h1>
        </div>
        
        <ImageCounter work={works} current={nid} />
      </div>
      <SectionOneSlider countt={setNid} />
    </div>
  )
}