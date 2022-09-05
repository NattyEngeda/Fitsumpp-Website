import { Group, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
  
function Test() {


  return (
    <Group position="center "
    className='z-40'
    >
      
      <Button
      className=''
        variant="outline"
        onClick={() =>
          showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}

export default Test;