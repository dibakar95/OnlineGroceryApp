

import {all} from 'redux-saga/effects'
import { waitFetchUser,waitSignUpUser } from '../saga/roootSaga'

export default function* rootSaga(){
    yield all([waitFetchUser(),waitSignUpUser()])
}
