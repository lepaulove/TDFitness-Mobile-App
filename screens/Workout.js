import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { firestore } from '../Firebase/utils'
import { useSelector } from 'react-redux'

import WorkoutSession from './WorkoutSession'

const mapState = ({user}) => ({
  currentUser: user.currentUser
})

export default function WorkoutScreen({navigation}) {

const {currentUser} = useSelector(mapState)

  const handleAddWorkout = workout => {
    return new Promise((resolve, reject) => {
      console.log(workout)
        firestore.collection('workouts')
        .doc()
        .set(workout)
        .then(() => {
            resolve()
            navigation.navigate('Workout Session')
        })
        .catch(err =>{
            reject(err)
        })
    })
  }

const workout = {
  uid: currentUser.id,
  workout1:{
    uid: currentUser.id,
    date: new Date()
    }
}

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => handleAddWorkout(workout)}>
        <Text style={styles.buttonText}>Start a New Workout!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer:{
      backgroundColor: 'red',
      paddingHorizontal: 40,
      paddingVertical: 20,
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 3,
    },
    buttonText:{
      color: 'white',
      fontWeight: '700',
      fontSize: 20
    }
})