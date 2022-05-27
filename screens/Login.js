import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { emailSignIn } from '../Firebase/utils'
import { useDispatch, useSelector } from 'react-redux'
import { signInSuccess } from '../Redux/User/user.actions'
import globalStyles from '../styles/global.styles'
import HomeScreen from './Home'

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

export default function LoginScreen({navigation}){
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('') 
    const dispatch = useDispatch()
    const { currentUser } = useSelector(mapState)

    const handleUserLogin = () => {
        emailSignIn({email, password}).then(user => {
        dispatch(signInSuccess(user))})
    }
    return (
        <View style={styles.container}>
            <View style={{alignItems:'center', justifyContent:'center', paddingBottom:80}}>
                <Text style={{fontSize: 40, fontWeight:'700', color:globalStyles.colors.mainColor}}>LOGIN</Text>
            </View>
            <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder='Email'
            value={email.trim()}
            keyboardType={'email-address'}
            placeholderTextColor={globalStyles.colors.mainColor}
            />
            <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder='Password'
            secureTextEntry={true}
            placeholderTextColor={globalStyles.colors.mainColor}
            />
            <View style={{
        marginHorizontal:40,
        marginTop:10,
        paddingVertical: 10,
        backgroundColor:globalStyles.colors.mainColor,
        borderRadius:10,
        borderWidth: 3,
        borderColor: globalStyles.colors.black
      }}>
        <TouchableOpacity onPress={() => handleUserLogin()} style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
          </View>
      </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1, 
        paddingVertical: 100, 
        paddingHorizontal:20, 
        justifyContent:'center',
        backgroundColor: globalStyles.colors.greyBackground
      },
      input: {
        height: 60,
        marginVertical: 12,
        borderWidth: 3,
        padding: 10,
        borderRadius:7,
        borderColor: globalStyles.colors.mainColor,
        color: globalStyles.colors.white,
      },
      button:{
        width: '100%'
      },
      buttonText:{
          color:globalStyles.colors.white,
          fontSize: 24,
          textAlign: 'center',
          fontWeight:'700'
      }
    });