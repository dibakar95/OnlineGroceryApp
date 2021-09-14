import { createStore,applyMiddleware } from 'redux';
import loginReducer from '../reducers';

 
// Logger with default options
import logger from 'redux-logger'


const store = createStore(
  loginReducer,applyMiddleware(logger)
 )

 export default store