import workoutsTypes from "./workouts.types/";

const INITIAL_STATE = {
    currentWorkoutId: null,
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case workoutsTypes.SET_CURRENT_WORKOUT_ID: 
            return {
                ...state,
                currentWorkoutId: action.payload
            }
        default:
            return state
    }
}

export default userReducer