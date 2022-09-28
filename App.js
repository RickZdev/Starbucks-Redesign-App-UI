import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from "tailwindcss-react-native";
import { LogBox, StatusBar } from 'react-native';

import MenuDrawer from './src/navigation/MenuDrawer';

const App = () => {
  // hidden yellow warnings
  LogBox.ignoreAllLogs(true)
  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor('white');

  return (
    <NavigationContainer>
      <TailwindProvider>
        <MenuDrawer />
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;
