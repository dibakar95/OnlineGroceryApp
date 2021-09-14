import {LOGIN_USER} from '../types/index'



export function loginUser() {
    console.log("action call>>>")
    return {
       type: LOGIN_USER
    }
 }