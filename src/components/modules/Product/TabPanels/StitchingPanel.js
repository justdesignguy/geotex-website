import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/layout';
import ProductCard from '../ProductCard';
import { stitching } from '../productData/Stitching';
import Rotate from 'react-reveal/Rotate';

const StitchingPanel = () => {
  return (
    <>
      {/* <SimpleGrid columns={[1, 2, 2, 3]} spacing={8}> */}
      {/* <TabPannelWrapper> */}
      <Box d="flex" justifyContent='center' alignItems='center'>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={8} width="auto">
          {stitching.map((product) => {
            return (
              <Rotate top left>
              <ProductCard
                key={product.id}
                text={product.text}
                images={product.productImgs}
              />
              </Rotate>
            );
          })}
        </SimpleGrid>
      </Box>
      {/* </TabPannelWrapper> */}
      {/* </SimpleGrid> */}
    </>
  )
}

export default StitchingPanel
