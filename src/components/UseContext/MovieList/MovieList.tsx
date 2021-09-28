import React, { useContext } from 'react'
import Movie from '../Movie/Movie'
import style from './MovieList.module.css';
import { MovieContext } from '../../../context/MovieContext';

const MovieList = (): JSX.Element => {
    const { movieState } = useContext(MovieContext);
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