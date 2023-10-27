import { Box } from '@chakra-ui/layout';
import React from 'react';

const CustomeLayout = (props) => {
  const { children } = props;
  const { bg, color } = props;
  return (
    <Box bg={bg} color={color}>
      <Box maxWidth={1380} w='100%' m='auto' {...props}>
        {/* <Box maxWidth={1380} px={6} w='100%' mx='auto' {...props}> */}
        {children}
      </Box>
    </Box>
  );
};

export default CustomeLayout;
