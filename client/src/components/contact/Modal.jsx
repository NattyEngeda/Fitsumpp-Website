import { Dialog, Transition } from '@headlessui/react'
import { TextArea } from 'grommet'
import { Fragment, useState } from 'react'
import { Modal, Group, useMantineTheme, TextInput, Textarea } from '@mantine/core';

export default function Modale() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={opened}
        centered
        onClose={() => setOpened(false)}
        title={
          <h1 className='text-2xl text-primary-500 font-bold'>Email</h1>
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
            label="Name"
            size='md'
            withAsterisk
          />
          <TextInput
            placeholder="Your email"
            label="Email"
            size='md'
            withAsterisk
          />
          <Textarea
            placeholder="Your Message"
            label="Message"
            size="md"
            minRows={5}
            withAsterisk
          />
          <button className='px-5 py-3 bg-primary-500 text-lg text-white shadow-md hover:bg-primary-600 hover:shadow-xl'>Send</button>
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
