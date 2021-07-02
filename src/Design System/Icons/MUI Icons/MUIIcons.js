import React from 'react';
import './MUIIcons.css';



export const MUIIcon = (props) => {
    const {size = 'iconSmall', ...rest} = props;
    return (
        <>
        <img className={`icon ${size}`} alt='img' {...rest} />.
        </>
    );
}