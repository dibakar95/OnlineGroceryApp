import {LOGIN_USER,LOGIN_USER_RESPONSE} from '../types/index'



export function loginUser() {
    console.log("loginUser")
    return {
       type: LOGIN_USER
    }
 }

 export function loginUserResponse(payload) {
    console.log("loginUserResponse",payload)
   console.log("action call>>>")
 
   return {
      type: LOGIN_USER_RESPONSE,
      payload
   
}
}