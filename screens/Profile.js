import * as React from 'react';
import { View, Text, Image } from "react-native";
import { useSelector } from 'react-redux';
import globalStyles from '../styles/global.styles';

const mapState = ({ user}) => ({
   currentUser: user.currentUser
})

export default function ProfileScreen() {

   const { currentUser } = useSelector(mapState)

   return (
      <View style={{flex:1}}>
         <View style={{flex:2, alignItems: 'center', justifyContent: 'center', backgroundColor:globalStyles.colors.mainColor, paddingTop:100, elevation:10}}>
                <Image  source={{uri:'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/279394209_544956843639076_6293183354528779495_n.jpg?stp=dst-jpg_e35_s1080x1080&cb=9ad74b5e-88ad7ee8&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=hsAkEON8f_gAX_7DIF-&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjgyNzE1MjgxOTkwNDkxMzI3MQ%3D%3D.2-ccb7-4&oh=00_AT8YsgPVNOU4mpPpTofR8cwNHD2yOSbvdCks5XKYm1p3gw&oe=628C4DE0&_nc_sid=30a2ef'}} 
                        style={{height:80, width: 80, borderRadius:40, marginBottom:10}}/>
                <Text style={{color:globalStyles.colors.black, fontSize:24, fontWeight:'500', paddingVertical:10}}>{currentUser.displayName}</Text>
            </View>
         <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center', backgroundColor: globalStyles.colors.white}}>
            <Text style={{fontSize:16,fontWeight:'700'}}>Profile Screen</Text>
         </View>
      </View>
   );
 }