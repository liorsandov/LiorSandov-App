import React from 'react';
import { Divider } from '@mui/material';

export interface movieProps {
    name?: string ;
    price?: string ;
    id?: number ;
}

const Movie = (props:movieProps): JSX.Element => {
    return (
        <div>
            {props.name && <h3>Name: {props.name}</h3>}
            {props.price && <p>Price: {props.price}</p> || <p>price is not available</p>}
            {props.id && <p>Id: {props.id}</p>}
            <Divider variant="middle" />
        </div>
    )
};

export default Movie;