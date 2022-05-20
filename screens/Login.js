import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { emailSignIn } from '../Firebase/utils'
import { useDispatch, useSelector } from 'react-redux'
import { signInSuccess } from '../Redux/User/user.actions'

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

export default function LoginScreen(){
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('') 
    const dispatch = useDispatch()
    const { currentUser } = useSelector(mapState)
    console.log(currentUser)

    const handleUserLogin = () => {
        emailSignIn({email, password}).then(user => {
        dispatch(signInSuccess(user)); console.log(user)})
    }
    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder='Email'
            value={email.trim()}
            keyboardType={'email-address'}
            />
            <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder='Password'
            secureTextEntry={true}
            />
            <View style={{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#2f2f2f',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      }}>
            <Button title='LOGIN' onPress={() => handleUserLogin()} color={Platform.OS === 'ios' ? '#fff' : '#2f2f2f'} />
          </View>
      </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1, 
        paddingVertical: 100, 
        marginHorizontal:20, 
        justifyContent:'center'
      },
      input: {
        height: 60,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:7
      },
    });