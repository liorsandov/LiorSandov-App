import styles from './UseContext/main.module.css'
import type { NextPage } from 'next'
import React from 'react'
import MovieList from '../src/components/UseContext/MovieList/MovieList';
import Nav from '../src/components//UseContext/Nav/Nav';
import AddMovieButtonProps from '../src/components/UseContext/AddMovieButton/AddMovieButton'
import { MovieProvider } from '../src/context/MovieContext';
import { IlanProvider } from '../src/context/IlanContext';
import NavBar from '../src/components/NavBar/NavBar';
import Box from '@mui/material/Box';

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <MovieProvider>
        <IlanProvider>
        <Box component="div" className={styles.container}>
          <Nav />
          <AddMovieButtonProps />
          <MovieList />
        </Box>
        </IlanProvider>
      </MovieProvider>
    </div>
  )
}

export default Home

