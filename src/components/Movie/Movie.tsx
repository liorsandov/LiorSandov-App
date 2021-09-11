import React from 'react';

export interface movieProps {
    name?: string ;
    price?: string ;
    id?: number ;
}

const Movie = (props:movieProps) => {
    return (
        <div>
            {props.name && <h3>Name: {props.name}</h3>}
            {props.price && <p>Price: {props.price}</p> || <p>price is not available</p>}
            {props.id && <p>Id: {props.id}</p>}
        </div>
    )
};

export default Movie;