import { View, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { ChevronLeftIcon, PlusIcon, ShoppingBagIcon } from 'react-native-heroicons/solid';
import DATA from '../global/DATA';
import COLORS from '../global/COLORS';
import Entypo from 'react-native-vector-icons/Entypo'

const ProductScreen = ({ route, navigation }) => {
  const data = route.params;
  const { width } = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index + 2);

  }).current;
  return (
    <View className='flex-1 bg-white px-10 py-11'>
      {/* back */}
      <TouchableOpacity onPress={() => navigation.goBack()} className='mb-8'>
        <ChevronLeftIcon size={28} color='black' />
      </TouchableOpacity>
      
      {/* cover photo */}
      <View className='flex-1 pb-5'>
        <Image
          source={require('../assets/images/coffeeCover.png')}
          resizeMode='contain'
          className='w-full h-full'
        />
      </View>

      {/* description */}
      <View>
        <Text className='font-gilroyExtraBold text-primary text-[26px] mb-2'>{data.coffeeName}</Text>
        <Text className='font-gilroyBold text-secondary text-base'>{data.description}</Text>
      </View>
      <View className='mt-4'>
        <Text className='font-gilroyExtraBold text-primary text-[22px] mb-3'>Reviews</Text>
        <View className='flex-row space-x-4 justify-center items-center'>
          <FlatList
            data={DATA.reviews}
            keyExtractor={(_item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className='mr-3'>
                <Image source={item} resizeMode='contain' />
              </View>
            )}
            ListFooterComponent={() => (
              <View className='justify-between items-center bg-white border-2 border-primary rounded-full p-2'>
                <PlusIcon size={16} color={COLORS.primary}/>
              </View>
            )}
          />
          </View>
      </View>

      {/* quantity */}
      <View className='flex-row'>
        <View style={{ width: width / 2 - 30}} className='mt-4'>
          <Text className='font-gilroyExtraBold text-primary text-[22px] mb-3'>Quantity</Text>
          <FlatList
            data={DATA.quantity}
            keyExtractor={(_item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={viewableItemsChanged}
            renderItem={({ item, index }) => {
              return (
                <View className='mr-3'>
                  <Text className={`${currentIndex === index ? 'text-[34px] font-gilroyExtraBold text-primary' : 'text-2xl font-gilroyExtraBold'}`} style={{ color: 'rgba(34, 81, 37, 0.6)'}}>{item}</Text>
                </View>
            )}}
          />
          <View className='items-center -left-4'>
            <Image 
              source={require('../assets/images/triangle.png')} 
              resizeMode='contain' 
            />
          </View>
        </View>

        {/* checkout */}
        <View className='justify-center items-center absolute right-0'>
          <TouchableOpacity className='bg-primary py-9 px-7 rounded-3xl justify-center items-center space-y-1'>
            <ShoppingBagIcon size={26} color='white'/>
            <Text className='text-white font-gilroyExtraBold text-lg'>₱{data.price}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default ProductScreen