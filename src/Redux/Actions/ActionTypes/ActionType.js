import {
    GET_USERS_DATA_INIT,
    GET_USERS_DATA_SUCCESS,
    GET_USERS_DATA_ERROR
} from "../ActionConstant/ActionConstant";
  
export const USERS_DATA_INIT = () => ({ type: GET_USERS_DATA_INIT });
export const USERS_DATA_SUCCESS = data => ({ type: GET_USERS_DATA_SUCCESS, data: data });
export const USERS_DATA_ERROR = data => ({ type: GET_USERS_DATA_ERROR, data: data });
