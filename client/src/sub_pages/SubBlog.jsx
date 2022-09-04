import React,{ useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
    <div className='w-full min-h-screen py-5 md:p-20 boor flex flex-col gap-5'>
      <div className='flex flex-row gap-5 items-center'>
        <div>
          <img 
          className='w-20 md:w-32 rounded-full'
          src={data.logo} 
          alt={data.name} />
        </div>
        <div className='flex flex-row items-center gap-3 text-xl md:text-3xl'>
          <p> - </p>
          <h1 className='text-2xl md:text-3xl text-[#F47B20]'>{data.name}</h1>
          <p> - </p>
          <h1 className='md:text-2xl'>{data.title}</h1>
        </div>
      </div>
      <hr />
      <div className='w-full h-auto  flex flex-col gap-20 md:gap-10 py-10 px-5 md:px-0'>
        {data.content.map((item)=>(
          <div 
          key={item.id}
          className=' w-full h-auto flex flex-col md:grid grid-cols-2 gap-5'>
              <div>
                <img
                className='w-auto max-h-screen '
                src={item.img} 
                alt="Image" />
              </div>
              <div className='md:px-5'>
                {/* <p className='text-xl md:text-3xl font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aliquam inventore magni quis nulla blanditiis optio beatae ullam accusantium! Dolores, assumenda voluptatem commodi quia rem obcaecati accusantium ex animi dignissimos!</p> */}
                {
                  item.desc.map((descs)=>(
                    <div className='flex flex-col gap-5'>
                      <h1 className='text-xl md:text-3xl font-bold '>{descs.title}</h1>
                      <p className='text-lg md:text-2xl'>{descs.body}</p>
                    </div>
                  ))
                }
              </div>
          </div>
        ))}
        </div>
    </div>
  )
}
