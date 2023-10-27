import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import msgIcon from "../../assets/Message.png";
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';
import {mail1,mail2} from "../common/constant"

const Details = () => {
  return (
    <Box height="250px" bg="#527561" p={12}>
      <Flex alignItems="center" textAlign="start">
        {/* <FiMail className="footer-icon-style" /> */}
        <HeadShake>  
        <Image src={msgIcon} className="footer-icon-style" />
        <Text
          fontSize="16px"
          color="#140A04"
          fontFamily="Poppins"
          fontWeight={400}
          textDecoration="underline"
          textColor='white'
        >
        <a href={`mailto:${mail1}`} className="footer-gmail">{mail1}</a>
        </Text>
        </HeadShake>  
      </Flex>
      <Flex alignItems="center" textAlign="start">
        <HeadShake>     
      <Image src={msgIcon} className="footer-icon-style" />
        <Text
          fontSize="16px"
          color="#140A04"
          fontFamily="Poppins"
          fontWeight={400}
          textDecoration="underline"
          textColor="white"
        >
        </Text>
        <a href={`mailto:${mail2}`} className="footer-gmail">{mail2}</a>
        </HeadShake>

      </Flex>
      <Fade right>
      <Text
        fontSize="24px"
        textAlign="start"
        mt={8}
        color="#140A04"
        fontFamily="Poppins"
        fontWeight={500}
        textColor="white"
      >
        Geotex Textile Private limited
      </Text>
      <Text
        fontSize="14px"
        textAlign="start"
        mt={2}
        color="#140A04"
        fontFamily="Poppins"
        fontWeight={500}
        textColor="white"
        >
        © 2009 — 2021 Geotex Inc.
      </Text>
      </Fade>
    </Box>
  );
};

export default Details;
