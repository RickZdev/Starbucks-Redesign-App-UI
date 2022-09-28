import { View, Text, ScrollView, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { BellIcon, SearchIcon } from 'react-native-heroicons/solid'
import DATA from '../global/DATA'

import COLORS from '../global/COLORS'
import CategoryList from '../components/CategoryList'
import PromoList from '../components/PromoList'
import ProductList from '../components/ProductList'

const HomeScreen = ({ navigation }) => {
  const [category, setCategory] = useState(0);

  const handleCategory = (index) => {
    setCategory(index);
  }

  return (
    <ScrollView className='bg-white pt-11'>
        {/* header section */}
        <View className='px-10'>
          {/* navigation */}
          <View className='flex-row justify-between '>
          <Feather name='menu' size={28} color={COLORS.secondary} onPress={() => navigation.openDrawer()}/>
            <BellIcon size={28} color={COLORS.secondary}/>
          </View>
          
          {/* greetings */}
          <View className='py-4'>
            <Text className='text-secondary text-base font-gilroySemiBold'>Good Morning!</Text>
            <Text className='text-primary text-xl font-gilroyExtraBold'>Frederick Castaneda Jr.</Text>
          </View>

          {/* search bar */}
          <View>
            <TextInput className='w-full bg-[#F0F0F0] rounded-3xl pl-12' placeholder='Coffee for you...' placeholderTextColor={COLORS.secondary}/>
            <View className='absolute w-full h-full justify-center items-start pl-[19px]'>
              <Feather name='search' size={18} color='#200E32'/>
            </View>
          </View>
        </View>

        {/* categories section */}
        <View className='flex-row justify-center px-10 pt-7 space-x-7'>
          {
            DATA.categories.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => handleCategory(index)}>
                <Text className={`text-lg ${index === category ? 'text-primary font-gilroyExtraBold' : 'text-secondary font-gilroyBold'}`}>{item}</Text>
              </TouchableOpacity>
            ))
          }
        </View>

        {/* category list */}
        <View>
          {
            category === 0 && <CategoryList data={DATA.popular}/> ||
            category === 1 && <CategoryList data={DATA.coffee}/> ||
            category === 2 && <CategoryList data={DATA.tea}/> ||
            category === 3 && <CategoryList data={DATA.drink}/> 
          }
        </View>
        {/* best offer list */}
        <PromoList />
        <ProductList data={DATA.products}/>
    </ScrollView>
  )
}

export default HomeScreen