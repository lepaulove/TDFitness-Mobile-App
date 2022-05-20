import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import globalStyles from '../styles/global.styles'

const LoginButtonContainer = (props) => {
    return (
    <>
        <View style={styles.buttonContainers}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate( 'Login' )}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainers}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate( 'Register' )}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    </>
    )
}

export default LoginButtonContainer

const styles = StyleSheet.create({
    buttonContainers: {
    paddingVertical:20,
    width:'100%',
    // backgroundColor: Platform.OS === 'ios' ? globalStyles.colors.greyBackground : '',
},
button:{
    backgroundColor: globalStyles.colors.greyBackground,
    padding: 15,
    borderRadius: 7,
},
buttonText: {
    color: globalStyles.colors.white,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center'
}})