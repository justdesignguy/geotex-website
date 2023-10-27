import { Image } from "@chakra-ui/image";
import { Box, SimpleGrid, Text } from "@chakra-ui/layout";
import React from "react";
import { Fade } from "react-reveal";

const PrincipalBox = ({ align, description, title, image }) => {
  let order;
  if (align === "left") {
    order = [null, null, 1];
  } else if (align === "right") {
    order = [null, null, 0];
  }
  return (
    // bg="#F2F2F2"
    <Box pb={6}>
    <Box className="principal-box">
      <SimpleGrid minChildWidth={300} spacingX={[4, 6, 8, 12]} spacingY={10}>
        <Box order={order} m="auto">
          <Fade left>
            <Image
              src={image}
              height={["auto", "320px", "365px", "450px"]}
              width={["auto", "350px", "450px", "750px"]}
            />
          </Fade>
        </Box>
        <Box w="100%" my="auto" px={[5, 30, 10, 90]}>
          <Text
            fontSize={["18px", "20px", "22px", "24px"]}
            fontFamily="Poppins"
            fontWeight={700}
          >
            {title}
          </Text>
          <Fade right>
            <Text
              textAlign="justify"
              fontSize={["14px", "16px", "18px", "20px"]}
              fontFamily="Montserrat"
              mt={4}
              fontWeight={400}
              lineHeight="28px"
            >
              {description}
            </Text>
          </Fade>
        </Box>
      </SimpleGrid>
      {/* <SimpleGrid
        columns={[1, 1, 2, 2]}
        spacingY={4}
        height='471px'
        // px={[5, 30, 10, 90]}
        // spacingX={[10, 10, 10, 8]}
      >
        <Box
          // width={['300px', '300px', '340px', '580px']}
          // height={['280px', '300px', '300px', '360px']}
          border='1px solid black'
          borderRadius='8px'
        ></Box>
        <Box m='auto' px={[5, 30, 10, 90]}>
          <Text fontSize='24px' fontFamily='Roboto' fontWeight={600}>
            Environmental Responsibility
          </Text>
          <Text
            textAlign='justify'
            fontSize={[18, 24]}
            // fontFamily='Roboto'
            mt={4}
            fontWeight={400}
            lineHeight='28px'
          >
            {description}
          </Text>
        </Box>
      </SimpleGrid> */}
    </Box>
    </Box>
  );
};

export default PrincipalBox;
