import userTypes from "./user.types/";

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case userTypes.SIGN_IN_USER_SUCCESS: 
            return {
                ...state,
                currentUser: action.payload
            }
        case userTypes.SIGN_OUT_USER_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        default:
            return state
    }
}

export default userReducer