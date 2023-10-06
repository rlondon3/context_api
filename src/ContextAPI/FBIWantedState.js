import React, { useReducer } from 'react';
import { GET_FBI_WANTED } from './types';
import FBIWantedReducer from './FBIWantedReducer';
import FBIWantedContext from './FBIWantedContext';

import axios from 'axios';

const FBIWantedState = (props) => {
    const initialState = {
        list: []
    }
    const [state, dispatch] = useReducer(FBIWantedReducer, initialState);

    const getFBIWantedList = async () => {
        const url = 'https://api.fbi.gov/wanted/v1/list';
        const res = await axios.get(url);
        dispatch({
            type: GET_FBI_WANTED,
            payload: res.data.items
        });
    }
    return ( 
        <FBIWantedContext.Provider
        value={{
            wantedList: state.list,
            getFBIWantedList
        }}
        >
          {props.children}  
        </FBIWantedContext.Provider>
     );
}
 
export default FBIWantedState;