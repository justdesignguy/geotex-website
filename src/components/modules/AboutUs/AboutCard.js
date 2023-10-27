import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { IoPersonOutline, RiGroupLine } from 'react-icons/all'

const AboutCard = ({ name, designation, icon }) => {
  return (
    <Box m="auto" maxW="375px" maxH="385px" d='flex' justifyContent='center' alignItems='center' flexDirection='column' className="aboutus-card" p={['50px']}>
      {icon}
      <Text
        textAlign="center"
        fontSize={['20px', '22px']}
        mt={6}
        lineHeight='50px'
        fontFamily="Montserrat"
      >
        {name}
      </Text>
      <Text
        textAlign="center"
        fontSize={['16px', '18px']}
        fontFamily="Montserrat"
        fontWeight={400}
      >
        {designation}
      </Text>
    </Box>
  );
};

export default AboutCard;
