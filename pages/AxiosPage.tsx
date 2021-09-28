import React from 'react'
import styles from './UseContext/main.module.css'
import type { NextPage } from 'next'
import NavBar from '../src/components/NavBar/NavBar';
import GetButton from 'src/components/GetButton/GetButton';
import GlassContainer, { width } from 'src/components/GlassContainer/GlassContainer';

const Home: NextPage = () => {

  return (
    <>
      <NavBar />
      <div className={styles.container}> 
        <GlassContainer width={width.Half}>
          <GetButton />
        </GlassContainer>
      </div>
    </>
  )
};

export default Home

