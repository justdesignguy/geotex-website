import React from 'react';
import { Box, Text, Center, useMediaQuery } from '@chakra-ui/react';

import UserInputForMobile from './UserInputForMobile';
import UserInput from './UserInput';

const BottomBar = () => {
  const [isLargerThen800] = useMediaQuery('(min-width: 800px)');

  return (
    <>
      <Box width='100%' h='11.25rem' bg='#D5D5D5' p={4} marginX='auto'>
        <Center>
          <Text fontSize='md' p='1.2rem'>
            Get notified from Geotex
          </Text>
        </Center>
        <Center>
          {isLargerThen800 ? <UserInput /> : <UserInputForMobile />}
          {/* {window.innerWidth < 800 ? <UserInputForMobile /> : <UserInput />} */}
        </Center>
      </Box>
    </>
  );
};

export default BottomBar;
