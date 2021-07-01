import React from 'react';
import './Icons.css';




const Icons = (props) => {
    const {size = 'iconsmall', ...rest} = props;
    return (
        <>
        <img className={`icon ${size}`} alt='img' {...rest} />.
        </>
    );
}

export default Icons;
