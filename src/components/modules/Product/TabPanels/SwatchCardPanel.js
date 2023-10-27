import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/layout';
import { swatchCard } from '../productData/SwatchCard';
import { Img } from '@chakra-ui/image';
import Rotate from 'react-reveal/Rotate';

const SwatchCardPanel = () => {
    return (
        <>
            <SimpleGrid columns={[2, 3, 4, 6, 8]} spacing={8}>
                {/* {new Array(19).fill(null).map((_, index) => { */}
                {swatchCard.map((imgSrc, index) => {
                    return (
                        // <Box w={["90px","110px","123px"]} h={["150px","170px","183px"]} bg="tomato">
                        <Rotate top left>
                        <Box w="123px" h="183px" m="auto" key={index}>
                            <Img src={imgSrc} />
                        </Box>
                        </Rotate>
                    );
                })}
            </SimpleGrid>
        </>
    )
}

export default SwatchCardPanel
