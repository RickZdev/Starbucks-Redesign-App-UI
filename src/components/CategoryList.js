import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const CategoryList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => <Card data={item} index={index}/>} 
    />
  )
}

const Card = ({ data, index }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductScreen', data)} className={`pt-16 ${index === 0 ? 'pl-5' : null}`} key={index} activeOpacity={.8}>
      <View className='w-[180px] h-[180px] bg-primary mr-3 rounded-2xl px-3 py-4 justify-between'>
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

export default CategoryList