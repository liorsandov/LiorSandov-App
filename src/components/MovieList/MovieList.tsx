import React, { useContext, useState } from 'react'
import Movie from '../Movie/Movie'
import style from './MovieList.module.css';
import { MovieContext } from 'src/context/MovieContext';

export interface movieListProps {
    name?: string;
    price?: string;
    id?: number;
}

const MovieList = (props: movieListProps) => {
    let {movieState, setMovieState} = useContext(MovieContext);
    return (
        <div className={style.MovieListContainer}>
            {movieState.map(elm => (
                <Movie name={elm.name} price={elm.price} id={elm.id} key={Math.floor(Math.random()*200)}/>
            ))}
        </div>

    );
};

export default MovieList;