import {
  SIGN_UP_REQUESTING,
  LOGIN_USER_REQUESTING,
  LOGOUT_USER_REQUESTING,
  FORGOT_PASSWORD_REQUESTING
} from "@Types/AuthTypes";

//--->>Function to request User Login----->>>>>

export const loginRequest = params => {
  return {
    type: LOGIN_USER_REQUESTING,
    params
  };
};

//--->>Function for forgot Password----->>>>>

export const forgotPasswordRequest = params => {
  return {
    type: FORGOT_PASSWORD_REQUESTING,
    params
  };
};

//--->>Function to request User SignUp----->>>>>
export const signUpRequest = params => {
  console.log(params);
  console.log("*****************SIGNUP ACTIONS");
  return {
    type: SIGN_UP_REQUESTING,
    params
  };
};

//--->>Function to Logout User----->>>>>
export const logOutRequest = () => {
  return {
    type: LOGOUT_USER_REQUESTING
  };
};
