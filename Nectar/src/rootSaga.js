import {all} from 'redux-saga/effects'
import { waitFetchUser } from './saga'

export default function* rootSaga(){
    yield all([waitFetchUser()])
}