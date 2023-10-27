import React from 'react';
import {
  Box,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tabs,
  Flex,
  Text,
} from '@chakra-ui/react';
import FooterForm from './FooterForm';
import Details from './Details';
import { BiPhone } from 'react-icons/bi';
import { officeAddress, plantAddress } from 'components/common/constant';
import { IoLocationOutline } from 'react-icons/io5';
import googleMap from "../../assets/googleMap.png"
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <Box
      // py="25px"
      id='footer-contact'
      textAlign='justify'
      fontSize='24px'
      fontFamily='Roboto'
      pt={16}
      fontWeight={400}
      lineHeight='28px'
      className="footer-texture"
    >
      <Tabs isLazy>
        <TabList px={[10, 30, 60, 90]} py='0px' fontFamily='Montserrat'>
          <Tab fontWeight={800} className='product-tab-text'>
            Office address
          </Tab>
          <Tab fontWeight={800} className='product-tab-text'>
            Plant address
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding='0px'>
            <Box
              position='relative'
              height='400px'
              backgroundImage={`url(${googleMap})`}
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
            >
              <a href={officeAddress} target='_blank' rel='noopener noreferrer'>
                <Box
                  position='absolute'
                  bottom='20px'
                  left='20px'
                  ml='40px'
                  fontFamily='Montserrat'
                  // fontWeight={600}
                >
                  <Flex textAlign='start'>
                <Fade left>
                    <IoLocationOutline color='#37C2CC' />
                    <Text fontSize='14px' mb={2} ml={2}>
                      5001-5005, 5th Floor,
                      <br /> Shree Mahavir Textile Market Surat Kadodara
                      <br /> Road, Magob –395010, Surat, Gujarat, India
                    </Text>
                    </Fade>
                  </Flex>
                  <Flex alignItems='center' textAlign='start'>
                <Fade left>
                    <BiPhone color='#37C2CC' />
                    <Text fontSize='14px' ml={2}>
                      0261-2644362/363
                    </Text>
                  </Fade>
                  </Flex>
                </Box>
              </a>
              <Box
                w='480px'
                h='600px'
                bg='white'
                position='absolute'
                right='40px'
                top='-23%'
                borderRadius='16px'
                boxShadow='2xl'
              >
                <FooterForm />
              </Box>
            </Box>
            <Details />
          </TabPanel>
          <TabPanel padding='0px'>
            <Box
              position='relative'
              height='400px'
              backgroundImage={`url(${googleMap})`}   
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
            >
              <a href={plantAddress} target='_blank' rel='noopener noreferrer'>
                <Box
                  position='absolute'
                  bottom='20px'
                  left='20px'
                  ml='40px'
                  fontFamily='Montserrat'
                  // fontWeight={600}
                >
                  <Flex textAlign='start'>
                    <Fade left>
                    <IoLocationOutline color='#37C2CC' />
                    <Text fontSize='14px' mb={2} ml={2}>
                      Block No. 57, Plot No. A1/1 & A-1&2, Pipodra-
                      <br /> 394110. Taluka- Mangrol,
                      <br /> Surat, Gujarat, India.
                    </Text>
                    </Fade>
                  </Flex>
                  <Flex alignItems='center' textAlign='start'>
                    <Fade left>
                    <BiPhone color='#37C2CC' />
                    <Text fontSize='14px' ml={2}>
                      026121-329347
                    </Text>
                    </Fade>
                  </Flex>
                </Box>
              </a>
              <Box
                w='480px'
                h='600px'
                bg='white'
                position='absolute'
                right='40px'
                top='-23%'
                borderRadius='16px'
                boxShadow='2xl'
              >
                <FooterForm />
              </Box>
            </Box>
            <Details />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Footer;
