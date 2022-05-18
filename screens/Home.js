import * as React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, Platform } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess } from '../Redux/User/user.actions';
import globalStyles from '../styles/global.styles';

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

export default function HomeScreen() {
    const { currentUser } = useSelector(mapState)
    const backgroundImage = {uri:'https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/258863373_497966008343830_66778733601708529_n.jpg?stp=dst-jpg_e35_p320x320&_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=YAoczsdpdmwAX8WbqIl&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc2NjM1NjkxODQxNzcwODA3Mw%3D%3D.2-ccb7-4&oh=00_AT94tMEhqOw3ykB1CKcdv4PIrji1KZEbZsq7CjWRqRdsdg&oe=628705C5&_nc_sid=30a2ef'}
    const dispatch = useDispatch()

    const handleClick = () => {
        let user = currentUser ? null : 1
        dispatch(signInSuccess(user)) 
        console.log(`User value is: ${user}`)
    }
    
   return (
        <ImageBackground style={{flex: 1}} resizeMode='cover' source={backgroundImage}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20 }}>
                <Text style={{fontSize:32,fontWeight:'700', color:'#b11', paddingVertical:20}}>Welcome to TD Fitness</Text>
                <View style={homeScreenStyles.buttonContainers}>
                    <TouchableOpacity style={homeScreenStyles.button}>
                        <Text style={homeScreenStyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={homeScreenStyles.buttonContainers}>
                    <TouchableOpacity style={homeScreenStyles.button}>
                        <Text style={homeScreenStyles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={homeScreenStyles.buttonContainers}><Button title='Sign Up' color='#2f2f2f'/></View>
                <View style={homeScreenStyles.buttonContainers}><Button title='Login' color='#2f2f2f'  onPress={handleClick}/></View> */}
            </View>
        </ImageBackground>
   );
 }

 const homeScreenStyles = StyleSheet.create({
     buttonContainers: {
        paddingVertical:20,
        // marginVertical: Platform.OS === 'ios' ? 10 : 0,
        width:'100%',
        // backgroundColor: Platform.OS === 'ios' ? globalStyles.colors.greyBackground : '',
        // color: Platform.OS === 'ios' ? globalStyles.colors.white : ''
    },
    button:{
        backgroundColor: globalStyles.colors.greyBackground,
        padding: 15,
        borderRadius: 7,
    },
    buttonText: {
        color: globalStyles.colors.white,
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center'
    }
 })