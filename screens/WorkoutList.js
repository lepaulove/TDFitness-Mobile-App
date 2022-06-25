import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { workoutOptions } from '../constants/WorkoutOptions'
import { workouts } from '../constants/exercises'
import globalStyles from '../styles/global.styles'

const WorkoutList = ({ navigation, route }) => {
    
    const list = workoutOptions[route.params.category]
    
  return (
    <View style={{backgroundColor:globalStyles.colors.greyBackground, marginTop: 10}}>
      <Text style={{fontSize: 32, fontVariant:['small-caps'], color:globalStyles.colors.white}}>{route.params.category}</Text>
      <ScrollView>
        {workouts.exercises.map((item, index) => {
          if(item.category == route.params.category){
            return(
              <TouchableOpacity key={index} onPress={() => navigation.navigate('Workout Details', {exercise: item.name})} style={{alignItems:'center', padding:10, backgroundColor:globalStyles.colors.mainColor, borderRadius:9, borderWidth:3, marginVertical:10}}>
                  <View style={{justifyContent:'center', alignItems:'center', margin:5}}>
                      {<Text style={{fontSize: 20, fontVariant:['small-caps'], fontWeight:'700', color:globalStyles.colors.white}}>{item.name}</Text>}
                  </View>
              </TouchableOpacity>
            )
          }
        })}
      {/* {list.map((item, index) => {
          if(item !== undefined){
              return(
            <TouchableOpacity key={index} onPress={() => console.log(item)}>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center', padding: 30, backgroundColor: 'grey', margin:5}}>
                    {<Text>{item}</Text>}
                </View>
            </TouchableOpacity>
          )
          } 
          
      })}*/}
    </ScrollView>
    </View>
  )
}

export default WorkoutList

const styles = StyleSheet.create({})








