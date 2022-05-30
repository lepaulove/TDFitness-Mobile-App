import * as React from 'react';
import { View, Text, Image, Platform } from "react-native";
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import globalStyles from '../styles/global.styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/History';
import WorkoutScreen from '../screens/Workout';
import UpdateStatsScreen from '../screens/UpdateStats';
import ReferScreen from '../screens/Refer';
import WorkoutSession from '../screens/WorkoutSession';
import WorkoutStackNavigator from './WorkoutStackNavigator';

const mapState = ({ user}) => ({
   currentUser: user.currentUser
})

export default function ProfileTabNavigator({navigation}) {

   const { currentUser } = useSelector(mapState)
   const Tab = createBottomTabNavigator()

return (
<>
   <View style={{alignItems: 'center', paddingTop:Platform.OS === 'ios' ? 140 : 110, backgroundColor:globalStyles.colors.mainColor, height: 350}}>
      <Image source={require('../assets/kj_fitness_home.png')} style={{height:150, width: 150, borderRadius:100}}/>
      <Text style={{color:globalStyles.colors.black, fontSize:24, fontWeight:'700', paddingVertical:10}}>Welcome Back {currentUser.displayName}!</Text>
   </View>
   <Tab.Navigator>
      <Tab.Screen name='HISTORY' options={{
      tabBarActiveTintColor: globalStyles.colors.mainColor,
      tabBarIcon:({focused}) => <FontAwesome5 color={focused ? globalStyles.colors.mainColor : globalStyles.colors.black} name="history" size={focused ? 32 : 24} />}} component={HistoryScreen}
      />
      <Tab.Screen name='START A WORKOUT' options={{
      tabBarActiveTintColor: globalStyles.colors.mainColor,
      tabBarIcon:({focused}) => <AntDesign color={focused ? globalStyles.colors.mainColor : globalStyles.colors.black} name="play" size={focused ? 32 : 24} />}} component={WorkoutStackNavigator}
      />
      <Tab.Screen name='UPDATE STATS' options={{
      tabBarActiveTintColor: globalStyles.colors.mainColor,
      tabBarIcon:({focused}) => <Ionicons color={focused ? globalStyles.colors.mainColor : globalStyles.colors.black} name="stats-chart" size={focused ? 32 : 24} />}} component={UpdateStatsScreen}
      />
   </Tab.Navigator>
</>
);
 }