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

const mapState = ({ user}) => ({
   currentUser: user.currentUser
})

export default function ProfileTabNavigator({navigation}) {

   const { currentUser } = useSelector(mapState)
   const Tab = createBottomTabNavigator()

return (
   <>
         <View style={{alignItems: 'center', paddingTop:Platform.OS === 'ios' ? 140 : 110, backgroundColor:globalStyles.colors.mainColor, height: 350}}>
                <Image  source={{uri:'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/279394209_544956843639076_6293183354528779495_n.jpg?stp=dst-jpg_e35_s1080x1080&cb=9ad74b5e-88ad7ee8&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=hsAkEON8f_gAX_7DIF-&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjgyNzE1MjgxOTkwNDkxMzI3MQ%3D%3D.2-ccb7-4&oh=00_AT8YsgPVNOU4mpPpTofR8cwNHD2yOSbvdCks5XKYm1p3gw&oe=628C4DE0&_nc_sid=30a2ef'}} 
                        style={{height:150, width: 150, borderRadius:100}}/>
                <Text style={{color:globalStyles.colors.black, fontSize:24, fontWeight:'700', paddingVertical:10}}>Welcome Back {currentUser.displayName}!</Text>
      </View>
      <Tab.Navigator>
      <Tab.Screen name='HISTORY' options={{
         tabBarActiveTintColor: globalStyles.colors.mainColor,
         tabBarIcon:({focused}) => <FontAwesome5 color={focused ? globalStyles.colors.mainColor : globalStyles.colors.black} name="history" size={focused ? 32 : 24} />}} component={HistoryScreen}/>
      <Tab.Screen name='START A WORKOUT' options={{
         tabBarActiveTintColor: globalStyles.colors.mainColor,
         tabBarIcon:({focused}) => <AntDesign color={focused ? globalStyles.colors.mainColor : globalStyles.colors.black} name="play" size={focused ? 32 : 24} />}} component={WorkoutScreen}/>
      <Tab.Screen name='UPDATE STATS' options={{
         tabBarActiveTintColor: globalStyles.colors.mainColor,
         tabBarIcon:({focused}) => <Ionicons color={focused ? globalStyles.colors.mainColor : globalStyles.colors.black} name="stats-chart" size={focused ? 32 : 24} />}} component={UpdateStatsScreen}/>
   </Tab.Navigator>
   </>
);
 }