import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    items: []
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
    const removeAll = () =>{
        dispatch({
            type:'REMOVE_ALL'
        })
    }
    const addItem = (item) => {
        dispatch({
            type: 'ADD_ITEM',
            payload:item
        })
    }

    const editItem=(item)=>{
        dispatch({
            type:'EDIT_ITEM',
            payload: item
        })
    }

    return(
        <GlobalContext.Provider value ={{
            items:state.items,
            removeItem,
            addItem,
            editItem,
            removeAll
        }}>
        {children}
        </GlobalContext.Provider>
    )
}