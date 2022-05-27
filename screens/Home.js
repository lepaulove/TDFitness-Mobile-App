import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../Firebase/utils';
import globalStyles from '../styles/global.styles';
import { signOutUser } from '../Redux/User/user.actions';

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

export default function HomeScreen({navigation}) {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(mapState)
    const welcomeMessage = currentUser ? `Welcome Back ${currentUser.displayName}!` : `Welcome to KJ Fitness!`
    // const backgroundImage = {uri:'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/242216659_887137255531202_2901253095387465330_n.jpg?stp=dst-jpg_e35&cb=9ad74b5e-88ad7ee8&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=102&_nc_ohc=FZ9dbTRlE1QAX8zzqEy&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjY2NTg0NTE2MTU4MDQxODExOQ%3D%3D.2-ccb7-4&oh=00_AT-E4uVH5ac4X6GQi4Vnx7vQNFRDCJJi16oG2uPuYOOKfg&oe=628D3603&_nc_sid=30a2ef'}//KJ
    const backgroundImage = {uri: "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/279394209_544956843639076_6293183354528779495_n.jpg?stp=dst-jpg_e35_s1080x1080&cb=9ad74b5e-88ad7ee8&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=hsAkEON8f_gAX_7DIF-&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjgyNzE1MjgxOTkwNDkxMzI3MQ%3D%3D.2-ccb7-4&oh=00_AT8YsgPVNOU4mpPpTofR8cwNHD2yOSbvdCks5XKYm1p3gw&oe=628C4DE0&_nc_sid=30a2ef"}
    // const backgroundImage = {uri:'https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/258863373_497966008343830_66778733601708529_n.jpg?stp=dst-jpg_e35_p320x320&_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=YAoczsdpdmwAX8WbqIl&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc2NjM1NjkxODQxNzcwODA3Mw%3D%3D.2-ccb7-4&oh=00_AT94tMEhqOw3ykB1CKcdv4PIrji1KZEbZsq7CjWRqRdsdg&oe=628705C5&_nc_sid=30a2ef'} //TD

    const handleSignOutUser = () => {
        signOut()
        dispatch(signOutUser())
    }
    
    return (
        <ImageBackground resizeMode='cover' style={{flex: 1}} source={backgroundImage}>
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center', width:'100%', paddingHorizontal:8}}>
                <View style={homeScreenStyles.buttonContainers}>
                    <TouchableOpacity style={homeScreenStyles.button} onPress={() => navigation.navigate( 'Login' )}>
                        <Text style={homeScreenStyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={homeScreenStyles.buttonContainers}>
                    <TouchableOpacity style={homeScreenStyles.button} onPress={() => navigation.navigate( 'Register' )}>
                        <Text style={homeScreenStyles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>

        // <>
        //     <ImageBackground resizeMode='cover' style={{flex: 1}} source={backgroundImage}>
        //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
        //             <Text style={{fontSize:32,fontWeight:'700', color:'#b11', paddingVertical:20}}>
        //                 {welcomeMessage}
        //             </Text>
        //             {currentUser ? 
        //                 <View style={homeScreenStyles.buttonContainers}>
        //                     <TouchableOpacity style={homeScreenStyles.button} onPress={() => handleSignOutUser()}>
        //                         <Text style={homeScreenStyles.buttonText}>LOGOUT</Text>
        //                     </TouchableOpacity>
        //                 </View>
        //             : <LoginButtonContainer navigation={navigation}/>
        //             }
        //         </View>
        //     </ImageBackground>
        // </>
    );
 }

 const homeScreenStyles = StyleSheet.create({
     buttonContainers: {
        paddingVertical:30,
        width:'100%',
        // backgroundColor: Platform.OS === 'ios' ? globalStyles.colors.greyBackground : '',
    },
    button:{
        backgroundColor: globalStyles.colors.greyBackground,
        padding: 15,
        borderRadius: 7
    },
    buttonText: {
        color: globalStyles.colors.white,
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center'
    }
 })