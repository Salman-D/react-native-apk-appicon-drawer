import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Notification from './src/Components/Notification';
import Home from './src/Components/home';
// import Notifications from '../component/Notification';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notification" component={Notification} />
        {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;