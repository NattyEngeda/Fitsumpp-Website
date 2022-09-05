import React from 'react'
import '../assets/styles/Order.css'

import { TextInput, Select, Textarea,Modal, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import axios from 'axios'
import img1 from '../assets/images/Order/order.webp'
import { useEffect, useState } from 'react'
import OrderForm from '../components/OrderForm'


export default function Order() {
  const [name, setName] = useState();
  const [phone_number, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [product, setProduct] = useState();
  const [desc, setDesc] = useState();

  const data = {name, phone_number,email,product,desc};

  const [success, setSuccess] = useState(false);
  const [opened, setOpened] = useState(false);

  const form = useForm({
    initialValues: {name: '', email: '', age: 0},

    validate: {
      name: (value) => (value.length < 2 ? 'Name Must have more than 2 letters' : null)
    }



  })



  // console.log(opened)
  const submit = () => {
    
    // console.log(data)
    axios
      .post('http://localhost:5000/api/order', data)
      .then(response =>{
        console.log(response);
        if(response.status == 200){
            setOpened(true);
        }
        
      })
      .catch(error=>{
        // console.log(error)
      })
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <>
    {/* <Modal
      centered
       opened={opened}
       onClose={() => setOpened(false)}
        title="Success"
      >
        <div className='flex flex-col gap-5 '>
          <p>Your Order has been successfully placed</p>
          <button 
          onClick={() => setOpened(false)}
          className='px-4 py-2 bg-red-600 hover:bg-red-700 text-white hover:shadow-lg w-20 '>Closed</button>
        </div>
      </Modal> */}

    <div className='flex flex-col relative'> 
      <div className="container1 w-full px-5 md:px-20 ">
        {/* <div className="shape-blob"></div>
        <div className="shape-blob one"></div>
        <div className="shape-blob two"></div> */}

        <div className='flex flex-col gap-5 bg-gray-200 pb-10 h-auto  min-h-screen rounded-2xl w-full mx-auto my-5 z-20  bg-opacity-80 backdrop-blur-lg py-5 px-2 md:px-10'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-primary-500 font-semibold text-4xl'>Order</h1>
            <hr className='w-1/5 border-2 border-primary-500 rounded-full ' />
          </div>
          <div className='w-full grid md:grid-cols-2'>
            {/* <div className='flex flex-col gap-5 md:pr-10'> */}
             {/* <form onSubmit={form.onSubmit(console.log)}> */}
              <OrderForm />
            {/* </form> */}
            <div className="hidden md:flex overflow-hidden rounded-xl px-20">
              <img className='rounded-xl' src={img1} alt="Order Image" />
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
