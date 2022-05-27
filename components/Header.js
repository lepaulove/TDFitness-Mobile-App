import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global.styles';

export default function Header({screen}){
 const navigation = useNavigation();
  return(
    <SafeAreaView style={headerStyles.container}>
        <TouchableOpacity style={headerStyles.toggleDrawerButton} onPress={()=>navigation.toggleDrawer()}>
            <Entypo name="menu" size={40} color="white" />
        </TouchableOpacity>
        <View>
            <Text style={headerStyles.textHome}>{screen}</Text>
        </View>
    </SafeAreaView>

  )
}

const headerStyles=StyleSheet.create({
   container:{
       position:'absolute',
       top:0,
       left:0,
       width:'100%',
       backgroundColor:'#000',
       elevation:5,
       height: Platform.OS === 'ios' ? 100 : 75,
       display:'flex',
       flexDirection:'row',
       paddingHorizontal:20,
       alignItems:'center',
       justifyContent:'space-between',
    //    borderTopColor: Platform.OS === 'ios' ? globalStyles.colors.black : globalStyles.colors.mainColor,
   }, 
   textHome:{
       color:'#911', 
       fontWeight:'bold',
       fontSize:25,
       paddingRight: Platform.OS === 'ios' ? 20 : 0
    },
    text:{
        color:'#f11', 
        fontWeight:'bold',
        fontSize:25,
     },
     toggleDrawerButton:{
        marginLeft: Platform.OS === 'ios' ? 20 : 0,
        marginRight: Platform.OS === 'ios' ? 60 : 0
     }

})