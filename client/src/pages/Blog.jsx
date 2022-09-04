import React,{ useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// Data
import BlogTitles from '../data/BlogTitles'
// Styles
import 'animate.css';
// Images
import logo from '../assets/images/logo/F Only Colored Logo.png'
export default function Blog() {
  const Navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0,0);
  })

 const changePage = (comp) =>{
  Navigate('/blog/'+comp);
  }
  return (
    <div className='w-full min-h-screen py-10 px-5 md:px-52'>
      {/* Section */}
      <section className='flex flex-col gap-20'>
        {BlogTitles.map((items) => (
          <div 
          key={items.id}
          onClick={()=> changePage(items.id)}
          style={{
            // animationDuration: '2s',
          }}
          className={items.style}>
            <div className='bg-blue-600 col-span-2 h-auto md:h-96 py'>
                <img src={items.image} alt="" />
            </div>
            <div className='flex flex-col gap-5 px-5 md:px-10 py-5 justify-between'>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-sm text-gray-400'>{items.title}</h1>
                  <h1 className='text-xl font-bold '>{items.name}</h1>
                </div>
                <p>{items.desc}</p>
              </div>
              <div className='flex flex-row gap-3 items-center'>
                <div>
                  <img
                    className='w-10'
                    src={logo}
                    alt="Fitsum Printing Logo" />
                </div>
                <div>
                  <h1>Fitsum Printing</h1>
                </div>
              </div>
            </div>
          </div>
        ))}


      </section>
    </div>
  )
}
