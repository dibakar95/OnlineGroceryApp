
import {LOGIN_USER,LOGIN_USER_RESPONSE} from '../types/index'

const intialState={
    islogin:false,
    data:[]
}

export default loginReducer = (state = intialState, action) => {
    console.log("action",action.payload)
    console.log("reducer calll")
    switch (action.type) {
       case LOGIN_USER: return{
          ...state,
           islogin:true
       }
      
       case LOGIN_USER_RESPONSE:
           return{
        ...state, data:[...action.payload]
       }
      default: 
       return state
    }
 }
