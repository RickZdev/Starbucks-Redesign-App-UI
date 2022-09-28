import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={HomeScreen}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ presentation: 'card' }} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  )
}

export default AppStack;