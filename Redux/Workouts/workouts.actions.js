import workoutsTypes from "./workouts.types";

export const createNewWorkout = workoutId => ({
    type:workoutsTypes.SET_CURRENT_WORKOUT_ID,
    payload: workoutId
})