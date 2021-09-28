import React from 'react';
import style from './GlassContainer.module.css';

export interface GlassContainerProps {
    children?: JSX.Element|JSX.Element[];
    width?: width;
}
export enum width {
    Half = "50%",
    Auto = "auto",
}

const GlassContainer = (props: GlassContainerProps): JSX.Element => {
    return (
        <div style={{ width: props.width }} className={style.Container}>{props.children}</div>
    )
};

export default GlassContainer;