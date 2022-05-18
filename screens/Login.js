import React from "react";
import { useState } from "react";
import { SafeAreaView, View, StyleSheet, TextInput, Button, Platform } from "react-native";
import { auth } from "../Firebase/utils";
import { useDispatch } from "react-redux";
import { handleSignUp } from "../Firebase/utils";

// const auth = Firebase.auth()

export default function LoginScreen() {
    const [displayName, onChangeName] = useState();
    const [email, onChangeEmail] = useState();
    const [password, onChangePassword] = useState(null);
    const [confirmPassword, onChangeConfirmPassword] = useState(null);
    const dispatch = useDispatch()
    console.log(`Name: ${displayName} \n Email: ${email} \nPassword: ${password} \nConfirm Password: ${confirmPassword}`)
    // const handleSignUp = (email, password) => {
    //     auth.createUserWithEmailAndPassword(email, password)
    //     .then(userCredentials => {
    //         const user = userCredentials.user
    //         console.log(user)
    //     }).catch(error => alert(error.code))
    //     console.log('Finally')
        
    // }

  return (

    <View style={{flex: 1, paddingVertical: 100, marginHorizontal:20}}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        placeholder='Name'
        value={displayName}
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder='Email'
        value={email}
        keyboardType={email}
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder='Password'
        secureTextEntry={true}
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeConfirmPassword}
        value={confirmPassword}
        placeholder='Confirm Password'
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
        <Button title='Sign Up' onPress={() => handleSignUp({email, password, confirmPassword, displayName})} color={Platform.OS === 'ios' ? '#fff' : '#2f2f2f'} />
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:7
  },
});



// import * as React from 'react';
// import { View, Text, Button, TextInput } from "react-native";
// import { useDispatch, useSelector } from 'react-redux';
// import { signInSuccess } from '../Redux/User/user.actions';

// const mapState = ({user}) => ({
//     currentUser: user.currentUser
// })

// export default function LoginScreen() {
//     const { currentUser } = useSelector(mapState)
//     const backgroundImage = {uri:'https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/258863373_497966008343830_66778733601708529_n.jpg?stp=dst-jpg_e35_p320x320&_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=YAoczsdpdmwAX8WbqIl&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc2NjM1NjkxODQxNzcwODA3Mw%3D%3D.2-ccb7-4&oh=00_AT94tMEhqOw3ykB1CKcdv4PIrji1KZEbZsq7CjWRqRdsdg&oe=628705C5&_nc_sid=30a2ef'}
//     const dispatch = useDispatch()

//     const handleClick = () => {
//         let user = currentUser ? null : 1
//         dispatch(signInSuccess(user)) 
//         console.log(`User value is: ${user}`)
//     }
    
//    return (
//         <View style={{backgroundColor:'dodgerblue'}}>
//             <TextInput
//         style={{
//             height: 40,
//             margin: 12,
//             borderWidth: 1,
//             padding: 10,
//           }}
//       />
//         </View>
//    );
//  }