import React from 'react'

// Images
import product from '../../assets/images/ProductPageIcons/product.png'
import ProductCard from '../../components/Product/ProductCard';

const products = [
                    {id: 1, name: "Bussiness Cards"},
                    {id: 2, name: "Corporate Brouchers"},
                    {id: 3, name: "Tea Glasses"},
                    {id: 4, name: "Sanitizer Pens"},
                    {id: 5, name: "Door Signs"},
                    {id: 6, name: "Cake Toppers"},
                    {id: 7, name: "P6 LED Displays"},
                    {id: 8, name: "Car Branding"},
                    {id: 9, name: "Notice Board"},
                    {id: 10, name: "Acrylic Engraving & Golden Painting"},
                    {id: 11, name: "Calenders"},
                    {id: 12, name: "3D foam cut-out"},
                    {id: 13, name: "Indoor branding foam cut out"},
];



export default function Section1() {
  return (
    <div className='w-full relative px-5 md:px-20 py-10 flex flex-col gap-10'>
      {/* Header */}
      <div className='flex flex-col gap-5'>
        <img
          className='w-32'
          src={product} 
          alt="Product" />
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl text-primary-500'>Product</h1>
          <hr className='border-2 border-primary-500 w-1/4 rounded-full'/>
        </div>
      </div>
      {/* Content */}
      <div className='w-full min-h-screen h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          products.map((item)=>(
            <ProductCard name={item.name}/>
          ))
        }
      </div>

    </div>
  )
}
