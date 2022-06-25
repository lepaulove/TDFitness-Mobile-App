import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { workouts } from '../constants/exercises'
import globalStyles from '../styles/global.styles'

const WorkoutDetails = ({ route }) => {

    const exercise = workouts.exercises.find((element) => element.name === route.params.exercise)

    console.log(exercise)

  return (
    <ScrollView style={styles.container}>
        <Display label='Name' value={exercise.name}/>
        <Display label='Category' value={exercise.category} />
        <Display label='Equipment' value={exercise.equipment} />
        <Display label='Force' value={exercise.force} />
        <Display label='Level' value={exercise.level} />
        <Display label='Mechanic' value={exercise.mechanic} />
        <Display label='Primary Muscles' value={exercise.primaryMuscles} />
        <Display label='Secondary Muscles' value={exercise.secondaryMuscles} />
        <Display label='Instructions' value={exercise.instructions} />
        {/* <View style={{}}>
            <Text style={styles.textStyle}>Instructions: </Text>
            <Text style={styles.textStyle}>{exercise.instructions} </Text>
        </View> */}
    </ScrollView>
  )
}

const Display = (props) => { 

    return(
        <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: '700', fontSize:24}]}>{props.label}: </Text>
            {props.label === 'Primary Muscles' || props.label === 'Secondary Muscles' ? 
                <>{props.value.map((item, index) => {return(<Text key={index} style={[styles.textStyle, {paddingLeft: 17, color:'white'}]}>- {item}</Text>)})}</> 
                : 
                <Text style={[styles.textStyle, {paddingLeft: 17, color:'white'} , props.label === 'Instructions' ? {fontVariant:[]} : {}]}>{props.value} </Text>}
            
        </View>
    )
}

export default WorkoutDetails

const styles = StyleSheet.create({
    container:{
        backgroundColor: globalStyles.colors.greyBackground,
        paddingHorizontal: 8,
        paddingVertical: 0
    },
    textContainer:{
        flex:1, 
        padding: 4
    },
    textStyle:{
        color: globalStyles.colors.mainColor,
        fontSize: 20,
        fontVariant: ['small-caps']
    }
})