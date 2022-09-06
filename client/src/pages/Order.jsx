import React,{ useEffect} from 'react'
import OrderForm from '../components/OrderForm'

// Images
import img1 from '../assets/images/Order/order.webp'
// Styles
import '../assets/styles/Order.css'
// Aos Libraryx
import aos from 'aos';
import "aos/dist/aos.css"
export default function Order() {
    const checkClicked = () =>{
        fetch('https://test.fitsumpp.com/api',{
          method: 'GET',
          headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          // body: JSON.stringify('test')
        }).then(function(response){
          // console.log(response)
          // return response.json();
        })
    }

    useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
      <div 
      data-aos='fade-up'
      className='flex flex-col relative'>
        <div className="container1 w-full px-5 md:px-20 ">
          <div className='flex flex-col gap-5 bg-gray-200 pb-10 h-auto  min-h-screen rounded-2xl w-full mx-auto my-5 z-20  bg-opacity-80 backdrop-blur-lg py-5 px-2 md:px-10'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-primary-500 font-semibold text-4xl'>Order</h1>
              <hr className='w-1/5 border-2 border-green-600 bg-green-600 rounded-full ' />
            </div>
            <div className='w-full grid md:grid-cols-2'>
              
              <OrderForm />
              <div className="hidden md:flex overflow-hidden rounded-xl px-20">
              <button
              onClick={checkClicked}
              className='bg-red-600 px-4 py-2 w-20 h-10 text-white'>
                Test
              </button>
                <img className='rounded-xl' src={img1} alt="Order Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
