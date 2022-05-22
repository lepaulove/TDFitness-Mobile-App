import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <Text>Workout</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})