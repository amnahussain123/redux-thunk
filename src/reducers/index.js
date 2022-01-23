import changeTheNumber from './incDec';
import {userList, adminLogin } from './users';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeTheNumber,
    userList,
    adminLogin
})
export default rootReducer;