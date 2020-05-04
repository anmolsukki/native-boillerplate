import {
    GET_USERS_DATA_INIT,
    GET_USERS_DATA_SUCCESS,
    GET_USERS_DATA_ERROR
} from "../Actions/ActionConstant/ActionConstant";

const initialState = {
    getUserData: [],
    isLoading: false,
    error: null
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS_DATA_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_USERS_DATA_SUCCESS :
        return {
            ...state,
            getUserData : action.data,
            isLoading : false
        };
        case GET_USERS_DATA_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };
        default : 
    }
    return state;
};

export default UserReducer;
