import React, { useContext } from 'react';
import style from './AddMovieButton.module.css';
import { MovieContext } from 'src/context/MovieContext';

export interface AddMovieButtonProps {
    name?: string;
    price?: string;
    id?: number;
}

const AddMovieButton = (props:AddMovieButtonProps) => {
    
    let { movieState, setMovieState} = useContext(MovieContext);
    
    function addNewMovie(name:string, price:string, id:number ){
        return (
            [...movieState, {name, price, id} ]
        )
    }
     
    return (
        <div className={style.ButtonContainer}>
            <div className={style.MainText}>
                <span>Will add new movie based on movie state</span>
            </div>
            <div className={style.ButtonDiv}>
                <button className={style.Button} onClick={() => setMovieState(
                    addNewMovie(
                        `Movie ${(movieState.length+1).toString()}`,
                        movieState.length.toString(),
                        movieState.length+1
                    ))}>
                    <span className={style.ButtonText}>Add New Movie</span>
                </button>
            </div>
        </div>  
    )
};

export default AddMovieButton;