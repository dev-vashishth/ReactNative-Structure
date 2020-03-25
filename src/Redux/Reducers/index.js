
//Libraries
import { combineReducers } from 'redux';

//Assets
import AuthReducer from './AuthReducer';


 let rootReducer = combineReducers({
  Auth: AuthReducer,

});
export default rootReducer