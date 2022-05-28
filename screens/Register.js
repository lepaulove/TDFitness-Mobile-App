import React from "react";
import { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Platform, Text } from "react-native";
import { handleSignUp } from "../Firebase/utils";
import globalStyles from "../styles/global.styles";

export default function RegisterScreen() {
    const [displayName, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');

  return (

    <View style={styles.container}>
      <View style={{alignItems:'center', justifyContent:'center', paddingBottom:20}}>
                <Text style={{fontSize: 40, fontWeight:'700', color:globalStyles.colors.mainColor}}>REGISTER</Text>
            </View>
        <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        placeholder='Name'
        value={displayName}
        placeholderTextColor={globalStyles.colors.mainColor}
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder='Email'
        value={email.trim()}
        keyboardType={'email-address'}
        placeholderTextColor={globalStyles.colors.mainColor}
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder='Password'
        secureTextEntry={true}
        placeholderTextColor={globalStyles.colors.mainColor}
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeConfirmPassword}
        value={confirmPassword}
        placeholder='Confirm Password'
        secureTextEntry={true}
        placeholderTextColor={globalStyles.colors.mainColor}
        />
    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleSignUp({email, password, confirmPassword, displayName})} style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
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
    color:globalStyles.colors.white
  },
  buttonContainer:{
    marginHorizontal:40,
    marginVertical: 15,
    paddingVertical: 10,
    // backgroundColor:globalStyles.colors.mainColor,
    borderRadius:10,
    borderWidth: 3,
    borderColor: globalStyles.colors.mainColor
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