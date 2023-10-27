import React, { useState } from 'react';
import { Box, Image, Text, useMediaQuery } from '@chakra-ui/react';

import logo from '../../assets/logo.png';
import img1 from '../../assets/1.png';
import BottomBar from './BottomBar';

const ComingSoon = () => {
  const [isLargerThen800] = useMediaQuery('(min-width: 1500px)');
  const [state, setState] = useState();

  React.useEffect(() => {
    if (isLargerThen800) {
      setState('100vh');
    } else {
      setState('auto');
    }
  }, [isLargerThen800]);

  return (
    <>
      {/* <div style={{ height: '100vh' }}> */}
      <Box
        p='4px'
        height={state}
        m='auto'
        // style={{ verticalAlign: 'center', top: '50%' }}
      >
        <center>
          <Image src={logo} draggable={false} />
        </center>
        <Box mt='-45px'>
          <Text
            textAlign='center'
            fontFamily='Neuton'
            // fontSize={['40px', '52px']}
            // letterSpacing='1px'
            fontSize={[
              '20px',
              '22px',
              '25px',
              '30px',
              '35px',
              '43px',
              '45px',
              '52px',
            ]}
            lineHeight={['44px', '81px']}
            color='#CB6229'
          >
            The website is currently under construction
          </Text>
          <Text
            mt={['20px', '10px']}
            textAlign='center'
            fontFamily='Neuton'
            // letterSpacing='1px'
            fontSize={['32px', '38px', '42px', '44px']}
            // fontSize={['20px', '25px', '30px', '35px', '43px', '45px', '52px']}
            lineHeight='44px'
            // letterSpacing='-0.5px'
            letterSpacing={['0.5px', '1px', '1.5px']}
          >
            We are manufacturers of
          </Text>
          <Text
            mt='6px'
            textAlign='center'
            fontFamily='Neuton'
            fontSize={['32px', '40px', '48px', '56px']}
            // fontSize={['20px', '25px', '30px', '35px', '43px', '45px', '52px']}
            lineHeight={['56px', '48px']}
            letterSpacing={['6px', '8px']}
          >
            Woven Sack Bags
          </Text>
        </Box>

        <center>
          <Image src={img1} draggable={false} mt='15px' />
        </center>
      </Box>
      {/* <Box> */}
      <BottomBar />
      {/* </Box> */}
      {/* </div> */}
    </>
  );
};

export default ComingSoon;
