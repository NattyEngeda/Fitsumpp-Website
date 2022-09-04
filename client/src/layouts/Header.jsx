import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MenuIcon } from '@heroicons/react/outline'
import { Menu, Button, } from '@mantine/core';
import { IconPhoto, IconHome, IconUser, IconShoppingCart, IconNote, IconNews } from '@tabler/icons';

// logo
import logo from '../assets/images/logo/F Only Colored Logo.png'
import ListItems from '../components/ListItems'

export default function Header2() {
    const Navigate = useNavigate();

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

            <div className='bg-green-600 col-span-8 md:col-span-6 w-auto lg:flex-none px-5 py-2 relative flex md:block items-center justify-end md:justify-center'>
                {/* Website Headers */}
                <div className='hidden md:flex items-center h-full space-x-5 pl-20'>
                    <ListItems link="/" name="Home" />
                    {/* <ListItems link="/product" name="Products" /> */}
                    <ListItems link="/gallery" name="Gallery" />
                    <ListItems link="/about" name="Profile" />
                    <ListItems link="/contact" name="Contact Us" />
                    <ListItems link="/blog" name="Blog" />
                    <ListItems link="/order" name="Order" />
                </div>

                {/* Hamburg Menu */}
                <div className='z-40 md:hidden'>
                    <Menu
                        transition="pop"
                        shadow="md"
                        width={200}>
                        <Menu.Target>
                            <Button className='bg-white text-primary-500 p-1'>
                                <MenuIcon className='w-7 h-7' />
                            </Button>
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
                                to='/blog'
                                icon={<IconNews size={14} />}>Blog</Menu.Item>
                            <Menu.Item
                                className='active:bg-gray-300'
                                component={Link}
                                to='/order'
                                icon={<IconShoppingCart size={14} />}>Order</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </div>
        </header>
    )
}
