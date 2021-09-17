import {types} from '../types';

export function loginUser() {
  return {
    type: types.LOGIN_USER,
  };
}

export function loginUserResponse(payload) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload,
  };
}

export function signUpUser(payload) {
   return {
     type: types.SIGN_UP,
     payload:payload
   };
 }
 
 export function SignUpUserSuccess(payload) {
    console.log("actionsignupsuccesPayload",payload)
   return {
     type: types.SIGN_UP_SUCCESS,
     payload:payload
   };
 }
 export function signUpUserFailed(error) {
   return {
     type: types.SIGN_UP_FAILED,
     error:error
   };
 }