import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { firestore } from '../Firebase/utils'
import { useSelector, useDispatch } from 'react-redux'
import { createNewWorkout } from '../Redux/Workouts/workouts.actions'

const mapStateuserState = ({user}) => ({
  currentUser: user.currentUser
})

const mapWorkoutState = ({workouts}) => ({
  currentWorkout: workouts.currentWorkoutId
})

export default function WorkoutScreen({navigation}) {

  const { currentUser } = useSelector(mapStateuserState)
  const { currentWorkout } = useSelector(mapWorkoutState)
  const dispatch = useDispatch()

  const handleAddWorkout = async workout => {
    if(currentWorkout){
      navigation.navigate('Workout Session')
    }else{
      const newWorkoutAdded = await firestore.collection('workouts').add(workout)
      dispatch(createNewWorkout(newWorkoutAdded.id))
      navigation.navigate('Workout Session')
    }
  }
  // const handleAddWorkout = workout => {
  //   return new Promise((resolve, reject) => {
  //     console.log(workout)
  //       firestore.collection('workouts')
  //       .doc()
  //       .set(workout)
  //       // .then(docRef => {
  //       //   console.log(docRef.id)
  //       // })
  //       .then(() => {
  //           resolve()
  //           navigation.navigate('Workout Session')
  //       })
  //       .catch(err =>{
  //           reject(err)
  //       })
  //   })
  // }

const workout = {
  uid: currentUser.id,
  workout1:{
    uid: currentUser.id,
    date: new Date(),
    activities: [
      { }, 
      { },
      { }
    ]
  }
}

const handleFetchWorkouts = () => {
  return new Promise((resolve, reject) => {
      firestore.collection('workouts')
      .get()
      .then(snapshot => {
          const workoutsArray = snapshot.docs.map(doc => {
           if(doc.data().uid !== currentUser.id){return}
              return {
                  ...doc.data(),
                  documentID: doc.id
              }
          })
          resolve(workoutsArray)
          // console.log(workoutsArray)
          navigation.navigate('Workout History', {workouts: workoutsArray})
      })
      .catch(err => {
          reject(err)
      })
  })
}


  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => handleAddWorkout(workout)}>
          <Text style={styles.buttonText}>{currentWorkout ? 'Resume Workout!' : 'Start a New Workout!'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => handleFetchWorkouts()}>
          <Text style={styles.buttonText}>View Workout History</Text>
        </TouchableOpacity>
      </View>
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

// Array [
//   undefined,
//   Object {
//     "documentID": "aN5OkcHmOvbgoOXL2Vlv", 
//     "uid": "25LEF5DBAFc2WuH3psK5kdYKF0J3",
//     "workout1": Object {
//       "date": Object {
//         "nanoseconds": 981000000,
//         "seconds": 1653873686,
//       },
//       "uid": "25LEF5DBAFc2WuH3psK5kdYKF0J3",
//     },
//   },
//   undefined,
//   undefined,
//   Object {
//     "documentID": "rqLIuGNU9yEbIsy8tyex",
//     "uid": "25LEF5DBAFc2WuH3psK5kdYKF0J3",
//     "workout1": Object {
//       "date": Object {
//         "nanoseconds": 14000000,
//         "seconds": 1653871209,
//       },
//       "uid": "25LEF5DBAFc2WuH3psK5kdYKF0J3",
//     },
//   },
//   Object {
//     "documentID": "ybMHHl8O3uvybBLbRQ6l",
//     "uid": "25LEF5DBAFc2WuH3psK5kdYKF0J3",
//     "workout1": Object {
//       "date": Object {
//         "nanoseconds": 14000000,
//         "seconds": 1653871209,
//       },
//       "uid": "25LEF5DBAFc2WuH3psK5kdYKF0J3",
//     },
//   },
// ]