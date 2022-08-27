import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InData from '../../data/InfrastructureData';
// Icons
import infra from '../../assets/images/About Us/Icons/1infrastructure.png';
import InfraComp from '../../components/about/Section6/InfraComp';
import CustomizedAccordions from '../../tests/CustomizedAccordions';
import AppAccrd from '../../tests/AppAccrd';

const accordionData = {
    title: 'Section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  };

export default function Section6() {

    const [active, setActive] = useState("Infa-1");
    const { title, content } = accordionData;
    const [isActive, setIsActive] = useState(false);
    const [mActive, setMActive] = useState("MInfa-1");

    return (
        <div className='flex flex-col gap-5 bg-gray-100'>
            {/* Title */}
            <div className='flex flex-col gap-3 px-5 py-5 md:px-20'>
                <img className='w-20 md:w-32' src={infra} alt="Infrastructure Icon" />
                <h1 className='text-3xl md:text-5xl text-three-500'>Infrastructure</h1>
                <hr className='border-2 border-three-500 bg-three-500 rounded-full w-1/5' />
            </div>
            {/* For Desktop View */}
            <div className='hidden relative w-full h-[30rem] lg:grid grid-cols-5 '>
                <div className='bg-three-400 col-span-2 shadow-xl'>
                    <ul className='h-full flex flex-col items-start justify-evenly py-5 px-10 text-2xl'>

                        <li className=' hover:ml-10'>
                            <button onClick={() => setActive("Infa-1")}> <p>01. Customer Service</p></button>
                        </li>
                        <li className=' hover:ml-10'>
                            <button onClick={() => setActive("Infa-2")}><p>02. Pre Press</p></button>
                        </li>
                        <li className=' hover:ml-10'>
                            <button onClick={() => setActive("Infa-3")}><p>03. Printing</p></button>
                        </li>
                        <li className=' hover:ml-10'>
                            <button onClick={() => setActive("Infa-4")}><p>04. Finishing</p></button>
                        </li>
                        <li className=' hover:ml-10'>
                            <button onClick={() => setActive("Infa-5")}><p>05. Logestics</p></button>
                        </li>
                    </ul>
                </div>

                <div className='relative white col-span-3 flex items-center'>
                    {active === 'Infa-1' && <InfraComp image={InData[0]['image']} title={InData[0]['title']}  detail={InData[0]['detail']} />}
                    {active === 'Infa-2' && <InfraComp image={InData[1]['image']} title={InData[1]['title']}  detail={InData[1]['detail']} />}
                    {active === 'Infa-3' && <InfraComp image={InData[2]['image']} title={InData[2]['title']}  detail={InData[2]['detail']} />}
                    {active === 'Infa-4' && <InfraComp image={InData[3]['image']} title={InData[3]['title']}  detail={InData[3]['detail']} />}
                    {active === 'Infa-5' && <InfraComp image={InData[4]['image']} title={InData[4]['title']}  detail={InData[4]['detail']} />}

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
                                {mActive === 'MInfa-1' && <p>01. Customer Service</p> }
                                {mActive === 'MInfa-2' && <p>02. Pre Press</p> }
                                {mActive === 'MInfa-3' && <p>03. Printing</p> }
                                {mActive === 'MInfa-4' && <p>04. Finishing</p> }
                                {mActive === 'MInfa-5' && <p>05. Logestics</p> }

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
                    {mActive === 'MInfa-1' && <InfraComp image={InData[0]['image']} title={InData[0]['title']}  detail={InData[0]['detail']} />}
                    {mActive === 'MInfa-2' && <InfraComp image={InData[1]['image']} title={InData[1]['title']}  detail={InData[1]['detail']} />}
                    {mActive === 'MInfa-3' && <InfraComp image={InData[2]['image']} title={InData[2]['title']}  detail={InData[2]['detail']} />}
                    {mActive === 'MInfa-4' && <InfraComp image={InData[3]['image']} title={InData[3]['title']}  detail={InData[3]['detail']} />}
                    {mActive === 'MInfa-5' && <InfraComp image={InData[4]['image']} title={InData[4]['title']}  detail={InData[4]['detail']} />}
                </div>
            </div>
        </div>
    )
}
