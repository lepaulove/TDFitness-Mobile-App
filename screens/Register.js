import React from "react";
import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Platform, Text } from "react-native";
import { handleSignUp } from "../Firebase/utils";
import globalStyles from "../styles/global.styles";

export default function RegisterScreen() {
    const [displayName, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');

  return (

    <View style={styles.container}>
      <View style={{alignItems:'center', justifyContent:'center', paddingBottom:80}}>
                <Text style={{fontSize: 40, fontWeight:'700', color:globalStyles.colors.mainColor}}>Register</Text>
            </View>
        <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        placeholder='Name'
        value={displayName.trim()}
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
        <View style={{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:globalStyles.colors.mainColor,
    borderRadius:10,
    borderWidth: 3,
    borderColor: globalStyles.colors.black
  }}>
        <Button title='Sign Up' onPress={() => handleSignUp({email, password, confirmPassword, displayName})} color={Platform.OS === 'ios' ? '#fff' : '#911'} />
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
    borderColor: globalStyles.colors.mainColor
  },
});