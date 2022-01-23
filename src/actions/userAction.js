import axios from "axios";
import { GET_USERS, GET_ERRORS, LOGIN } from "../types";

export const getUsers = ()=> async dispatch => {
    try{
        const res = await axios.get('http://localhost:8080/api/admin/all-users');
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    }catch(e){
        dispatch({
            type:GET_ERRORS,
            payload:console.log(e)
        })
    }
};

export const login = (email, password) => {
    return dispatch => {
        axios.post('http://localhost:8080/api/admin/sign-in', {
            email: email,
            password: password
        })
        .then((response)=>{
            //console.log(response.data);
            dispatch({
                type: LOGIN,
                payload: response.data
            })
        })
        .catch((error)=>{
            console.log("There is no user with the given email and password");
            //alert("Email does not exist");
        })
    };
};