import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const ProductList = ({ data }) => {
  return (
    <View className='px-2 pb-14'>
      <Text className='font-gilroyExtraBold text-2xl text-primary px-3 pt-5'>For You</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item, index }) => <Card data={item} index={index}/>} 
        />
    </View>
  )
}

const Card = ({ data, index }) => {
  const { width } = Dimensions.get('window');
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductScreen', data)} className='pt-16' key={index} activeOpacity={0.8}>
      <View className='bg-primary rounded-2xl px-3 py-4 justify-between' style={{ width: (width / 2) - 20, height: 180, marginRight: 3, marginLeft: 7 }}>
        {/* top section */}
        <View className='flex-row space-x-2 items-center'>
          <StarIcon size={18} color='yellow' />
          <Text className='text-base text-white font-gilroyBold'>{data.rating}</Text>
        </View>
        {/* image section */}
        <Image
          source={data.image}
          resizeMode='contain'
          className='absolute -top-[55px] -right-[20px] z-30 w-full h-full'
        />
        {/* bottom section */}
        <View className=''>
          <Text className='text-white text-lg font-gilroyExtraBold'>{data.coffeeName}</Text>
          <View className='flex-row justify-between'>
            <Text className='text-white text-lg font-gilroyExtraBold'>₱{data.price}</Text>
            <TouchableOpacity className='bg-white rounded-full justify-center items-center p-2'>
              <HeartIcon size={22} color={'red'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProductList