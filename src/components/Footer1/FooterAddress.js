import React from 'react';
import { Box, Text } from '@chakra-ui/layout';

const FooterAddress = ({ margin, title, address, location, contactNum }) => {
  return (
    <>
      {margin === 'right' ? (
        <Box mr={[0, 0, 0, 0, 'auto']} textAlign='center'>
          <Text textAlign='start' fontSize='14px'>
            <b>{title}</b>
            <br />
            {address} <br />
            {location} <br />
            {contactNum}
          </Text>
        </Box>
      ) : (
        <Box ml={[0, 0, 0, 0, 'auto']} textAlign='center'>
          <Text textAlign='start' fontSize='14px'>
            <b>{title}</b>
            <br />
            {address} <br />
            {location} <br />
            {contactNum}
          </Text>
        </Box>
      )}{' '}
    </>
  );
};

export default FooterAddress;
