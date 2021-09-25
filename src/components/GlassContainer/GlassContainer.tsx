import React from 'react';
import style from './GlassContainer.module.css';

export interface GlassContainerProps {
    children?: JSX.Element|JSX.Element[];
    
}

const GlassContainer = (props: GlassContainerProps): JSX.Element => {
    return (
        <div className={style.Container}>{props.children}</div>
    )
};

export default GlassContainer;