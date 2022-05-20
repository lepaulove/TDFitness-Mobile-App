import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';

import ProfileScreen from './../screens/Profile';
import SettingsScreen from './../screens/Settings';
import SavedScreen from './../screens/Saved';
import RegisterScreen from '../screens/Register';
import DrawerItems from '../constants/NonUserDrawerItems';
import Header from './../components/Header';
import HomeScreen from './../screens/Home';
import globalStyles from './../styles/global.styles';
import LoginScreen from '../screens/Login';

export default function NonUserDrawer() {

    const Drawer = createDrawerNavigator()

    return(
<NavigationContainer>
      <Drawer.Navigator
       drawerType="front"
       initialRouteName="Home"
       screenOptions={screenOptions}
        >
       {
         DrawerItems.map(drawer=><Drawer.Screen
           key={drawer.name}
           name={drawer.name}
           options={{
           drawerIcon:({focused})=>
           drawer.iconType==='MaterialCommunityIcons' ? 
              <MaterialCommunityIcons 
                  name={drawer.iconName} 
                  size={24} 
                  color= {!focused ? globalStyles.colors.mainColor : globalStyles.colors.white }/> :
            drawer.iconType==='Foundation' ?
              <Foundation
                 name={drawer.iconName}
                 size={32}
                 color={!focused ? globalStyles.colors.mainColor : globalStyles.colors.white}
              />
              :
            drawer.iconType==='Fontisto' ?
            <Fontisto 
                name={drawer.iconName} 
                size={24} 
            color={!focused ? globalStyles.colors.mainColor : globalStyles.colors.white} />
            :
            drawer.iconType==='Feather' ?
              <Feather
                name={drawer.iconName}
                size={24}
                color={!focused ? globalStyles.colors.mainColor : globalStyles.colors.white}
              />
            :
              <FontAwesome5
                name={drawer.iconName}
                size={24}
                color={!focused ? globalStyles.colors.mainColor : globalStyles.colors.white}
              />
            ,
               headerShown:true,
               header: ({ scene }) => {
                 return (
            <Header screen={drawer.name}/>
                 );
               }

           }}
           component={
                drawer.name==='Register' ? RegisterScreen
                  : drawer.name==='KJ Fitness' ? HomeScreen
                  : drawer.name==='TD Fitness' ? HomeScreen
                    :drawer.name==='Login' ? LoginScreen
                   : SavedScreen
           }
         />)
       }
</Drawer.Navigator>
    </NavigationContainer>
    )
}

const screenOptions = {
    drawerActiveTintColor: globalStyles.colors.white,
    drawerInactiveTintColor:globalStyles.colors.mainColor,
    drawerActiveBackgroundColor:globalStyles.colors.mainColor,
    drawerStyle: { marginVertical: 0, paddingTop: 40, backgroundColor:globalStyles.colors.greyBackground },
  }