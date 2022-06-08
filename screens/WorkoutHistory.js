import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const WorkoutHistory = ({navigation, route}) => {

    const [workouts, setWorkouts] = useState([])
    
    useEffect(() => {
        setWorkouts(route.params.workouts)
    }, [])
  return (
    <ScrollView>
      {workouts.map((item, index) => {
          if(item !== undefined){
              return(
            <TouchableOpacity key={index}>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center', padding: 40, backgroundColor: 'grey', margin:5}}>
                    {<Text>{item.documentID}</Text>}
                </View>
            </TouchableOpacity>
          )
          }
          
      })}
    </ScrollView>
  )
}

export default WorkoutHistory

const styles = StyleSheet.create({})