
import {types} from '../types'

const intialState={
    isSignUp:false,
    islogin:false,
    title:"",
    body:"",
    id:"",
error:''
    
}

export default loginReducer = (state = intialState, action) => {
    console.log("reducerlogin",action.payload)
   
    switch (action.type) {
       case types.SIGN_UP: return{
          ...state,
          isSignUp:true
       }
      
       case types.SIGN_UP_SUCCESS:
           return{
        ...state,
        isSignUp:false,
        title:action.payload.title,
        body:action.payload.body,
        id:action.payload.id 
       }
       case types.SIGN_UP_FAILED:
        return{
     ...state,
     isSignUp:false,
     error:action.error,
    }
       default: 
       return state
    }
 }

//  switch (action.type) {
//     case LOGIN_USER: return{
//        ...state,
//         islogin:true
//     }
   
//     case LOGIN_USER_RESPONSE:
//         return{
//      ...state, data:[...action.payload]
//     }
//    default: 
//     return state
//  }
