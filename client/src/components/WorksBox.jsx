import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Group,useMantineTheme } from '@mantine/core';


export default function WorksBox(props) {
  const detail = `${props.description.substring(0, 250)}...`
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const Navigate = useNavigate();

  function changePage(){
    Navigate('/order')
  }

  return (
    // Full Box
    <div className='w-auto h-auto bg-white shadow-xl py-10 pb-28 flex flex-col items-center gap-8 px-5'>
      <Modal
        centered
        size="xl"
        opened={opened}
        onClose={() => setOpened(false)}
        title={<h1 className='text-3xl font-bold'>{props.name}</h1>}
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
      >
          <div className='flex flex-col gap-5'>
          <hr className='w-1/2 bg-primary-200 h-1'/>
          <div className='flex flex-col gap-4 text-lg'>
            <h1>{props.description}</h1>
            <hr className='bg-primary-200 '/>
            <div>
              <h1>Examples: </h1>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='h-52 bg-blue-500 w-full'>

                </div>
                <div className='h-52 bg-yellow-500 w-full'>

                </div>
            </div>
            <div>
              <button onClick={changePage} className='px-3 py-3 bg-primary-500 hover:bg-primary-600 hover:shadow-lg text-white text-lg'>Order now</button>
            </div>
          </div>
          </div>
      </Modal>

      {/* Upper Box */}
      <div className='flex flex-col items-center gap-2'>
        <div className=' w-24 h-24 overflow-hidden flex justify-center items-center'>
          <img className='w-full' src={props.icon} alt="Place Holder" />
        </div>
        <p className='text-3xl font-bold'>{props.name}</p>
      </div>
      {/* Center Content */}
      <div className='px-5'>
        <p>{detail}</p>
      </div>
      {/* Last Content */}
      <div>
        <Group >
        <Button onClick={() => setOpened(true)} className='h-14 px-10 rounded-none bg-primary-500 hover:bg-primary-700 shadow-md hover:shadow-xl text-white'>Learn More</Button>
        </Group>
      </div>
    </div>
  )
}
