import * as actionTypes from "../ActionTypes/ActionType";
import connection from "../../../Config/ApiUrl";
import axios from "axios";
import { getHeaders } from "../Header/AuthHeader";

export const getUsersDataAction = () => {
    let url = connection.concat(`/posts`);
    return async dispatch => {
        dispatch(actionTypes.USERS_DATA_INIT());
        return axios
        .get(url, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "User Data Get Succesfully");
            dispatch(actionTypes.USERS_DATA_SUCCESS(res.data));
        })
        .catch(error => {
            console.log(error, "User Data Not Found Error");
            dispatch(actionTypes.USERS_DATA_ERROR(error));
        });
    };
};
