import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon } from '@heroicons/react/outline'
import { Menu, Button, Modal } from '@mantine/core';
import { IconPhoto, IconHome, IconUser, IconShoppingCart, IconNote, IconNews } from '@tabler/icons';

// logo
import logo from '../assets/images/logo/F Only Colored Logo.png'
import ListItems from '../components/ListItems'
// Images
import adey from '../assets/images/adey.png'
import adey2 from '../assets/images/adey2.jpg'
import adey3 from '../assets/images/adey3.jpg'
// Styles
import '../assets/styles/rotateAdeyAbeba.css'

export default function Header() {
    const [adeyOpened, setAdeyOpened] = useState(false);

    return (
        <header className='w-full sticky top-0 right-0 shadow-lg grid md:grid-cols-7 grid-cols-10 z-30'>
            <div className='bg-white col-span-2 md:col-span-1 transition backdrop-filter backdrop-blur-lg bg-opacity-20'>
                {/* Fitsum Advert Logo */}
                <div className='flex  justify-center items-center lg:w-auto lg:flex-none p-3 md:p-1'>
                    <Link to="/">
                        <span className='sr-only'>Fitsum Advert</span>
                        <img
                            src={logo}
                            alt="Fitsum Advert Logo"
                            className='h-12 w-auto sm:h-[80px]'
                        />
                    </Link>
                </div>
            </div>
            <div className='bg-primary-600 col-span-8 md:col-span-6 w-auto lg:flex-none px-5 py-2 relative flex md:block items-center justify-end md:justify-center'>
                {/* Website Headers */}
                <div className='hidden md:flex items-center h-full space-x-5 pl-20'>
                    <ListItems link="/" name="Home" />
                    <ListItems link="/gallery" name="Gallery" />
                    <ListItems link="/about" name="Profile" />
                    <ListItems link="/contact" name="Contact Us" />
                    <ListItems link="/order" name="Order" />
                    <ListItems link="/blog" name="Blog" />
                </div>
                {/* Hamburg Menu */}
                <div className='z-40 md:hidden'>
                    <Menu
                        transition="pop"
                        shadow="md"
                        width={200}>
                        <Menu.Target>
                            <button className='bg-white text-primary-500 p-1 rounded'>
                                <MenuIcon className='w-8 h-8' />
                            </button>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Label>Pages</Menu.Label>
                            <Menu.Item
                                className='active:bg-gray-300'
                                component={Link}
                                to='/'
                                icon={<IconHome size={14}
                                />}>Home</Menu.Item>
                            <Menu.Item
                                className='active:bg-gray-300'
                                component={Link}
                                to='/gallery'
                                icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
                            <Menu.Item
                                className='active:bg-gray-300'
                                component={Link}
                                to='/about'
                                icon={<IconUser size={14} />}>Profile</Menu.Item>
                            <Menu.Item
                                className='active:bg-gray-300'
                                component={Link}
                                to='/contact'
                                icon={<IconNote size={14} />}>Contact Us</Menu.Item>
                            <Menu.Item
                                className='active:bg-gray-300'
                                component={Link}
                                to='/order'
                                icon={<IconShoppingCart size={14} />}>Order</Menu.Item>
                            <Menu.Item
                            className='active:bg-gray-300'
                            component={Link}
                            to='/blog'
                            icon={<IconNews size={14} />}>Blog</Menu.Item>

                    </Menu.Dropdown>
                </Menu>
            </div>
            {/* Adey Abeba */}
            <div className='absolute top-2 md:top-1 right-16 md:right-5 rotateAdey'>
                <button
                    onClick={() => setAdeyOpened(true)}
                >
                    <img
                        className='w-20 md:w-28'
                        src={adey}
                        alt="Adey Abeba" />
                </button>
            </div>
            <Modal
                opened={adeyOpened}
                onClose={() => setAdeyOpened(false)}
                title="መልካም አዲስ አመት"
            >
                <div className='w-full h-full'>
                    <img src={adey3} alt="Happy New Year" />

                </div>
            </Modal>
        </div>
        </header >
    )
}
