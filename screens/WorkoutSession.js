import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewWorkout } from '../Redux/Workouts/workouts.actions'
import { workoutOptions } from '../constants/WorkoutOptions'
import { workouts } from '../constants/exercises'
import globalStyles from '../styles/global.styles'

const mapState = ({workouts}) => ({
    currentWorkoutId: workouts.currentWorkoutId
})

const WorkoutSession = ({navigation, route}) => {

    const { currentWorkoutId } = useSelector(mapState)
    const dispatch = useDispatch()
    const workoutCategory = new Set()

    const createWorkkoutCategorySet = () => {
      workouts.exercises.map((item, index) => {
        workoutCategory.add(item.category)
      })
    }

    createWorkkoutCategorySet()

  return (
    <ScrollView style={{backgroundColor:globalStyles.colors.greyBackground, paddingTop:5}}>
      {/* <Text>Workout Session {currentWorkoutId}</Text> */}
      <TouchableOpacity onPress={() => {dispatch(createNewWorkout(null)); navigation.navigate('Workout')}} style={{alignItems:'center', padding:10, backgroundColor:globalStyles.colors.mainColor, borderRadius:9, borderWidth:3}}>
          <View>
              <Text style={{fontWeight:'700', fontSize:24}}>End Current Workout</Text>
          </View>
          
      </TouchableOpacity>
      <View style={{marginTop:15, marginHorizontal:10}}>
        {Array.from(workoutCategory).map((item, index) => {
          return(
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Workout List', {category: item})} style={{alignItems:'center', padding:10, backgroundColor:globalStyles.colors.mainColor, borderRadius:9, borderWidth:3, marginVertical:10}}>
                <View style={{justifyContent:'center', alignItems:'center', margin:5}}>
                    {<Text style={{fontSize: 24, fontVariant:['small-caps'], fontWeight:'700', color:globalStyles.colors.white}}>{item}</Text>}
                </View> 
            </TouchableOpacity>
          )
        })}
          {/* {Object.keys(workoutOptions).map((item, index) => {
              return(
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Workout List', {category: item})}>
                <View style={{justifyContent:'center', alignItems:'center', padding: 30, backgroundColor: 'grey', margin:5}}>
                    {<Text>{item}</Text>}
                </View>
            </TouchableOpacity>
          )
      })} */}
    </View>
    </ScrollView>
  )
}

export default WorkoutSession

const styles = StyleSheet.create({})