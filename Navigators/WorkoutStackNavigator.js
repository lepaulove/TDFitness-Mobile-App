import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WorkoutScreen from '../screens/Workout'
import WorkoutSession from '../screens/WorkoutSession'

const WorkoutStackNavigator = () => {

    const Stack = createNativeStackNavigator()

  return (
    <>
        <Stack.Navigator>
            <Stack.Screen name='Workout' component={WorkoutScreen}/>
            <Stack.Screen name='Workout Session' component={WorkoutSession}/>
        </Stack.Navigator>
    </>
  )
}

export default WorkoutStackNavigator

const styles = StyleSheet.create({})