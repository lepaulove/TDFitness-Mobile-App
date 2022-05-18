import userTypes from "./user.types";

export const signInSuccess = user => ({
    type: userTypes.SIGN_IN_USER_SUCCESS,
    payload: user
})

export const signUpUser = userCredentials => ({
    type: userTypes.SIGN_UP_USER,
    payload: userCredentials
})