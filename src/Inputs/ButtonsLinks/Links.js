import React from 'react';
import Link from '@material-ui/core/Link';
import './Links.css'




export const Link1 = () => {
    const preventDefault = (event) => event.preventDefault();
    return (

        <Link className = 'link' href="#" onClick={preventDefault}>
          Link
        </Link>
    );
}


