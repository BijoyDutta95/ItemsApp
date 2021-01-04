import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    items: [
        {id: 1, name: 'Item one'},
        {id: 2, name: 'Item Two'},
        {id: 3, name: 'Item Three'},
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalPorvider = ({ children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    const removeItem = (id) => {
        dispatch({
            type: 'REMOVE_ITEM',
            payload:id
        })
    }

    const addItem = (item) => {
        dispatch({
            type: 'ADD_ITEM',
            payload:item
        })
    }

    return(
        <GlobalContext.Provider value ={{
            items:state.items,
            removeItem,
            addItem
        }}>
        {children}
        </GlobalContext.Provider>
    )
}