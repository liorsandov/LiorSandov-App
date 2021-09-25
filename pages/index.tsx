import React from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Index.module.css'
import NavBar from '../src/components/NavBar/NavBar';
import Box from '@mui/material/Box';

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Box sx={{maxWidth: '1600px', m: 'auto'}} className={styles.container}>
        <div>
          <h2>Main Page</h2>
        </div>
      </Box>
    </div>
  )
}

export default Home
