import React from 'react'
import logo from '../assets/images/logo/Fitsum letter F only logo.png'
import SocialIcons from '../components/SocialIcons';
import clogo from '../assets/images/logo/F Only Colored Logo.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Fbuttons =[
  {
    id: 1,
    title: "About",
    links: [
     "About",
     "Contact Us",
     "F.A.Q.",
     "Questions"
    ]
  },
  {
    id: 2,
    title: "Products",
    links: [
      "Branding",
      "Printing",
      "PROMO" 
    ]
  }
]
  const checkPage = () => {
    console.log('cliced');
  }
export default function Footer() {
  let navigate = useNavigate();

  const changePage = () =>{
    
  }


  let tdate = new Date().getFullYear();

  return (
    <footer className="absolute bg-gray-300 text-gray-600 body-font w-full border border-gray z-30">
      {/* Top Footer Part */}
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap lg:gap-32 flex-wrap flex-col">
      {/* Fitsum Advert Logo */}
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={clogo} alt="Main Logo" className='w-20 h-full text-white' />
          <span className="ml-3 text-xl">Fitsum Advert</span>
        </a>
        <p className="mt-2 text-base text-gray-800">A full printing service experience</p>
      </div>
      {/* Content Lists */}
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        {Fbuttons.map((item) => (
          <div 
          className="lg:w-1/4 md:w-1/2 w-full px-4"
          key={item.id}>
          <h2         
          className="title-font font-medium text-gray-900 tracking-widest text-lg mb-2">{item.title}</h2>
          <hr className='border-primary-500  w-2/4 m-auto mb-3 lg:m-0 lg:mb-3'/>
          <nav className="list-none mb-10 space-y-1">
            {/* {llinks =item.links.length} */}
            {item.links.map((sitem) =>(
                <li
                key={sitem}>
                <Link 
                to={checkPage}
                className="text-gray-600 font-semibold hover:text-primary-600 cursor-pointer">{sitem}</Link>
              </li> 
            ))}
           
          </nav>
        </div>
        ))}
      </div>
    </div>

    {/* Bottom Fotter Part */}
    <div className="bg-gray-100">
      <div className="container mx-auto py-1 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">© {tdate} Fitsum Advert —
          <a href="https://twitter.com/NattyEngeda" rel="noopener noreferrer" className="text-primary-600 ml-1" target="_blank">@fistum</a>
        </p>
       <SocialIcons/>
      </div>
    </div>
    {/* Random Colord */}
    <div className='flex justify-evenly h-4'>
      <div className='bg-primary-500 h-full w-full'>
      </div>
      <div className='bg-gray-300 h-full w-full'>

      </div>
      <div className='bg-secondary-500 h-full w-full'>

      </div>
      <div className='bg-three-500 h-full w-full'>

      </div>
      <div className='bg-four-500 h-full w-full'>

      </div>
    </div>
  </footer>
  )
}
