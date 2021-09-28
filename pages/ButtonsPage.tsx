import React from 'react'
import styles from './UseContext/main.module.css'
import type { NextPage } from 'next'
import NavBar from '../src/components/NavBar/NavBar';
import GlassContainer, { width } from 'src/components/GlassContainer/GlassContainer';
import Button from 'src/components/Button/Button';
import { NumberBlueProvider } from 'src/context/NumberBlueContext';
import Counter from 'src/components/Counter/Counter';
import Chart from 'src/components/Chart/Chart';

const Home: NextPage = () => {

  return (
    <>
      <NavBar />
      <NumberBlueProvider>
        <div className={styles.container}> 
          <GlassContainer width={width.Half}>
            <Counter />
          </GlassContainer>
          <GlassContainer width={width.Auto}>
            <Button name='Acceptable' color='Blue'/>
            <Button name='Acceptable' color='Red'/>
            <Button name='Acceptable' color='Green'/>
            <Button name='Acceptable' />
          </GlassContainer>
          <Chart />
        </div>
        </NumberBlueProvider>
    </>
  )
};

export default Home

