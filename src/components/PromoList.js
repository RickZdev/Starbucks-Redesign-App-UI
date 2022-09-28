import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

const PromoList = () => {
  return (
    <View className='pt-8 px-4'>
      <Text className='font-gilroyExtraBold text-2xl text-primary pb-4'>Best Offers</Text>
      <View className='bg-primary h-40 rounded-2xl justify-center overflow-hidden'>
        <Image
          source={require('../assets/images/promo.png')}
          resizeMode='cover'
          className='w-full h-full bg-white'
        />
      </View>
    </View>
  )
}

export default PromoList