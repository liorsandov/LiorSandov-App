import React, { useContext } from 'react';
import style from './Nav.module.css';
import { MovieContext } from 'src/context/MovieContext';

export interface navProps {
    name?: string;
    price?: string;
    id?: number;
}

const Nav = (props:navProps) => {
    let { movieState, setMovieState} = useContext(MovieContext);
     
    return (
        <div className={style.NavContainer}>
            <h3>Lior - UseContext &nbsp;|&nbsp; Number of movies: #{movieState.length}</h3>
        </div>
    )
};

export default Nav;