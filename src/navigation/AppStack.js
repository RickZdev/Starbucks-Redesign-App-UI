import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={HomeScreen}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ presentation: 'card' }} />
    </Stack.Navigator>
  )
}

export default AppStack;