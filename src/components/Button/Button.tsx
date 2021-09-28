import React from 'react';
import styles from './Button.module.css';
import color from '../../utils/color';

export interface ButtonProps {
  name?: string;
  color?: string;
}

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <div>
      <button 
        className={`${styles.Button} ${color(props.color || '')} `}
        onClick={() => console.log(props)}
      >
        <span className={styles.ButtonText}>{props.name} (#)</span>
      </button>
    </div>
  );
}
