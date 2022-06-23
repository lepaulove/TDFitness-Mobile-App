import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import { workouts } from '../constants/exercises'

const WorkoutDetails = ({ route }) => {

    const exercise = workouts.exercises.find((element) => element.name === route.params.exercise)

    console.log(exercise)

  return (
    <ScrollView>
      <Text>Name: {exercise.name}</Text>
      <Text>Category: {exercise.category}</Text>
      <Text>Equipment: {exercise.equipment}</Text>
      <Text>Force: {exercise.force}</Text>
      <Text>Level: {exercise.level}</Text>
      <Text>Mechanic: {exercise.mechanic}</Text>
      <Text>Primary Muscles: {exercise.primaryMuscles}</Text>
      <Text>Secondary Muscles{exercise.secondaryMuscles}</Text>
      <Text>Instructions: {exercise.instructions}</Text>
    </ScrollView>
  )
}

export default WorkoutDetails

const styles = StyleSheet.create({})