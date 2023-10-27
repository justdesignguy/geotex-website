import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/layout';
import ProductCard from '../ProductCard';
import { lamination } from '../productData/Lamination';
import TabPannelWrapper from './TabPannelWrapper';
import Rotate from 'react-reveal/Rotate';


const LaminationPanel = () => {
    return (
        <>
            <Box d="flex" justifyContent='center' alignItems='center'>
                <SimpleGrid columns={[1, 1, 1, 2]} spacing={8} width="auto">
                    {/* <TabPannelWrapper> */}
                    {lamination.map((product) => {
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
                    {/* </TabPannelWrapper> */}
                </SimpleGrid>
            </Box>
        </>
    )
}

export default LaminationPanel
