import { createStore,applyMiddleware } from 'redux';
import loginReducer from '../reducers';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../../saga';

 
// Logger with default options
import logger from 'redux-logger'

const sagaMiddleware=createSagaMiddleware()

const store = createStore(
  loginReducer,applyMiddleware(sagaMiddleware,logger)
 )
sagaMiddleware.run(rootSaga)

 export default store