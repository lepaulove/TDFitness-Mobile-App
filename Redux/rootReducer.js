import { combineReducers } from 'redux'

import userReducer from './User/user.reducer'
import workoutsReducer from './Workouts/workouts.reducer'

export default combineReducers({
    user: userReducer,
    workouts: workoutsReducer
})