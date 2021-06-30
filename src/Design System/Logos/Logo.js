import React from 'react'
import './Logo.css'

const Logo =(props) =>{
    const {size= 'small' , ...rest} = props
    return(
        <>
        <img className={`logo ${size}`} alt='img' {...rest} />.
        </>
    );
}

export default Logo;
