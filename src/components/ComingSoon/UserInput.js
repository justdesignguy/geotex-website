import React from 'react';
import { Button, InputGroup, Input, InputRightElement } from '@chakra-ui/react';

const UserInput = () => {
  return (
    <InputGroup size='md' width='40%'>
      <Input
        pr='4.5rem'
        type='text'
        placeholder='Enter email'
        bg='white'
        borderRadius='3rem'
      />
      <InputRightElement width='6.5rem'>
        <Button
          h='2.5rem'
          size='lg'
          borderRadius='3rem'
          color='white'
          fontWeight='normal'
          variant='solid'
          style={{ backgroundColor: '#FF6347' }}
        >
          Submit
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default UserInput;
