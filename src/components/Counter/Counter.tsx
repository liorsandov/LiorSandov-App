import React, { useContext } from 'react';
import styles from './Counter.module.css';
import { NumberBlueContext } from 'src/context/NumberBlueContext';

const Counter = (): JSX.Element => {
    const { numberBlueState, setNumberBlueState} = useContext(NumberBlueContext);
    const decreaseNumber = () => setNumberBlueState(numberBlueState - 1);
    const addNumber = () => setNumberBlueState(numberBlueState + 1);
    const clearNumber = () => setNumberBlueState(0);

    return (
        <div className={styles.ButtonContainer}>
            <h3>{numberBlueState}</h3>
            <button onClick={() => addNumber()} >Add</button>
            <button onClick={() => decreaseNumber()} >Decrease</button>
            <button onClick={() => clearNumber()}> Clear</button>
        </div>
    )
};

export default Counter;