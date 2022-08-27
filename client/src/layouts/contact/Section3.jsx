import React from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export default function Section3() {
  return (
    <div className='w-full h-auto bg-white px-5 md:px-32 py-10'>
      <Accordion
        className='bg-white'
      >
        <AccordionItem
          className='bg-white'
        >
          <AccordionItemHeading
          >
            <AccordionItemButton
              style={{
                background: 'white',
                fontSize: '25px',
                display: 'flex',
                alignItems: "center",
                justifyContent: 'start'
              }}
            >
              How to find this Office
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='flex flex-col gap-5'>
              <div className=' items-start md:items-end'>
                <h1 className='text-lg inline font-semibold'>Driving: </h1>
                <p className=' inline font-light md:font-normal'>Refer to directions provided by <span className='text-primary-500 font-semibold'>Google Maps.</span></p>
              </div>
              <div className=' gap-2 items-end'>
                <h1 className='text-lg inline font-semibold'>Public Transportation: </h1>
                <p className='inline font-light md:font-normal'>The Closest option for public transportation is to get a taxi that goes to <span className='text-primary-500 font-semibold'>Kazanchis</span>  from <span className='text-primary-500 font-semibold'>Megenagna.</span></p>
              </div>
              <div>
                <h1 className='text-xl font-semibold inline'>Parking: </h1>
                <p className='inline'>You can park anywhere starting from shola to the Sumeya Mosque </p>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
