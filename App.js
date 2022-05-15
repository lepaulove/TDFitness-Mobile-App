import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/createStore';

import DrawerWrapper from './constants/DrawerWrapper';

const mapState = ({user}) => {
  currentUser = user.currentUser
}

export default function App() {

  return (
    <Provider store={store}>
      <DrawerWrapper />
    </Provider>
  );
}

