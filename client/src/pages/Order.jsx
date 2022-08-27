import React from 'react'
import '../assets/styles/Order.css'

import {
  Label,
  TextInput,
  Button,
  Select
  // No

} from 'flowbite-react'
import img1 from '../assets/images/Order/order.webp'


export default function Order() {

  return (
    <div className='flex flex-col'>

      <div class="container1 w-full px-5 md:px-20 ">
        <div class="shape-blob"></div>
        <div class="shape-blob one"></div>
        <div class="shape-blob two"></div>

        <div className='flex flex-col gap-5 bg-gray-200 pb-10 h-auto  min-h-screen rounded-2xl w-full mx-auto my-5 z-20  bg-opacity-80 backdrop-blur-lg py-5 px-10'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-primary-500 font-semibold text-4xl'>Order</h1>
            <hr className='w-1/5 border-2 border-primary-500 rounded-full ' />
          </div>
          <div className='w-full grid md:grid-cols-2'>
            <form className="flex flex-col gap-4">

              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="Name"
                    value="Name"
                  />
                </div>
                <TextInput
                  id="name"
                  type="name"
                  placeholder="Name"
                  required={true}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="phonenumber"
                    value="Phone Number"
                  />
                </div>
                <TextInput
                  id="phonenumber"
                  type="number"
                  placeholder="Phone Number"
                  required={true}
                />
              </div>

              <div className='mb-2 block'>
                <Label
                  htmlFor="Product"
                  value="Product"
                />
              <Select id="Product">
                <React.Fragment key=".0">
                    <option>
                      Banner
                    </option>
                    <option>
                      Brouchers
                    </option>
                    <option>
                      Cake Toppers
                    </option>
                    <option>
                      LEDs
                    </option>
                </React.Fragment>
              </Select>
              </div>
             
              <Button style={{backgroundColor: '#008059'}} className="bg-primary-500" type="submit">
                Order
              </Button>
            </form>
            <div className="hidden md:flex overflow-hidden rounded-xl px-20">
              <img className='rounded-xl' src={img1} alt="Order Image" />
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}
