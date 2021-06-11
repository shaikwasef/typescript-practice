import {createContext} from 'react';

const initialState = {
    first : "Jack",
    last : "Herrington"
}

const context = createContext<typeof initialState>(initialState);

export default context;
export type UserState = typeof initialState ; 