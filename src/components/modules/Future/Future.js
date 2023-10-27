import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import future from "../../../assets/Future1.jpg";
import futureMobileView from "../../../assets/futureMobileView.png"
const Future = () => {
  return (
    <Box>
      {
        window.innerWidth > 620 ? <Image src={future} /> : <Image src={futureMobileView} />
      }
    </Box>
    // <Box
    //   bg='#F2F2F2'
    //   py={12}
    //   backgroundImage={`url('https://ik.imagekit.io/temp/Peaks-of-Rolwaling_1_eo-yLld3Z.png')`}
    //   backgroundPosition='center'
    //   backgroundRepeat='no-repeat'
    //   backgroundSize='cover'
    // >
    //   <Box px={[10, 30, 60, 90]}>
    //     <Text
    //       textAlign='start'
    //       fontSize='24px'
    //       fontFamily='Roboto'
    //       mt={4}
    //       fontWeight={700}
    //     >
    //       Future
    //     </Text>
    //     <hr
    //       style={{
    //         width: '15%',
    //         height: '1px',
    //         backgroundColor: '#CB6229',
    //         color: '#CB6229',
    //       }}
    //     />
    //     <Text
    //       textAlign='justify'
    //       fontSize='24px'
    //       fontFamily='Roboto'
    //       mt={6}
    //       fontWeight={400}
    //       lineHeight='28px'
    //     >
    //       We at Geotex, our firm believers of keeping up with the world
    //       technologically, intellectually and competitively, hence comes in our
    //       policy of frequent upgrades.
    //       <br />
    //       <br />
    //       Inspite of there being 2 upgrades in the past 7-8 years, we realise
    //       the need of better and faster production which enables us to upgrade
    //       and expand 100% of our operations (Our total Plant and Machinery) in
    //       the year 2021 to keep with the global standards of production and
    //       quality.
    //       <br />
    //       <br />
    //       With 2 new extruders and 98 new circular looms being strategically
    //       upgraded through out the year, we aim to stand true to our motto;-
    //       Bagging your needs,Responsibly.
    //     </Text>
    //     {/* <Box
    //       width={['300px', '300px', '340px', '520px']}
    //       height={['280px', '300px', '300px', '400px']}
    //       border='1px solid black'
    //       m='auto'
    //       borderRadius='8px'
    //     ></Box> */}
    //   </Box>
    // </Box>
  );
};

export default Future;
