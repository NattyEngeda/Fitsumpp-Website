import React,{ useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Popover,Transition,Disclosure } from '@headlessui/react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import clogo from '../assets/images/logo/Fitsum letter F only logo.png'
import logo from '../assets/images/logo/F Only Colored Logo.png'
// import MyLink form './MyLInk';
import { 
    MenuIcon,
    HomeIcon,
    ShoppingCartIcon,
    NewspaperIcon,
    UserGroupIcon,
    IdentificationIcon,
    XIcon,
    PhotographIcon
} from '@heroicons/react/outline'
import useScrollPosition from '../hooks/useScrollPosition';
import useWindowResize from '../hooks/useWindowResize'


import Home from '../pages/Home'
import ListItems from '../components/ListItems'


const mobileMenuItems = [
    {
        name: 'Home',
        to: '/',
        icon: HomeIcon,
    }, 
    {
        name: 'Gallery',
        to: '/gallery',
        icon: PhotographIcon,
    },
    {
        name: 'Profile',
        to: '/about',
        icon: UserGroupIcon,
    },
    {
        name: 'Conact Us',
        to: '/contact',
        icon: IdentificationIcon,
    },
    {
        name: 'Order',
        to: '/order',
        icon: ShoppingCartIcon,
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

export default function Header() {

    const windowWidth = useWindowResize();

    const check = () =>{
        let menu=document.getElementById('menu');
        let trans = document.getElementById('headlessui-popover-panel-:r3:')
        // trans.show(false)
        // console.log()
        // trans.classList.add('hidden')
        trans.show(false)
    }
    const appearMenu = () =>{

        let trans =  document.getElementById('headlessui-popover-panel-:r3:')
        if(trans){
            // console.log('true')
            // trans.classList.remove('hidden');
            trans.className.replace('hidden','block');
        }
    }


    let Navigate = useNavigate();

    const changePage = () => {
        let path = '/order'
        Navigate(path);
    }

  const scrollPosition = useScrollPosition();
//   console.log(scrollPosition)

  return (
    // Whole Menu
    
   <Popover className={classNames(scrollPosition > 0 ? 'shadow-lg bg-white' : 'shadow-none', 'transition sticky top-0 w-full z-40 font-Sora backdrop-filter backdrop-blur-lg bg-opacity-30')}>
    <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-3 lg:py-1 md:justify-start md:space-x-10 lg:divide-x-2'>
            {/* Fitsum Advert Logo */}
            <div className='flex  justify-start  lg:w-auto lg:flex-none'>
                <Link to="/">
                    <span className='sr-only'>Fitsum Advert</span>
                    <img 
                    src={logo} 
                    alt="Fitsum Advert Logo" 
                    className='h-12 w-auto sm:h-[80px]'
                    />
                </Link>
            </div>
           
            {/* Webview Headers */}
            <div className='w-auto lg:flex-none px-5 py-2  relative'>
                <Popover.Group as="nav" className="hidden md:flex items-end h-full space-x-5">
                    <ListItems link="/" name="Home" />
                    {/* <ListItems link="/product" name="Products" /> */}
                    <ListItems link="/gallery" name="Gallery"/>
                    <ListItems link="/about" name="Profile"  />
                    <ListItems link="/contact" name="Contact Us"  />
                    <ListItems link="/order" name="Order"  />
                    <div className='bg-blue-500 text-white px-4 py-1'>{windowWidth}</div>
                </Popover.Group>
            </div>

             {/* Hambug Menu For Phone */}
             <div className='-mr-2 -my-2 md:hidden'>
                <Popover.Button onClick={appearMenu} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-primary-500 border-primary-500  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                    <span className='sr-only'>Open Menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                </Popover.Button>
            </div>
        </div>
    </div>
    {/* Mobile Context Menu */}
    <Transition
        id='transition'
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {/* Mobile Pop Up Menu */}
        {/* {console.log(<Popover.Panel/>)} */}
        {/* <Disclosure> */}
        <Popover.Panel focus id='menu' className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className='rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-gray-50 divide-y-2 divide-gray-50 '>
                <div className='pt-5 pb-6 px-5'>
                    <div className='flex items-center justify-between'>
                        {/* Fitsum Advert Logo */}
                        <div>
                            <img 
                            src={logo} 
                            alt="Fitsum Advert Logo" 
                            className='h-12 w-auto sm:h-16 '
                            />
                        </div>
                        {/* Close Button */}
                        <div className='-mr-2'>
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-primary-500 hover:text-gray-500 border-primary-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                                <span className='sr-only'>Close Menu</span>
                                <XIcon className='h-6' aria-hidden />
                            </Popover.Button>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <nav className='grid gap-y-8'>
                            {/* Listing mobileMenuItems using map inside the Popover Panel */}
                            {mobileMenuItems.map((item) => (
                            //    <Disclosure.Button as={MyLink} href="/home">
                            //    Home
                            //  </Disclosure.Button>
                               <Popover.Button
                                    key={item.name}
                                    as='a'
                                    onClick={close}
                                    href={item.to}
                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 border-b border-gray-50"
                                >
                                    <item.icon className='flex-shrink-0 h-6 w-6 text-primary-500' aria-hidden="true" />
                                    <span className='ml-3 text-base font-medium text-primary-500'>{item.name}</span>
                                <br className='border border-primary-400 text-primary-500 bg-primary-500' />
                                </Popover.Button>
                            ))}
                        </nav>
                    </div>
                </div>
                {/* Under mobileMenuItems */}
                <div className='py-6 px-5 space-y-6'>
                   
                    <div>
                        <button onClick={changePage} className='w-full px-5 py-4 bg-primary-500 text-white rounded-lg shadow-lg'>Order Now</button>
                    </div>
                </div>
            </div>
        </Popover.Panel>
        {/* </Disclosure> */}
        </Transition>
   </Popover>
  )
}