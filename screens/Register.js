import React from "react";
import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Platform } from "react-native";
import { handleSignUp } from "../Firebase/utils";

export default function RegisterScreen() {
    const [displayName, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');
    
  return (

    <View style={styles.container}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        placeholder='Name'
        value={displayName.trim()}
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder='Email'
        value={email.trim()}
        keyboardType={'email-address'}
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