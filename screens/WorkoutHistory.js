import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const WorkoutHistory = ({navigation, route}) => {

    const [workouts, setWorkouts] = useState([])
    
    useEffect(() => {
        setWorkouts(route.params.workouts)
    }, [])

    const toDateTime = (secs) => {
      var t = new Date(1970, 0, 1); // Epoch
      t.setSeconds(secs);
      return t;
  }

    const convertMonth = (month) => {
      switch(month += 1){
        case 1:
          return 'JAN'
        case 2:
          return 'FEB'
        case 3:
          return 'MAR'
        case 4:
          return 'APRIL'
        case 5:
          return 'MAY'
        case 6:
          return 'JUNE'
        case 7:
          return 'JULY'
        case 8:
          return 'AUG'
        case 9:
          return 'SEP'
        case 10:
          return 'OCT'
        case 11:
          return 'NOV'
        case 12:
          return 'DEC'
      }
    }

  return (
    <ScrollView>
      {workouts.map((item, index) => {
        
        
          if(item !== undefined){
            console.log(toDateTime(item.workout1.date.seconds))
            console.log(typeof(toDateTime(item.workout1.date.seconds)))
              return(
            <TouchableOpacity key={index}>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center', padding: 40, backgroundColor: 'grey', margin:5}}>
                    {<Text>{`${convertMonth(toDateTime(item.workout1.date.seconds).getMonth())} ${toDateTime(item.workout1.date.seconds).getDay()}, ${toDateTime(item.workout1.date.seconds).getFullYear()}`}</Text>}
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