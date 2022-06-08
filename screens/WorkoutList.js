import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { workoutOptions } from '../constants/WorkoutOptions'

const WorkoutList = ({ route }) => {
    
    const list = workoutOptions[route.params.category]
    
  return (
    <View>
      <Text style={{fontSize: 32}}>Workout List: {route.params.category}</Text>
      <ScrollView>
      {list.map((item, index) => {
          if(item !== undefined){
              return(
            <TouchableOpacity key={index}>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center', padding: 30, backgroundColor: 'grey', margin:5}}>
                    {<Text>{item}</Text>}
                </View>
            </TouchableOpacity>
          )
          }
          
      })}
    </ScrollView>
    </View>
  )
}

export default WorkoutList

const styles = StyleSheet.create({})