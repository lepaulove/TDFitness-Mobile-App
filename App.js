import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button, Image, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './screens/Profile';
import SettingsScreen from './screens/Settings';
import SavedScreen from './screens/Saved';
import ReferScreen from './screens/Refer';
import DrawerItems from './constants/DrawerItems';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import 'react-native-reanimated';
import Header from './components/Header';
import HomeScreen from './screens/Home';

export default function App() {
  const Drawer = createDrawerNavigator()

  return (
    <View style={{flex:1}}>
      <StatusBar
        // animated={true}
        backgroundColor="#fff"
        // barStyle={{}}
        // showHideTransition={statusBarTransition}
        // hidden={hidden} 
        />
      <NavigationContainer>
      {/* <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={{}}
        // showHideTransition={statusBarTransition}
        // hidden={hidden} 
        /> */}
      <Drawer.Navigator
       drawerType="front"
       initialRouteName="Home"
       screenOptions={{
         drawerActiveTintColor: '#fff',
         drawerInactiveTintColor:'#f11',
         drawerActiveBackgroundColor:'#911',
         drawerStyle: { marginVertical: 20, backgroundColor:'#2f2f2f' },
        //  drawerLabelStyle: {textSize: 24}
       }}
        >
       {
         DrawerItems.map(drawer=><Drawer.Screen
           key={drawer.name}
           name={drawer.name}
           options={{
           drawerIcon:({focused})=>
           drawer.iconType==='Entypo' ? 
              <Entypo 
                  name={drawer.iconName} 
                  size={24} 
                  color= {!focused ? "#f11" : "white" }/> :
            drawer.iconType==='EvilIcons' ?
              <EvilIcons
                 name={drawer.iconName}
                 size={32}
                 color={!focused ? "#f11" : "white"}
              />
              :
            drawer.iconType==='Fontisto' ?
            <Fontisto 
                name={drawer.iconName} 
                size={24} 
        color={!focused ? "#f11" : "white"} />
            :
            drawer.iconType==='Feather' ?
              <Feather
                name={drawer.iconName}
                size={24}
                color={!focused ? "#f11" : "white"}
              />
            :
              <FontAwesome5
                name={drawer.iconName}
                size={24}
                color={!focused ? "#f11" : "white"}
              />
            ,
               headerShown:true,
               header: ({ scene }) => {
                //  const { options } = scene.descriptor;
                //  const title =
                //    options.headerTitle !== undefined
                //      ? options.headerTitle
                //      : options.title !== undefined
                //      ? options.title
                //      : scene.route.name;

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
    </View>
    
    // <View style={styles.container}>
    //   <Text>Hello React Native!</Text>
    //   <Image source={{
    //     width: 200,
    //     height: 300,
    //     uri: "https://lepaulove.github.io/NaturalDefenseStore/static/media/mango-smoothie.4f0b281baa979faff36c.jpg"}}/>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
