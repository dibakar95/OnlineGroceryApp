
import {LOGIN_USER} from '../types/index'

const intialState={
    islogin:false
}

const loginReducer = (state = intialState, action) => {
    console.log("reducer calll")
    switch (action.type) {
       case LOGIN_USER: return{
          ...state,
           islogin:true
       }
       default: 
       return state
    }
 }
 export default loginReducer;