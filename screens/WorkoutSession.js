import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewWorkout } from '../Redux/Workouts/workouts.actions'
import { workoutOptions } from '../constants/WorkoutOptions'

const mapState = ({workouts}) => ({
    currentWorkoutId: workouts.currentWorkoutId
})

const WorkoutSession = ({navigation}) => {

    const { currentWorkoutId } = useSelector(mapState)
    const dispatch = useDispatch()

  return (
    <ScrollView>
      {/* <Text>Workout Session {currentWorkoutId}</Text> */}
      <TouchableOpacity onPress={() => {dispatch(createNewWorkout(null)); navigation.navigate('Workout')}} style={{alignItems:'center', padding:10, backgroundColor:'red', borderRadius:9, borderWidth:3}}>
          <View>
              <Text style={{fontWeight:'700', fontSize:24}}>End Current Workout</Text>
          </View>
          
      </TouchableOpacity>
      <View>
          {Object.keys(workoutOptions).map((item, index) => {
              console.log(item)
              return(
            <TouchableOpacity key={index} onPress={() => console.log(item)}>
                <View style={{justifyContent:'center', alignItems:'center', padding: 30, backgroundColor: 'grey', margin:5}}>
                    {<Text style={{}}>{item}</Text>}
                </View>
            </TouchableOpacity>
          )
      })}
    </View>
    </ScrollView>
  )
}

export default WorkoutSession

const styles = StyleSheet.create({})