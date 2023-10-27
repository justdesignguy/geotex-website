import React, { useState } from "react";
import {
  Box,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import OpenTopPanel from "./TabPanels/OpenTopPanel";
import StitchingPanel from "./TabPanels/StitchingPanel";
import PrintingPanel from "./TabPanels/PrintingPanel";
import LaminationPanel from "./TabPanels/LaminationPanel";
import MultiColorPanel from "./TabPanels/MultiColorPanel";
import SwatchCardPanel from "./TabPanels/SwatchCardPanel";
import { Fade } from "react-reveal";

const Product = () => {
  // const [dropDownTabToggler, setDropDownTabToggler] = useState(true);
  const [currentSelectedMenu, setCurrentSelectedMenu] = useState(
    "Color/Multicolor"
  );

  const toggleTabHandler = (menuItemText) => {
    setCurrentSelectedMenu(menuItemText);
    // setDropDownTabToggler(!dropDownTabToggler);
  };

  return (
    <>
      <span id="productsForMobile"></span>
      <Box w="100%" py={[2, 4, 12, 10]} m="auto" id="products" className="product-texture">
        <Box px={[6, 30, 30, 90]}>
          <Text
            textAlign="start"
            fontSize={["18px", "20px", "22px", "24px"]}
            fontFamily="Poppins"
            fontWeight={700}
            mt={4}
          >
            Product
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
              We offer a basket range of products to our customer
            </Text>
          </Fade>
          <br />
        </Box>
        {/* bg="#FFFFFF" */}

        <Box
          py="25px"
          // px='75px'
          textAlign="justify"
          fontSize="24px"
          fontFamily="Roboto"
          fontWeight={400}
          lineHeight="28px"
          mx={["20px", "75px"]}
        >
          <Tabs isLazy variant="soft-rounded">
            <TabList className="tabScroller">
              <Tab
                _selected={{ color: "white", bg: "#63639D" }}
                className="product-tab-text"
              >
                OpenTop
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#63639D" }}
                className="product-tab-text"
              >
                Stitching
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#63639D" }}
                className="product-tab-text"
              >
                <Menu variant="unstyled" className="product-tab-text">
                  <MenuButton
                  // onClick={() => setCurrentSelectedMenu("select")}

                  // as={Button}
                  // rightIcon={<IoChevronDownCircleOutline />}
                  >
                    <Flex d="flex" alignItems="center" justifyContent="center">
                      <span style={{ fontFamily: "Poppins" }}>
                        {currentSelectedMenu}{" "}
                      </span>{" "}
                      <Box ml="10px">
                        <IoChevronDownCircleOutline />
                      </Box>
                    </Flex>
                  </MenuButton>
                  <MenuList p="0px" color="white">
                    <MenuItem
                      onClick={() => toggleTabHandler("Color/Multicolor")}
                      style={{ backgroundColor: "#63639D" }}
                      color="white"
                      fontFamily="Poppins"
                      borderRadius="21px 21px 0px 0px"
                    >
                      Select
                    </MenuItem>
                    <MenuItem
                      onClick={() => toggleTabHandler("Color/Multicolor")}
                      className="menu-block"
                      color="white"
                      fontFamily="Poppins"
                    >
                      Color/Multicolor
                    </MenuItem>
                    <MenuItem
                      onClick={() => toggleTabHandler("SwatchCard")}
                      className="menu-block"
                      color="white"
                      fontFamily="Poppins"
                      borderRadius="0px 0px 21px 21px"
                    >
                      Swatch Card
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#63639D" }}
                className="product-tab-text"
              >
                Printing
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#63639D" }}
                className="product-tab-text"
              >
                Lamination
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <OpenTopPanel />
              </TabPanel>

              <TabPanel>
                <StitchingPanel />
              </TabPanel>

              <TabPanel>
                {currentSelectedMenu === "SwatchCard" ? (
                  <>
                    <SwatchCardPanel />
                  </>
                ) : (
                  <>
                    <MultiColorPanel />
                  </>
                )}
              </TabPanel>

              <TabPanel>
                <PrintingPanel />
              </TabPanel>

              <TabPanel>
                <LaminationPanel />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        {/* <SimpleGrid columns={['1', '2', '3']} spacing={8}>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                text={product.text}
                images={product.productImgs}
              />
            );
          })}
        </SimpleGrid>

        <Text
          textAlign='center'
          fontSize={[24, 32]}
          fontWeight='700'
          my='30px'
          alignSelf='center'
        >
          Lamination
        </Text>
        <SimpleGrid columns={['1', '2', '2']} spacing={8}>
          {laminations.map((lamination, index) => {
            return (
              <ProductCard
                key={lamination.id}
                text={lamination.text}
                images={lamination.laminationImgs}
              />
            );
          })}
        </SimpleGrid> */}

        {/* <Text textAlign='center' fontSize='32px' fontWeight='700' my={[27, 50]}>
          Pringting
        </Text>

        <Text
          textAlign={["justify", "center"]}
          fontSize={[18, 22]}
          mt="30px"
          mb="41px"
          mx={["20px", "50px", "70px", "100px"]}
        >
          With the experience of catering to different varieties of industry
          like aquaculture, cement, fertilisers, chemicals and dye, sugar etc.
          we understand the ethos and the need of our customer and satisfying it
          is of paramount importance to us.
        </Text> */}
      </Box>
    </>
  );
};

export default Product;
