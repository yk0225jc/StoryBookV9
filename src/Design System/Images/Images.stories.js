import React from 'react'

import {ProductImagesSize , NewPAD,ScalingAndRes,CategoryImageDirectory,PromosImageDirectory} from './Images'

export default{
    title: 'Design System/Images'
}

export const Images = () =>{
    return(
        <>
        <ProductImagesSize />
        <NewPAD />
        <ScalingAndRes />
        <CategoryImageDirectory />
        <PromosImageDirectory />
        </>

    )
    
}