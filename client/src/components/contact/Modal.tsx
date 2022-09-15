import { useState } from 'react'
import { Modal, Group, useMantineTheme, TextInput, Textarea, Button } from '@mantine/core';
import axios from 'axios';
import { useForm } from '@mantine/form';
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline';

export default function Modale() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const [sendValue, setSendValue] = useState(false);
  const url = "http://localhost:5000/api/message";

  const form = useForm({
    initialValues: { name: '', email: '', phone_number: '', message: '' },
    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phone_number: (value) => (!/[0-9]/.test(value) ? 'Numbers Only' : null),
      message: (value) => (value.length < 10 ? 'Message Must be greater than 10 letters ' : null)
    },
  });
  const handleSubmit = (values: typeof form.values) => {
    axios
      .post('https://api.fitsumpp.com/message', form.values)
      .then(response => {
        if (response.status == 200) {
          setOpened(false);
          setSendValue(true);
          form.reset();
        }
      })
  }
  return (
    <>
      {
        sendValue &&
        <div className='absolute top-5 md:bottom-5 right-5 w-60 h-20 bg-primary-600 normshad rounded-lg shadow-xl backdrop-blur-sm bg-opacity-90 flex flex-row items-center px-3 gap-5 animate__animated animate__slideInRight'>
          <CheckCircleIcon className='w-10 text-white' />
          <h1 className='text-white '>Your Order Was Put Successfuly</h1>
        </div>
      }
      <Modal
        opened={opened}
        centered
        onClose={() => setOpened(false)}
        title={
          <h1 className='text-2xl text-primary-500 font-bold'>Message</h1>
        }
        size="lg"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        style={{
          color: 'gray'
        }}
      >
        <form
          onSubmit={form.onSubmit(handleSubmit)}
        >
          <div className='flex flex-col gap-5 '>
            <TextInput
              placeholder="Your name"
              label="Name"
              size='md'
              {...form.getInputProps('name')}
            />
            <TextInput
              placeholder="Your email"
              {...form.getInputProps('email')}
              label="Email"
              size='md'
            />
            <TextInput
              placeholder="Your Phone"
              {...form.getInputProps('phone_number')}
              label="Phone"
              size='md'
            />
            <Textarea
              placeholder="Your Message"
              {...form.getInputProps('message')}
              label="Message"
              size="md"
              minRows={5}
            />
            <Button
              type="submit"
              className='px-5 py-3 h-16 bg-primary-600 text-lg text-white shadow-md hover:bg-primary-700 hover:shadow-xl'>Send</Button>
          </div>
        </form>
      </Modal>

      <Group >
        <button
          type='button'
          onClick={() => setOpened(true)}
          className='bg-primary-600 px-5 py-3 text-white shadow-lg hover:shadow-xl'
        >Send Message</button>
      </Group>
    </>
  )
}
