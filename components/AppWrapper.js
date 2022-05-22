import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { View, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import UserDrawer from './UserDrawer';
import NonUserDrawer from './NonUserDrawer';
import globalStyles from '../styles/global.styles';
import HomeStackNavigator from '../Navigators/HomeStackNavigator';
import LoginScreen from '../screens/Login';

const mapState = ({user}) => ({
  currentUser: user.currentUser
})

export default function AppWrapper() {

const { currentUser } = useSelector(mapState)
  return (
    
    <NavigationContainer>
      {!currentUser ? <HomeStackNavigator /> : <UserDrawer />}
      {/* <HomeStackNavigator /> */}
    </NavigationContainer>
      // <View style={{flex:1}}>
      // <StatusBar
      //   backgroundColor={globalStyles.colors.black} 
      //   />
      // {currentUser ? <UserDrawer/> : <NonUserDrawer/>}
      // </View>
  );
}
