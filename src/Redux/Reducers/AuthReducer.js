import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL
} from '@Types/AuthTypes'

const INITIAL_STATE = {};
  
    export default (state = INITIAL_STATE, action) => {
        console.log('*****************REDUCER')
        switch (action.type) {

            case LOGIN_USER_SUCCESS:
                return { loginSuccess : true, data : action.payload };

            case LOGIN_USER_FAIL:
                return { loginFail : true };

            case SIGN_UP_SUCCESS:
                return { signUpSuccess: true, data: action.payload};

            case SIGN_UP_FAIL:
                return { signUpFail : true };

            case FORGOT_PASSWORD_SUCCESS:
                return { forgotPassSuccess: true, data: action.payload };

            case FORGOT_PASSWORD_FAIL:
                return { forgotPassFail: true };

            default:
                return state;
        };
};
