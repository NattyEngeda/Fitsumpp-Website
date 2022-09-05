import { ArrowRightIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { Modal, Group, useMantineTheme } from '@mantine/core';

export default function InfraComp(props) {
  const [opened, setOpened] = useState(false);
  const detail = `${props.detail.substring(0, 300)}...`;
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        size="xl"
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={() => setOpened(false)}
        title={<h1 className='text-three-600 font-bold text-3xl'>{props.title}</h1>}
      >
        <div className='flex flex-col gap-5'>
          <hr className='bg-three-600 w-2/3' />
          <div>
            <p className='text-xl'>
              {props.detail}
            </p>
          </div>
        </div>
      </Modal>
      <div className='flex flex-col md:absolute lg:right-32 w-full h-auto md:h-96 md:grid grid-cols-3 md:py-10 lg:py-0 border border-gray-200 bg-white shadow-xl'>
        {/* Image Section */}
        <div className='overflow-hidden'>
          <div className=' h-full w-full lg:w-[40vw] overflow-hidden border border-gray-100'>
            <img
              src={props.image}
              alt="Place Holder"
              className='w-full'
            />
          </div>
        </div>
        {/* Content Section */}
        <div className='flex flex-col items-start gap-6  col-span-2 px-5 py-1 '>
          <h1 className='text-[42px] '><span className='text-three-600 font-semibold'>{props.title}</span></h1>
          <p className='text-xl font-light '>{detail}</p>
          <Group className='flex items-center justify-start gap-2'>
            <button onClick={() => setOpened(true)} className='text-three-600 text-2xl'>Learn More</button>
            <ArrowRightIcon className='w-5 text-three-600' />
          </Group>
        </div>
      </div>
    </>
  )
}
