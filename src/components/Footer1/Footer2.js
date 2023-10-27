import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <div>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={8} px={6}>
        <Box mr={[0, 0, 0, 'auto']} m={['auto', 'auto', 'auto', 0]}>
          <Text fontSize='24px' fontWeight='700'>
            Geotex Textile Private Limited
          </Text>
        </Box>
        <Box ml={[0, 0, 0, 'auto']} m={['auto', 'auto', 'auto', 0]}>
          <Text>
            sales@geotex.in
            <br />
            geotexpvtltd@yahoo.com
          </Text>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Footer;
