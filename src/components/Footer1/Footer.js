import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import FooterAddress from './FooterAddress';
import FooterBottomBar from './FooterBottomBar';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#F2F2F2' }}>
      <SimpleGrid columns={[1, 1, 2]} spacing={[4, 8]} px={6} mx={6} pt={6}>
        <Box mr={[0, 0, 0, 0, 'auto']} textAlign='center'>
          <Text fontSize={[18, 22, 24]} fontWeight='700'>
            Geotex Textile Private Limited
          </Text>
        </Box>
        <Box ml={[0, 0, 0, 0, 'auto']} textAlign='center'>
          <Text>
            sales@geotex.in
            <br />
            geotexpvtltd@yahoo.com
          </Text>
        </Box>
      </SimpleGrid>
      <hr
        style={{
          color: 'black',
          backgroundColor: 'black',
          margin: '20px 49px 20px 49px',
          opacity: '0.6',
        }}
      />

      <SimpleGrid columns={[1, 1, 2]} spacing={[4, 8]} px={6} mx={6} mb={10}>
        <FooterAddress
          title='Office Address'
          address='5001-5005, 5th Floor, Shree Mahavir Textile Market Surat Kadodara'
          location='Road, Magob –395010, Surat, Gujarat, India'
          contactNum='0261-2644362/363'
          margin='right'
        />
        <FooterAddress
          title='Plant Address'
          address='Block No. 57, Plot No. A1/1 & A-1&2, Pipodra- 394110. Taluka- Mangrol,'
          location='Surat, Gujarat, India.'
          contactNum='026121-329347'
          margin='left'
        />
      </SimpleGrid>
      <FooterBottomBar />
    </div>
  );
};

export default Footer;
