import { SimpleGrid } from '@chakra-ui/layout'
import React from 'react'

const TabPannelWrapper = ({ children }) => {

    let size;

    let widthscreen = window.screen.width
    if (widthscreen >= 1025) {
        size = 3
    }
    else {
        size = 2
    }

    return (
        <SimpleGrid columns={[1, 1, 1,2, size]} spacing={8} m='auto'>
            {children}
        </SimpleGrid>

    )
}

export default TabPannelWrapper
