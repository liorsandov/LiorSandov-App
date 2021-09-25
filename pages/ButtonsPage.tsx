import React from 'react'
import styles from './UseContext/main.module.css'
import type { NextPage } from 'next'
import NavBar from '../src/components/NavBar/NavBar';
import MainButtonsPage from '../src/components/ButtonsPage/MainButtonsPage'

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}> 
        <MainButtonsPage />
      </div>
    </>
  )
};

export default Home

