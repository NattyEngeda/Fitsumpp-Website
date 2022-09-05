import React,{ useEffect } from 'react'
import { useParams } from 'react-router-dom'

// AOS Library
import aos from 'aos';
import "aos/dist/aos.css"
// Data
import BlogDesc from '../data/BlogDesc';

export default function SubBlog() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  const {id} = useParams();
  const data = BlogDesc[id-1];
  // console.log(data)

  return (
    <div
    data-aos='fade-up'
    className='w-full min-h-screen py-5 md:p-20 flex flex-col gap-5'>
      <div className='flex flex-row gap-5 items-center'>
        <div>
          <img 
          className='w-20 md:w-32 rounded-full'
          src={data.logo} 
          alt={data.name} />
        </div>
        <div className='flex flex-row items-center gap-3 text-xl md:text-3xl'>
          <p> - </p>
          <h1 
          style={{
            color: data.color
          }}
          className='text-2xl md:text-3xl'>{data.name}</h1>
          <p> - </p>
          <h1 className='md:text-2xl'>{data.title}</h1>
        </div>
      </div>
      <hr />
      <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 py-10 px-5 md:px-0'>
        {data.content.map((item)=>(
          <div 
          key={item.id}
          className=' w-full h-auto flex flex-col'>
              <div>
                <img
                className='w-auto h-[30rem]'
                src={item.img} 
                alt="Image" />
              </div>
              
          </div>
        ))}
        </div>
    </div>
  )
}
