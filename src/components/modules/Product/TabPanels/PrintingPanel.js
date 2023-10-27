import React from 'react'
import { SimpleGrid } from '@chakra-ui/layout';
import ProductCard from '../ProductCard';
import { printing } from '../productData/Printing';
import TabPannelWrapper from './TabPannelWrapper';
import Rotate from 'react-reveal/Rotate';

const PrintingPanel = () => {
  return (
    <>
      {/* <SimpleGrid columns={[1, 2, 2, 3]} spacing={8}> */}
      <TabPannelWrapper>
        {printing.map((product) => {
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
      </TabPannelWrapper>
      {/* </SimpleGrid> */}
    </>
  )
}

export default PrintingPanel
