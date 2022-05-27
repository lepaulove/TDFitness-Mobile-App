import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import globalStyles from '../styles/global.styles';

export default function HomeStackNavigator() {

    const Stack = createNativeStackNavigator()

    return (
    <>
        <StatusBar 
        backgroundColor={globalStyles.colors.mainColor}
        barStyle={'light-content'}
        />
        <Stack.Navigator
        screenOptions={{headerShown: false}}
        >
        
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
    </>
    );
}