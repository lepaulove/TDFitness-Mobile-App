import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './Redux/createStore';

import AppWrapper from './components/AppWrapper';

export default function App() {

  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}

