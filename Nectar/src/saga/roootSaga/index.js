import {call,takeEvery,put,delay} from 'redux-saga/effects'
import {serviceProducts,signUp} from '../../sevices';
import {types} from '../../redux/types'
import {loginUserResponse,SignUpUserSuccess }from '../../redux/actions'

function* fetchUser(){
    try{
        const user=yield call(serviceProducts)
       
        yield put({type:types.LOGIN_USER_SUCCESS, payload:user})
    }catch(e){}
}

export function* waitFetchUser(){
    yield takeEvery(types.LOGIN_USER,fetchUser)
} 


function* signUpUser(action){
    console.log("actionaction",action)
    try{
        const user=yield call(signUp,action.payload)

        console.log("saga action>>>>payoad",user)

      
        yield put({type:types.SIGN_UP_SUCCESS, payload:user})
      
    }
      
        catch(error){
            yield delay(5000)
            yield put({type:types.SIGN_UP_FAILED,error:error})
        }
 

}

export function* waitSignUpUser(){
    yield takeEvery(types.SIGN_UP,signUpUser)
}