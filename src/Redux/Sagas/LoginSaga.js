//LIBRARIES
import { put,call, takeEvery } from 'redux-saga/effects';

 //ASSETS
 import { 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_REQUESTING,
    LOGIN_USER_FAIL
 } from '@Types/AuthTypes'
  import Api from '@Config/Api/api'
/************************ Login function ****************************/


export const watchLoginAsync = function* watchLoginAsync({ params }) {
 console.log(params, '++++++++++++++++sagaaaaaa')
    try {
        console.log('---------------SAGA CALLING', params)
        const response = yield call(Api.userLogin, params)
      //   console.log(response)
       yield put({ type: LOGIN_USER_SUCCESS, payload: response });
    }   
    catch (e) {
      console.log(e)
        yield put({ type: LOGIN_USER_FAIL, payload: e });
    }     
}


const watchLogin = function* watchLogin() {
    yield takeEvery(LOGIN_USER_REQUESTING, watchLoginAsync);
  }

  export default watchLogin;