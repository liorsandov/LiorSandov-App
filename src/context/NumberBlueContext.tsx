import React, {useState} from 'react';

export interface NewType {
    children?: JSX.Element;
}

export type NumberContextState = number;

export const arrayDefaultValue = {
    numberBlueState: 0,
    setNumberBlueState: (state: NumberContextState) => {
        return;
    }
};

export const NumberBlueContext = React.createContext(arrayDefaultValue);

export const NumberBlueProvider = (props: NewType): JSX.Element => {
    const [numberBlueState, setNumberBlueState] = useState(arrayDefaultValue.numberBlueState);

    return (
        <NumberBlueContext.Provider value={{ numberBlueState, setNumberBlueState }}>
            {props.children}
        </NumberBlueContext.Provider>
    );
};
