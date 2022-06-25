import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WorkoutScreen from '../screens/Workout'
import WorkoutHistory from '../screens/WorkoutHistory'
import WorkoutSession from '../screens/WorkoutSession'
import WorkoutList from '../screens/WorkoutList'
import WorkoutDetails from '../screens/WorkoutDetails'

const WorkoutStackNavigator = () => {

    const Stack = createNativeStackNavigator()

  return (
    <View style={{height:'100%', paddingTop:Platform.OS === 'ios' ? 55 : 20}}>
        <Stack.Navigator>
            <Stack.Screen name='Workout' component={WorkoutScreen} />
            <Stack.Screen name='Workout History' component={WorkoutHistory} />
            <Stack.Screen name='Workout Session' component={WorkoutSession} />
            <Stack.Screen name='Workout List' component={WorkoutList} />
            <Stack.Screen name='Workout Details' component={WorkoutDetails} />
        </Stack.Navigator>
    </View>
  )
}

export default WorkoutStackNavigator

const styles = StyleSheet.create({})