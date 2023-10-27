import React, { useState } from "react";
import { Box, Flex, SimpleGrid, Image } from "@chakra-ui/react";

const ProductCard = ({ text, images }) => {
  const [productImg, setProductImg] = useState(images[0].item);
  let style;

  if (productImg.includes("TBS_04647.774e7cb9")) {
    style = {
      position: "absolute",
      top: "20%",
      left: "15%",
    };
  }

  if (productImg.includes("TBS_05118.d0f52c37")) {
    style = {
      position: "absolute",
      top: "16%",
      left: "15%",
    };
  }

  return (
    <Box
      h={["365px", "460px", "550px", "600px"]}
      w={["250px", "303px", "390px", "370px"]}
      bg="#FCFCFC"
      m="auto"
      position="relative"
      className="productcard"
      // boxShadow="0px 8px 16px rgba(20, 10, 4, 0.42)"
      // // filter="drop-shadow(0px 8px 16px #140A04)"
      // borderRadius="16px"
    >
      <center>
        <Image
          src={productImg}
          maxH={["250px", "330px", "380px", "440px"]}
          maxW={["190px", "220px", "280px", "300px"]}
          // boxShadow="0px 8px 16px rgba(20, 10, 4, 0.42)"
          style={style}
          // filter="drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.25))"
          filter="drop-shadow(0px 8px 7px rgba(0, 0, 0, 0.2))"
        />
      </center>
      <Flex justifyContent="center" w="100%">
        <SimpleGrid
          columns={3}
          bottom={["28px", "30px"]}
          position="absolute"
          spacingX={[8, 10, 12]}
          d="flex"
          justifyContent="center"
          alignItems="center"
        >
          {images.map((image) => {
            return (
              <Box
                key={image.id}
                height={["60px", "70px", "80px", "86px"]}
                width={["52px", "62px", "72px", "78px"]}
                boxShadow="0px 8px 16px rgba(20, 10, 4, 0.20)"
                borderRadius={["8px", "12px"]}
                d="flex"
                alignItems="center"
                justifyContent="center"
                py={["37px", "40px", "50px"]}
                cursor="pointer"
                onClick={() => setProductImg(image.item)}
              >
                <Image
                  src={image.item}
                  filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.16))"
                  // px="5px"
                  maxHeight={["64px", "74px", "84px", "89px"]}
                  maxWidth={["40px", "60px"]}
                  // width={['60px', '70px', '80px', '86px']}
                />
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default ProductCard;
