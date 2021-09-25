import React, {useState, createContext, Children} from 'react';

export interface NewType {
    children?: any;
}

export type MovieContextState = { 
    name: string ; 
    price: string ;
    id: number ;
}[]

export const movieDefaultValue = {
    movieState: [
        { 
            name: 'Movie 1',
            price: '$1',
            id: 1
        }
    ],
    setMovieState: (state: MovieContextState) => {
        return;
    } 
};

export const MovieContext = React.createContext(movieDefaultValue);

export const MovieProvider = (props: NewType) => {
    const [movieState, setMovieState] = useState(movieDefaultValue.movieState);

    return (
        <MovieContext.Provider value={{ movieState, setMovieState }}>
            {props.children}
        </MovieContext.Provider>
    );
};
