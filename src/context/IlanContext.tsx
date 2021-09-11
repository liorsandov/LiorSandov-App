import React, {useState} from 'react';

export interface NewType {
    children?: any;
}

export type MovieContextState = ['']

export const arrayDefaultValue = {
    IlanState: ["0"],
    setIlanState: (state: MovieContextState) => {} 
};

export const IlanContext = React.createContext(arrayDefaultValue);

export const IlanProvider = (props: NewType) => {
    const [IlanState, setIlanState] = useState(arrayDefaultValue.IlanState);

    return (
        <IlanContext.Provider value={{ IlanState, setIlanState }}>
            {props.children}
        </IlanContext.Provider>
    );
};
