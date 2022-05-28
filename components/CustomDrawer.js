import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSelector } from 'react-redux'
import globalStyles from '../styles/global.styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { signOut } from '../Firebase/utils'
import { signOutUser } from '../Redux/User/user.actions'
import { useDispatch } from 'react-redux'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const CustomDrawer = (props) => {
    const { currentUser } = useSelector(mapState)
    const dispatch = useDispatch()
    const handleSignOutUser = () => {
        signOut()
        dispatch(signOutUser())
    }
  return (
    <View style={{flex:1, justifyContent:'center'}}>
        <DrawerContentScrollView {...props}>
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', padding: 40, backgroundColor:globalStyles.colors.black,borderWidth:6, borderBottomColor:globalStyles.colors.mainColor, marginBottom:30}}>
                <Image source={require('../assets/kj_fitness_home.png')} style={{height:120, width: 120, borderRadius:55, marginBottom:10}}/>
                <Text style={{color:globalStyles.colors.mainColor, fontSize:24, fontWeight:'500'}}>{currentUser.displayName}</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={homeScreenStyles.buttonContainers}>
            <TouchableOpacity style={homeScreenStyles.button} onPress={() => handleSignOutUser()}>
                <Text style={homeScreenStyles.buttonText}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CustomDrawer

const homeScreenStyles = StyleSheet.create({
    buttonContainers: {
        paddingVertical: Platform.OS==='ios' ? 15 : 5,
       width: '100%',
       backgroundColor: globalStyles.colors.mainColor,
       borderTopRightRadius: 20,
       borderTopLeftRadius: 20
   },
   button:{
       backgroundColor: globalStyles.colors.greyBackground,
       height: 40,
       
       borderRadius: 7,
       backgroundColor: globalStyles.colors.mainColor
   },
   buttonText: {
       color: globalStyles.colors.white,
       fontWeight: '700',
       fontSize: 20,
       textAlign: 'center'
   }
})