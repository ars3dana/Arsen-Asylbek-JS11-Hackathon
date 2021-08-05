import axios from 'axios';
import React, { useReducer } from 'react'
import { useContext } from 'react';
import { createContext } from 'react';
import { ACTIONS, JSON_API_BOXS } from '../helpers/consts';

export const productContext = createContext()
export const useProducts = () => {
    return useContext(productContext)
}

const INIT_STATE = {
    boxsData: [],
    itemsData: [],
    newsData: [],
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type){
        case ACTIONS.GET_BOX: 
            return {...state, boxsData: action.payload}
        default:
          return state
    }
}
const ContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( reducer, INIT_STATE )

    const getBoxsData = async() => {
        const { data } = await axios(JSON_API_BOXS)
        dispatch({
            type: ACTIONS.GET_BOX,
            payload: data
        })
    }
    const value = {
        boxsData: state.boxsData,
        getBoxsData,
    }
    return (
        <productContext.Provider value={value}>
            { children }
        </productContext.Provider>
    );
};

export default ContextProvider;