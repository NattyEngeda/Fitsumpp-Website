import React, { useState } from 'react'
import { useForm } from '@mantine/form'
import { NumberInput, TextInput, Button, Select, Textarea } from '@mantine/core'
import axios, { Axios } from 'axios'

// Styles
import 'animate.css'
// Icons
import { CheckCircleIcon } from '@heroicons/react/outline';

export default function OrderForm() {
    const topScroll = () => {
        window.scrollTo(0, 0)
    }
    const [sendValue, setSendValue] = useState(false);
    const form = useForm({
        initialValues: { name: '', phone_number: '', email: '', product: '', quantity: '', description: '' },
        // functions will be used to validate values at corresponding key
        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            phone_number: (value) => (!/[0-9]/.test(value) ? 'Numbers Only' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            product: (value) => (value.length < 0 ? 'Please Choose a product' : null),
            quantity: (value) => (value.length < 0 ? 'Atleast Pick 1 quantity' : null),
            description: (value) => (value.length < 10 ? 'Use more than 10 words express what you want' : null)
        },
    });
    const handleSubmit = (values: typeof form.values) => {
            axios
            .post('https://api.fitsumpp.com/order', form.values)
            .then(response => {
                if (response.status == 200) {
                    setSendValue(true);
                    form.reset();
                    topScroll();
                }
            })
            .catch(error => {
                })

    };
    return (
        <>
            {
                sendValue &&
                <div className='absolute top-5 md:bottom-5 right-5 w-60 h-20 bg-green-600 normshad rounded-lg shadow-xl backdrop-blur-sm bg-opacity-90 flex flex-row items-center px-3 gap-5 animate__animated animate__slideInRight'>
                    <CheckCircleIcon className='w-10 text-white' />
                    <h1 className='text-white '>Your Order Was Put Successfuly</h1>
                </div>
            }
            <form
                onSubmit={form.onSubmit(handleSubmit)}
                className='flex flex-col gap-5 md:pr-10'
            >
                <TextInput
                    placeholder='Name'
                    label='Name'
                    size='md'
                    {...form.getInputProps('name')}
                />
                <TextInput
                    placeholder='0'
                    label='Phone Number'
                    size='md'
                    {...form.getInputProps('phone_number')}
                />
                <TextInput
                    placeholder='Your Email'
                    label='Email'
                    size='md'
                    {...form.getInputProps('email')}
                />
                <Select
                    label="Pick Product"
                    placeholder="Pick your Product"
                    {...form.getInputProps('product')}
                    size='md'
                    data={[
                        { value: 'Cards', label: 'Bussiness Cards' },
                        { value: 'Banner', label: 'Banner' },
                        { value: 'Broucher', label: 'Broucher' },
                        { value: 'Sign', label: 'Signs' },
                        { value: 'Foam', label: '3D Foam' },
                        { value: 'Veichle', label: 'Veichle Graphics' },
                        { value: 'LED', label: 'P6 LEDS' },
                        { value: 'Calanders', label: 'Calander' },
                        { value: 'Car', label: 'Car Branding' },
                        { value: 'Cake', label: 'Cake Topper' },
                        { value: 'Full', label: 'Full Branding' },
                        { value: 'Other', label: 'Other' },
                    ]}
                />
                <NumberInput
                    label="Quantity"
                    placeholder='1'
                    {...form.getInputProps('quantity')}
                />
                <Textarea
                    placeholder='Description'
                    label='Description'
                    size='md'
                    minRows={4}
                    {...form.getInputProps('description')}
                />
                <button
                    className='px-4 py-3 h-16 bg-primary-600 shadow-md hover:bg-primary-700 hover:shadow-xl text-xl text-white'
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </>
    )
}
