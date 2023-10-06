import { GET_FBI_WANTED } from "./types";

const FBIWantedReducer = (state, action) => {
    switch (action.type) {
        case GET_FBI_WANTED:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}
 
export default FBIWantedReducer;