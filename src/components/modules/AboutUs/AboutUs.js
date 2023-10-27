import { SimpleGrid } from "@chakra-ui/layout";
import { Box, Text } from "@chakra-ui/layout";
import Fade, { LightSpeed, Slide } from "react-reveal";
import React from "react";
import AboutCard from "./AboutCard";
import { IoPersonOutline, RiGroupLine } from 'react-icons/all'

const AboutUs = () => {
  return (
    // <Box px={[6, 30, 30, 90]} bg="#F4EFEC" py="25px" id="aboutus">
    <Box px={[6, 30, 30, 90]} py="25px" id="aboutus" className="about-texture">
      <Text
        textAlign="start"
        fontSize={["18px", "20px", "22px", "24px"]}
        fontFamily="Poppins"
        fontWeight={700}
      >
        About Us
      </Text>
      <hr className="horizontal-border" />
      <Fade left>
        <Text
          textAlign="justify"
          mt={6}
          fontFamily="Montserrat"
          fontWeight={400}
          lineHeight="27px"
          fontSize={["14px", "16px", "18px", "20px"]}
        >
          Geotex Textile Pvt Ltd was established in the year 2009 in Surat
          District of Gujarat. With an intensive and vast experience of textile
          manufacturing and trading of 30+years, our promoters Mr. Arya and Mr.
          Singhania decided to put up a manufacturing plant of woven PP bags to
          cater to the growing and fast developing Gujarat State with
          fertilisers, sugar, and cement plants coming in and close to the state
          boundaries.
        </Text>
      </Fade>
      <Fade right>
        <Text
          textAlign="justify"
          mt={6}
          fontFamily="Montserrat"
          fontWeight={400}
          lineHeight="27px"
          fontSize={["14px", "16px", "18px", "20px"]}
        >
          Realising the need of world class packaging and with our product being
          the first layer protection or only laywer of protection in many cases;
          for our esteemed buyers product, we at Geotex always strive to give
          the best quality product and the best after sales service.
        </Text>
      </Fade>

      <Fade left>
        <Text
          textAlign="justify"
          mt={6}
          fontFamily="Montserrat"
          fontWeight={400}
          lineHeight="27px"
          fontSize={["14px", "16px", "18px", "20px"]}
        >
          Starting with one Extruder and 54 circular looms in the year 2015, we
          slowly moved on to double our capacities with infusing one more
          extruder and 45 more circular looms bring up our capacities to 2
          extruders and 94 circular looms enabling us to produce 200,000 –
          250,000 bags daily from scratch to last process of printing. The
          increase in production helped Geotex to venture in the seas of Exports
          successfully for the past 5 years.
        </Text>
      </Fade>
      <SimpleGrid columns={[1, 1, 2, 3]} mt={10} spacingY={10} spacingX={[4, 0]}>
        <AboutCard name="MR. VIJENDRA ARYA" designation="Director" icon={<IoPersonOutline size='50px' />} />
        <AboutCard name="MR. VEER SINGHANIA" designation="Director" icon={<IoPersonOutline size='50px' />} />
        <AboutCard name="MR. HARISH RATHI" designation="Marketing Manager" icon={<IoPersonOutline size='50px' />} />
      </SimpleGrid>
    </Box>
  );
};

export default AboutUs;
