import * as React from 'react';
import { View, Text, Image } from "react-native";
import { useSelector } from 'react-redux';
import globalStyles from '../styles/global.styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const mapState = ({ user}) => ({
   currentUser: user.currentUser
})


export default function ProfileScreen() {

   const { currentUser } = useSelector(mapState)
   const Tab = createBottomTabNavigator()

   return (
      <View style={{flex:1}}>
         <View style={{flex:2, alignItems: 'center', justifyContent: 'center', backgroundColor:globalStyles.colors.mainColor, paddingTop:Platform.OS === 'ios' ? 80 : 50, elevation:10}}>
                <Image source={require('../assets/kj_fitness_home.png')} style={{height:150, width: 150, borderRadius:100, marginBottom:0}}/>
                <Text style={{color:globalStyles.colors.black, fontSize:24, fontWeight:'700', paddingBottom:20}}>Welcome Back {currentUser.displayName}!</Text>
            </View>
      </View>
   );
 }