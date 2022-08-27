import React from 'react'
import { Fragment } from 'react'
import { Popover,Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import logo from '../img/Logos/Fitsum letter F only logo.png'
import { 
    MenuIcon,
    HomeIcon,
    ShoppingCartIcon,
    NewspaperIcon,
    UserGroupIcon,
    IdentificationIcon,
    XIcon
} from '@heroicons/react/outline'
import Home from '../pages/Home'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const mobileMenuItems = [
    {
        name: 'Home',
        to: '/',
        icon: HomeIcon,
    },
    {
        name: 'Products',
        to: '/products',
        icon: ShoppingCartIcon,
    },
    {
        name: 'Blog',
        to: '/blog',
        icon: NewspaperIcon,
    },
    {
        name: 'About Us',
        to: '/about',
        icon: UserGroupIcon,
    },
    {
        name: 'Conact Us',
        to: '/contact',
        icon: IdentificationIcon,
    }
]


export default function OwnHeader() {
  return (
    // Whole Menu
   <Popover className="relative bg-primary-500 border border-gray-300">
    <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-start items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10'>
            {/* Fitsum Advert Logo */}
            <div className='flex justify-start lg:w-0 lg:flex-1'>
                <Link to="/">
                    <span className='sr-only'>Fitsum Advert</span>
                    <img 
                    src={logo} 
                    alt="Fitsum Advert Logo" 
                    className='h-10 w-auto sm:h-16'
                    />
                </Link>
            </div>
            {/* Hambug Menu For Phone */}
            <div className='-mr-2 -my-2 md:hidden'>
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className='sr-only'>Open Menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                </Popover.Button>
            </div>
            {/* Webview Headers */}
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Link to="/" className='text-base font-medium text-gray-50 hover:text-gray-900'>
                <div className='flex justify-end gap-1 items-end'>
                    <HomeIcon className='w-8'/>
                    <span>Home</span>
                </div>
                </Link>
                <Link to="/products" className='text-base font-medium text-gray-50 hover:text-gray-900'>
                    <div className='flex justify-end gap-1 items-end'>
                        <ShoppingCartIcon className='w-8'/>
                        <span>Products</span>
                </div>
                </Link>
                <Link to="/blog" className='text-base font-medium text-gray-50 hover:text-gray-900'>
                    <div className='flex justify-end gap-1 items-end'>
                        <NewspaperIcon className='w-8'/>
                        <span>Blog</span>
                </div>
                </Link>
                <Link to="/about" className='text-base font-medium text-gray-50 hover:text-gray-900'>
                    <div className='flex justify-end gap-1 items-end'>
                        <UserGroupIcon className='w-8'/>
                        <span>About Us</span>
                </div>
                </Link>
                <Link to="/contact" className='text-base font-medium text-gray-50 hover:text-gray-900'>
                    <div className='flex justify-end gap-1 items-end'>
                        <IdentificationIcon className='w-8'/>
                        <span>Contact Us</span>
                </div>
                </Link>
            </Popover.Group>
        </div>
    </div>
    {/* Mobile Context Menu */}
    <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {/* Mobile Pop Up Menu */}
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-primary-500 divide-y-2 divide-gray-50'>
                <div className='pt-5 pb-6 px-5'>
                    <div className='flex items-center justify-between'>
                        {/* Fitsum Advert Logo */}
                        <div>
                            <img 
                            src={logo} 
                            alt="Fitsum Advert Logo" 
                            className='h-8 w-auto sm:h-16'
                            />
                        </div>
                        {/* Close Button */}
                        <div className='-mr-2'>
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className='sr-only'>Close Menu</span>
                                <XIcon className='h-6' aria-hidden />
                            </Popover.Button>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <nav className='grid gap-y-8'>
                            {/* Listing mobileMenuItems using map inside the Popover Panel */}
                            {mobileMenuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 border-b border-gray-50"
                                >
                                    <item.icon className='flex-shrink-0 h-6 w-6 text-gray-50' aria-hidden="true" />
                                    <span className='ml-3 text-base font-medium text-gray-50'>{item.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
                {/* Under mobileMenuItems */}
                <div className='py-6 px-5 space-y-6'>
                    <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                        <span className='text-base font-medium text-gray-900 hover:text-gray-700'>Item 1</span>
                        <span className='text-base font-medium text-gray-900 hover:text-gray-700'>Item 2</span>
                        <span className='text-base font-medium text-gray-900 hover:text-gray-700'>Item 3</span>
                        <span className='text-base font-medium text-gray-900 hover:text-gray-700'>Item 4</span>
                    </div>
                    <div>
                        <button className='w-full px-5 py-4 bg-gray-400 rounded-lg shadow-lg'>Signup</button>
                    </div>
                </div>
            </div>
        </Popover.Panel>
        </Transition>
   </Popover>
  )
}
