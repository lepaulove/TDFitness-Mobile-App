import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import ProfileScreen from './../screens/Profile';
import SettingsScreen from './../screens/Settings';
import SavedScreen from './../screens/Saved';
import ReferScreen from './../screens/Refer';
import DrawerItems from '../constants/UserDrawerItems';
import Header from './../components/Header';
import HomeScreen from './../screens/Home';
import globalStyles from './../styles/global.styles';

export default function UserDrawer() {

    const Drawer = createDrawerNavigator()

    return(
<NavigationContainer>
      <Drawer.Navigator
       drawerType="front"
       initialRouteName="Home"
       screenOptions={screenOptions}
        >
       {
         DrawerItems.map(drawer => <Drawer.Screen
           key={drawer.name}
           name={drawer.name}
           options={{
           drawerIcon:({focused})=>
           drawer.iconType==='Entypo' ? 
              <Entypo 
                  name={drawer.iconName} 
                  size={24} 
                  color= {!focused ? globalStyles.colors.mainColor : globalStyles.colors.white }/> :
            drawer.iconType==='EvilIcons' ?
              <EvilIcons
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
             drawer.name==='Profile' ? ProfileScreen
               : drawer.name==='Settings' ? SettingsScreen
                 : drawer.name==='Saved Items' ? SavedScreen
                  : drawer.name==='TD Fitness' ? HomeScreen
                   : ReferScreen
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
    drawerStyle: { marginVertical: 20, backgroundColor:globalStyles.colors.greyBackground },
  }