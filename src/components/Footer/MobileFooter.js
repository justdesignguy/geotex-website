import React from 'react';
import {
  Box,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tabs,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';
import { GrLocation } from 'react-icons/gr';
import { BiPhone } from 'react-icons/bi';
import { officeAddress, plantAddress } from 'components/common/constant';
import msgIcon from '../../assets/Message.png';
import MoblieFooterForm from './MoblieFooterForm';
import googleMap from "../../assets/googleMap.png"
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import { IoLocationOutline } from 'react-icons/io5';
import {mail1,mail2} from "../common/constant"



const MobileFooter = () => {
  return (
    <Box pb='15px' bg='#527561'>
      <Tabs isLazy bg='#F0EAE3' isFitted>
        <TabList px={[10, 30, 60, 90]} py='0px'>
          <Tab
            _selected={{
              color: 'black',
              fontWeight: 600,
              borderBottom: '1px solid black',
            }}
            fontSize='15px'
            className='google-map-text'
          >
            Office address
          </Tab>
          <Tab
            _selected={{
              color: 'black',
              fontWeight: 600,
              borderBottom: '1px solid black',
            }}
            fontSize='15px'
            className='google-map-text'
          >
            Plant address
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding='0px' mt={8}>
            <a href={officeAddress} target='_blank' rel='noopener noreferrer'>
            <Box
              position='relative'
              height='400px'
              backgroundImage={`url(${googleMap})`}
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
            >
                <Box
                  position='absolute'
                  bottom='20px'
                  left='20px'
                  fontFamily='Montserrat'
                  // fontWeight={600}
                >
                  <Flex textAlign='start'>
                  <Fade left>
                    <IoLocationOutline color="#37C2CC" />
                    <Text fontSize='14px' mb={2} ml={2}>
                      5001-5005, 5th Floor,
                      <br /> Shree Mahavir Textile Market Surat Kadodara
                      <br /> Road, Magob –395010, Surat, Gujarat, India
                    </Text>
                    </Fade>
                  </Flex>
                  <Flex alignItems='center' textAlign='start'>
                  <Fade left>
                    <BiPhone color="#37C2CC"/>
                    <Text fontSize='14px' ml={2}>
                      0261-2644362/363
                    </Text>
                    </Fade>
                  </Flex>
                </Box>
            </Box>
              </a>
          </TabPanel>
          <TabPanel padding='0px' mt={8}>
            <a href={plantAddress} target='_blank' rel='noopener noreferrer'>
            <Box
              position='relative'
              height='400px'
              backgroundImage={`url(${googleMap})`}       
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
            >
                <Box
                  position='absolute'
                  bottom='20px'
                  left='20px'
                  fontFamily='Montserrat'
                  // fontWeight={600}
                >
                  <Flex textAlign='start'>
                  <Fade left>
                    <IoLocationOutline color="#37C2CC" />
                    <Text fontSize='14px' mb={2} ml={2}>
                      Block No. 57, Plot No. A1/1 & A-1&2, Pipodra-
                      <br /> 394110. Taluka- Mangrol,
                      <br /> Surat, Gujarat, India.
                    </Text>
                    </Fade>
                  </Flex>
                  <Flex alignItems='center' textAlign='start'>
                  <Fade left>
                    <BiPhone color="#37C2CC" />
                    <Text fontSize='14px' ml={2}>
                      026121-329347
                    </Text>
                    </Fade>
                  </Flex>
                </Box>
            </Box>
            </a>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box bg='#527561' mt={4} id='footer-contact'>
        <MoblieFooterForm/>
      </Box>
      <Box bg='#527561' m={8} mr={0}>
     <Flex alignItems='center' textAlign='start' mt={1}>
        <HeadShake>  
          <Image src={msgIcon} className='footer-icon-style' />
          {/* <FiMail className="footer-icon-style" /> */}
          <Text
            fontSize='16px'
            color='#140A04'
            textDecoration='underline'
            fontFamily='Poppins'
            textColor="white"
          >
        <a href={`mailto:${mail1}`} className="footer-gmail">{mail1}</a>
          </Text>
          </HeadShake>
        </Flex>
        <Flex alignItems='center' textAlign='start' mt={1}>
        <HeadShake>  
          <Image src={msgIcon} className='footer-icon-style' />
          {/* <FiMail className="footer-icon-style" /> */}
          <Text
            fontSize='16px'
            color='#140A04'
            textDecoration='underline'
            fontFamily='Poppins'
            textColor="white"
          >
        <a href={`mailto:${mail2}`} className="footer-gmail">{mail2}</a>
          </Text>
          </HeadShake>
        </Flex>
        <Fade right>
        <Text
          fontSize='22px'
          textAlign='start'
          mt={8}
          fontWeight={400}
          color='#140A04'
          fontFamily='Poppins'
          textColor="white"
        >
          Geotex Textile Private limited
        </Text>
        <Text
          fontSize='14px'
          textAlign='start'
          mt={2}
          fontWeight={400}
          color='#140A04'
          fontFamily='Poppins'
          textColor="white"
        >
          © 2009 — 2021 Geotex Inc.
        </Text>
        </Fade>
      </Box>
    </Box>
  );
};

export default MobileFooter;
