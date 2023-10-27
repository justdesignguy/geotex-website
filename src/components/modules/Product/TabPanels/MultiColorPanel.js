import { SimpleGrid } from '@chakra-ui/layout';
import React from 'react'
import ProductCard from '../ProductCard';
import { multiColor } from '../productData/MultiColor';
import TabPannelWrapper from './TabPannelWrapper';
import Rotate from 'react-reveal/Rotate';


const MultiColorPanel = () => {
    return (
        <>
            {/* <SimpleGrid columns={[1, 2, 2, 3]} spacing={8}> */}
            <TabPannelWrapper>
                {multiColor.map((product) => {
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

export default MultiColorPanel
