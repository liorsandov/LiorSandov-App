import type { NextPage } from 'next'
import React, {useState} from 'react'

import styles from '../src/Index.module.css'
import MovieList from '../src/components/MovieList/MovieList';
import Nav from '../src/components/Nav/Nav';
import AddMovieButtonProps from '../src/components/AddMovieButton/AddMovieButton'
import { MovieProvider } from '../src/context/MovieContext';
import { IlanProvider } from '../src/context/IlanContext';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <MovieProvider>
        <IlanProvider>
          <Nav />
          <AddMovieButtonProps />
          <MovieList />
        </IlanProvider>
      </MovieProvider>
    </div>
  )
}

export default Home
