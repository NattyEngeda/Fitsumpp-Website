import React, { useState } from 'react'
import { useForm } from '@mantine/form'
import { NumberInput, TextInput, Button, Select, Textarea, Notification, Group } from '@mantine/core'
import { CheckCircleIcon } from '@heroicons/react/outline';

import axios from 'axios'

// Styles
import 'animate.css'
import { useEffect } from 'react';

export default function OrderForm() {

        const topScroll = () => {
        window.scrollTo(0,0)
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
        console.log(form.values);
        axios
            .post('http://localhost:5000/api/order', form.values)
            .then(response => {
                if (response.status == 200) {
                    console.log('success');
                    setSendValue(true);
                    form.reset();
                    topScroll();
                                  
                }
            })
            .catch(error => {
                console.log(error)
            })
    };

    const setPopUp = () =>{
        const newform = 






        setTimeout(() => {
            setSendValue(true);
        }, 1000);
        return () => exitPopUp();
    }
    const exitPopUp = () =>{
        setSendValue(false)
    }



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
                {/* <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
            <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
            <NumberInput
                mt="sm"
                label="Age"
                placeholder="Age"
                min={0}
                max={99}
                {...form.getInputProps('age')}
            />
            */}


                <TextInput
                    placeholder='Name'
                    // onChange={(e) => setName(e.target.value)}
                    // {sendValue ? }

                    label='Name'
                    size='md'
                    {...form.getInputProps('name')}
                    // value={sendValue ? '' : null}
                />
                <TextInput
                    placeholder='0'
                    // onChange={(e) => setPhoneNumber(e.target.value)}
                    label='Phone Number'
                    size='md'
                    {...form.getInputProps('phone_number')}
                />
                <TextInput
                    placeholder='Your Email'
                    // onChange={(e) => setEmail(e.target.value)}
                    label='Email'
                    size='md'
                    {...form.getInputProps('email')}
                />
                <Select
                    label="Pick Product"
                    // onSelect={(e) => setProduct(e.target.value)}
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
                    // onChange={(e) => setDesc(e.target.value)}
                    label='Description'
                    size='md'
                    minRows={4}
                    {...form.getInputProps('description')}
                />
                <Button
                    className='px-4 py-3 h-16 bg-green-600 shadow-md hover:bg-green-700 hover:shadow-xl text-xl text-white'
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </>
    )
}
