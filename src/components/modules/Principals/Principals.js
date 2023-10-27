import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { Fade } from "react-reveal";
import PrincipalBox from "./PrincipalBox";
import { principals } from "./PrincipalData";

const Principals = () => {
  return (
    <Box pt={[12, 12, 12, 24]} id="principals" className="principal-texture">
      {/* <Box width={['95%', '90%', '80%', '50%']} m='auto' mb={12}> */}
      <Box px={[6, 30, 30, 90]}>
        <Text
          textAlign="start"
          fontSize={["18px", "20px", "22px", "24px"]}
          fontFamily="Poppins"
          fontWeight={700}
          mt={4}
        >
          Principals
        </Text>
        <hr className="horizontal-border" />
        <Fade right>

        <Text
          textAlign="start"
          fontSize={["16px", "18px", "20px", "22px"]}
          fontFamily="Montserrat"
          mt={8}
          fontWeight={400}
          lineHeight="27px"
          >
          First and Foremost as our motto says, we bag your needs, Responsibly,
          we at Geotex understand the responsibilities we have on us.
        </Text>
          </Fade>
        <br />
      </Box>
      {principals.map((principal) => {
        return (
          <>
            <PrincipalBox
              key={principal.id}
              align={principal.align}
              title={principal.title}
              description={principal.description}
              image={principal.image}
            />
          </>
        );
      })}
    </Box>
  );
};

export default Principals;
