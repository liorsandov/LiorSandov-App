import React, { useContext, useState } from 'react'
import Movie from '../Movie/Movie'
import style from './MovieList.module.css';
import { MovieContext } from '../../../context/MovieContext';

export interface movieListProps {
    name?: string;
    price?: string;
    id?: number;
}

const MovieList = (props: movieListProps) => {
    let {movieState, setMovieState} = useContext(MovieContext);
        {console.log(movieState)}
        const displayList = () => {
            if(movieState.length >= 1) {
                return true;
            }
            else {
                return false;
            }
        }
    return (
        <>
        {displayList() && (
            <div className={style.MovieListContainer}>
                {movieState.map(elm => (
                    <Movie name={elm.name} price={elm.price} id={elm.id} key={elm.id}/>
                ))}
            </div>
            )}
        </>
    );
};

export default MovieList;