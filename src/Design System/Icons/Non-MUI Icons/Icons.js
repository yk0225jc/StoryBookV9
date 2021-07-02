import React from 'react';
import './Icons.css';




export const Icon1 = (props) => {
    const {size = 'iconSmall', ...rest} = props;
    return (
        <>
        <img className={`icon ${size}`} alt='img' {...rest} />.
        </>
    );
}

export const Icon2 = (props) => {
    const {size = 'iconWide', ...rest} = props;
    return (
        <>
        <img className={`icon ${size}`} alt='img' {...rest} />.
        </>
    );
}

export const Icon3 = (props) => {
    const {size = 'iconLong', ...rest} = props;
    return (
        <>
        <img className={`icon ${size}`} alt='img' {...rest} />.
        </>
    );
}



