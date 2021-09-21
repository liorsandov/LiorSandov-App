import React, { useContext } from 'react';
import style from './Nav.module.css';
import { MovieContext } from '../../../context/MovieContext';

const Nav = (): JSX.Element => {
    const { movieState } = useContext(MovieContext);
     
    return (
        <div className={style.NavContainer}>
            <h3>Lior - UseContext &nbsp;|&nbsp; Number of movies: #{movieState.length}</h3>
        </div>
    )
};

export default Nav;