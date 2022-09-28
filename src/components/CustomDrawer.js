import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import COLORS from '../global/COLORS'

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={() => props.navigation.closeDrawer()}>
            <Ionicons name="md-close-outline" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatarContainer}>
            <View style={styles.photoContainer}>
              <Image
                source={require('../assets/images/avatar-1.png')}
                resizeMode='cover'
                style={styles.avatar}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.userDetailsContainer}>
            <Text style={styles.userTextName}>Frederick</Text>
            <Text style={styles.userTextEmail}>Castaneda</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.footerContainer} >
        <SimpleLineIcons name="logout" size={18} color="black" style={styles.logoutIcon} />
        <Text style={styles.logoutText}> Sign Out </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 25,
  },
  closeButton: {
    position: 'absolute',
    top: 5, right: 10,
  },
  avatarContainer: {
    backgroundColor: COLORS.white,
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userDetailsContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  userTextName: {

  },
  userTextEmail: {

    fontSize: 12,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15,
    paddingLeft: 15,
    borderTopWidth: 1,

  },
  logoutText: {

    fontSize: 12,
    letterSpacing: 1,
    paddingLeft: 10,
  },
})