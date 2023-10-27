import React from 'react';
import { Button, Input, Stack, Center } from '@chakra-ui/react';

const UserInputForMobile = () => {
  return (
    <>
      <Stack width={['350px', '400px', '450px']}>
        <Input
          type='text'
          h='2.5rem'
          placeholder='Enter email'
          bg='white'
          borderRadius='3rem'
          mb={2}
        />
        <Center>
          <Button
            width='30%'
            h='2.5rem'
            size='lg'
            fontSize='15px'
            borderRadius='3rem'
            color='white'
            fontWeight='normal'
            variant='solid'
            style={{ backgroundColor: '#FF6347' }}
          >
            Submit
          </Button>
        </Center>
      </Stack>
    </>
  );
};

export default UserInputForMobile;
