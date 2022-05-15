import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({screen}){
 const navigation = useNavigation();
  return(
    <View style={headerStyles.container}>
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View>
            <Text style={headerStyles.textHome}>{screen}</Text>
        </View>
    </View>

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
       height:75,
       display:'flex',
       flexDirection:'row',
       paddingHorizontal:20,
       alignItems:'center',
       justifyContent:'space-between'
   }, 
   textHome:{
       color:'#f11', 
       fontWeight:'bold',
       fontSize:25,
    },
    text:{
        color:'#f11', 
        fontWeight:'bold',
        fontSize:25,
     }

})