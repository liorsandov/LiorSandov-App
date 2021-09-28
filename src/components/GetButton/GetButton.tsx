import React, { useState } from 'react';
import axios from 'axios';
// import styles from './GetButtonProps.module.css';

export default function GetButton(): JSX.Element {
  const [imageApi, setImage] = useState('');

  function getPokemonImage(x: number){
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${x}`) // get specific pokemon ID
    // .get(`https://pokeapi.co/api/v2/pokemon/?limit=${x}`) // limit number of data
    .then(function(response) {
      // setImage(response.data.sprites.other['official-artwork'].front_default) // real image
      setImage(response.data.sprites.other.dream_world.front_default) // art image
    })
    .catch(error => console.log(error));
  }

  return (
    <div>
      <div>
        <button onClick={()=>{getPokemonImage(1)}}>
          <span>Get Pokemon Image</span>
        </button >
      </div>
      <div>
        {imageApi && 
          <img
            src={`${imageApi}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${imageApi}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={'Pokemon-Image'}
            loading="lazy"
          />
        }
      </div>
    </div>
  );
}
