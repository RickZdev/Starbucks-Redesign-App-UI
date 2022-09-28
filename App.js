import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from "tailwindcss-react-native";
import { LogBox } from 'react-native';

import AppStack from './src/navigation/AppStack';
import MenuDrawer from './src/navigation/MenuDrawer';

const App = () => {
  // hidden yellow warnings
  LogBox.ignoreAllLogs(true)

  return (
    <NavigationContainer>
      <TailwindProvider>
        <MenuDrawer />
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;
