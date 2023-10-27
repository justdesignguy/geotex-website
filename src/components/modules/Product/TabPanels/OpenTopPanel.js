import React from 'react'
import { SimpleGrid } from '@chakra-ui/layout';
import ProductCard from '../ProductCard';
import { openTop } from '../productData/OpenTop';
import TabPannelWrapper from './TabPannelWrapper';
import Rotate from 'react-reveal/Rotate';

const OpenTopPanel = () => {
    return (
        <>
            {/* <SimpleGrid columns={[1, 2, 2, 2, 3]} spacing={8} m='auto'> */}
            <TabPannelWrapper>
                {openTop.map((product) => {
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

export default OpenTopPanel
