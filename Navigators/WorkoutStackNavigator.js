import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WorkoutScreen from '../screens/Workout'
import WorkoutHistory from '../screens/WorkoutHistory'
import WorkoutSession from '../screens/WorkoutSession'
import WorkoutList from '../screens/WorkoutList'

const WorkoutStackNavigator = () => {

    const Stack = createNativeStackNavigator()

  return (
    <>
        <Stack.Navigator>
            <Stack.Screen name='Workout' component={WorkoutScreen} />
            <Stack.Screen name='Workout History' component={WorkoutHistory} />
            <Stack.Screen name='Workout Session' component={WorkoutSession} />
            <Stack.Screen name='Workout List' component={WorkoutList} />
        </Stack.Navigator>
    </>
  )
}

export default WorkoutStackNavigator

const styles = StyleSheet.create({})