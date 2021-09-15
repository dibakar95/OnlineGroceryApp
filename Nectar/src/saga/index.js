import {call,takeEvery,put} from 'redux-saga/effects'
import service from '../sevices';
import {LOGIN_USER} from '../redux/types'
import {loginUserResponse }from '../redux/actions'

function* fetchUser(){
    try{
        const user=yield call(service)
        console.log("fetchUer",user)
        yield put(loginUserResponse(user))
    }catch(e){}
}

export function* waitFetchUser(){
    yield takeEvery(LOGIN_USER,fetchUser)
} 