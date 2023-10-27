import React from "react";
import { Box, SimpleGrid, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-scroll";
import CustomeLayout from "../../CustomeLayout/CustomeLayout";
import homeLogo from "../../../assets/LandingPage.png";
import { LightSpeed, Flip, Fade, Zoom } from "react-reveal";
import home from "./background.png"

const Home = () => {
  return (
    <>
      <Box height="auto" w="100%" m="auto" className="home-texture" >
        <CustomeLayout>
          {/* <SimpleGrid columns={1} pt={[2, 4]} pb={6} px={[2, 4, 8]}> */}
          <SimpleGrid columns={1} pt={[2, 4]} px={[2, 4, 8]}>
            <Box
              // py={[8, 16, 32]}
              // px={4}
              m={["auto", "auto", "auto", "0px"]}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Fade left>
                <Text
                  py={[1, 2]}
                  // letterSpacing={[4, 8]}
                  textAlign="center"
                  fontSize={["27px", "29px", "30px", "36px"]}
                  fontWeight={500}
                  lineHeight={["45px", "50px", "60px"]}
                >
                  <span style={{ color: "black", fontFamily: "Poppins" }}>
                    Manufacturers of
                  </span>
                  <span style={{ color: "#cb6229", fontFamily: "Poppins" }}>
                    {" "}
                    Woven Sack Bags
                  </span>
                </Text>
              </Fade>
              <LightSpeed left>
                <Text
                  py={[1, 2]}
                  letterSpacing={[2, 4]}
                  textAlign="center"
                  fontSize={["11px", "13px", "15px", "18px"]}
                  fontWeight={600}
                  lineHeight={["12px", "20px", "24px"]}
                >
                  <span
                    style={{
                      color: "#140A04",
                      fontFamily: "Poppins",
                      opacity: "50%",
                    }}
                  >
                    WE BAG YOUR NEEDS, RESPONSIBLY.
                  </span>
                </Text>
              </LightSpeed>
              <Link className="nav-link" to="footer-contact">
                <Flip left>
                  <Button
                    outline
                    bg="#CB6229"
                    size={["lg"]}
                    float="left"
                    height={["2.5rem", "3rem"]}
                    width={["240px", "280px"]}
                    marginY="20px"
                    variant="unstyled"
                    borderRadius="full"
                  >
                    <Text
                      fontSize={["sm", "md", "lg", "xl"]}
                      letterSpacing={4}
                      fontWeight={200}
                      color="black"
                      fontFamily="Poppins"
                    >
                      Contact Us
                    </Text>
                  </Button>
                </Flip>
              </Link>
            </Box>
          </SimpleGrid>
          <Box>
            <Box
              d="flex"
              justifyContent="center"
              alignItems="center"
              mx={["25px", "15px", "5px"]}
              id="aboutusForMobile"
            >
              {/* <Box h="500px" w="500px"> */}
              <Zoom top>
                <Image src={homeLogo} draggable={false} />
              </Zoom>
              {/* </Box> */}
            </Box>
          </Box>
        </CustomeLayout>
      </Box>
    </>
  );
};

export default Home;
