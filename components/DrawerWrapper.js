import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { View, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import UserDrawer from './UserDrawer';
import NonUserDrawer from './NonUserDrawer';
import globalStyles from '../styles/global.styles';

const mapState = ({user}) => ({
  currentUser: user.currentUser
})

export default function DrawerWrapper() {

const { currentUser } = useSelector(mapState)
  return (
      <View style={{flex:1}}>
      <StatusBar
        backgroundColor={globalStyles.colors.mainColor} 
        />
      {currentUser ? <UserDrawer/> : <NonUserDrawer/>}
      </View>
  );
}
