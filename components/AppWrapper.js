import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import UserDrawer from './UserDrawer';
import HomeStackNavigator from '../Navigators/HomeStackNavigator';

const mapState = ({user}) => ({
  currentUser: user.currentUser
})

export default function AppWrapper() {

const { currentUser } = useSelector(mapState)
  return (
    
    <NavigationContainer>
      {currentUser ? <UserDrawer /> : <HomeStackNavigator />}
    </NavigationContainer>
  );
}
