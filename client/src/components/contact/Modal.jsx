import { Dialog, Transition } from '@headlessui/react'
import { TextArea } from 'grommet'
import { Fragment, useState } from 'react'
import { Modal, Group, useMantineTheme, TextInput, Textarea } from '@mantine/core';
import axios from 'axios';

export default function Modale() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const data = {name,email,message};

  const submit = () => {
    
    console.log(data)
    axios
      .post('http://localhost:5000/api/message', data)
      .then(response =>{
        console.log(response);
        if(response.status == 200){

        }
        
      })
      .catch(error=>{
        console.log(error)
      })

  }

  return (
    <>
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
        <div className='flex flex-col gap-5 '>
          <TextInput
            placeholder="Your name"
            onChange={(e)=> setName(e.target.value)}
            label="Name"
            size='md'
            withAsterisk
          />
          <TextInput
            placeholder="Your email"
            onChange={(e)=> setEmail(e.target.value)}

            label="Email"
            size='md'
            withAsterisk
          />
           <TextInput
            placeholder="Your Phone"
            onChange={(e)=> setEmail(e.target.value)}

            label="Phone"
            size='md'
            withAsterisk
          />
          <Textarea
            placeholder="Your Message"
            onChange={(e)=> setMessage(e.target.value)}
            label="Message"
            size="md"
            minRows={5}
            withAsterisk
          />
          <button 
          onClick={submit}
          className='px-5 py-3 bg-primary-500 text-lg text-white shadow-md hover:bg-primary-600 hover:shadow-xl'>Send</button>
        </div>
      </Modal>

      <Group >
        <button
          type='button'
          onClick={() => setOpened(true)}
          className='bg-primary-500 px-5 py-3 text-white shadow-lg hover:shadow-xl'
        >Send Message</button>
      </Group>
    </>
  )
}
