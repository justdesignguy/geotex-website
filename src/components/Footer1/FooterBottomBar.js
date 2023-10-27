import React from 'react';
import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/layout';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/all';

const FooterBottomBar = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={[4, 8]} px={6} mx={6} my={4}>
      <Box mr={[0, 0, 0, 0, 'auto']} textAlign='center'>
        <Text>© 2009 — 2021 Geotex Inc.</Text>
      </Box>
      <Box ml={[0, 0, 0, 0, 'auto']} textAlign='center'>
        {/* <Text>Facebook -- Instagram</Text> */}
        <Stack direction='row' d='flex' justifyContent='center'>
          <AiFillFacebook size='40px' />
          <AiFillInstagram size='40px' />
        </Stack>
      </Box>
    </SimpleGrid>
  );
};

export default FooterBottomBar;
