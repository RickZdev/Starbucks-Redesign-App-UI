import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomDrawer from '../components/CustomDrawer'
import COLORS from '../global/COLORS'

import AppStack from './AppStack'
import NiceScreen from '../screens/NiceScreen'

const Drawer = createDrawerNavigator();

const MenuDrawer = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerPosition: "right",
          drawerType: 'front',
          drawerLabelStyle: { marginLeft: -20 },
          drawerActiveBackgroundColor: COLORS.black,
          drawerActiveTintColor: COLORS.white,
        }}
        drawerContent={props => <CustomDrawer {...props} />} >
        <Drawer.Screen name="Home" component={AppStack}/>
        <Drawer.Screen name="NiceScreen" component={NiceScreen}
          options={{
            drawerLabel: 'Track My Orders',
            drawerIcon: ({ size, color }) => <Feather name="package" size={size} color={color} />,
          }} />
        {/* <Drawer.Screen name="OrderHistoryDrawer" component={OrderHistoryDrawer}
          options={{
            drawerLabel: 'Order History',
            drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="history" size={size} color={color} />,
          }} /> */}
      </Drawer.Navigator>
    </View>
  )
}

export default MenuDrawer

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0, bottom: 0, right: 0, left: 0,
    zIndex: -1,
    backgroundColor: COLORS.white,
  }
})