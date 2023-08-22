import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import {themeColors} from '../theme'
import { MinusIcon, PlusIcon, StarIcon } from 'react-native-heroicons/solid'

export default function ProductScreen(props) {
    const item = props.route.params;
    const navigation = useNavigation()
    const [size, setSize] = useState('small')
  return (
      <View className='flex-1'>
          <StatusBar style='light' />
          <Image source={require('../assets/images/beansBackground2.png')}
              style={{ height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
              className='w-full absolute'
          />
          <SafeAreaView className='space-y-4'>
              <View className='mx-4 flex-row justify-between items-center'>
                  <TouchableOpacity onPress={()=> navigation.goBack()}>
                      <ArrowLeftIcon size={`50`} strokeWidth={1.2} color={`white`}/>
                  </TouchableOpacity>

                  <TouchableOpacity className='rounded-full border-2 border-white p-2' onPress={()=> navigation.goBack()}>
                      <HeartIcon size={`24`} color={`white`}/>
                  </TouchableOpacity>
              </View>

              <View className='flex-row justify-center'
                  style={{
                      shadowColor: themeColors.bgDark, shadowRadius: 30, shadowOffset: { width: 0, height: 30 },
                      shadowOpacity:0.9
                  }}

              >
                  <Image source={ item.image} className="h-60 w-60" />
              </View>
                <View style={{ backgroundColor: themeColors.bgLight }}
                className='flex-row mx-4 items-center rounded-3xl p-1 px-2 space-x-1 w-16 opacity-60'>
              <StarIcon size={15} color={`white`} />
              <Text className='text-base font-semibold text-white'>{ item.stars}</Text>
              </View>
              
              <View className='mx-4 flex-row justify-between items-center'>
                  <Text style={{ color: themeColors.text }} className='text-3xl font-semibold'>{item.name}</Text>
                  <Text style={{ color: themeColors.text }} className='text-lg font-semibold'>${item.price }</Text>
              </View>

              <View className='mx-4 space-y-2'>
                  <Text style={{ color: themeColors.text }} className='text-lg font-bold'>Coffee size</Text>
                  <View className='flex-row justify-between'>
                      <TouchableOpacity className='p-3 px-8 rounded-full'
                       style={{backgroundColor:size == 'small' ? themeColors.bgLight : 'rgba(0,0,0,0.7)'}}
                      >
                          <Text className={size == 'small' ? 'text-white':'text-gray-700'}>Small</Text>
                      </TouchableOpacity>
                      <TouchableOpacity className='p-3 px-8 rounded-full'
                       style={{backgroundColor:size == 'small' ? themeColors.bgLight : 'rgba(0,0,0,0.7)'}}
                      >
                          <Text className={size == 'medium' ? 'text-white':'text-gray-700'}>Medium</Text>
                      </TouchableOpacity>
                      <TouchableOpacity className='p-3 px-8 rounded-full'
                       style={{backgroundColor:size == 'small' ? themeColors.bgLight : 'rgba(0,0,0,0.7)'}}
                      >
                          <Text className={size == 'large' ? 'text-white':'text-gray-700'}>Large</Text>
                      </TouchableOpacity>
                  </View>
              </View>
              <View className='mx-4 space-y-2 h-3 0'>
                  <Text style={{ color: themeColors.text }} className='text-lg font-bold'>About</Text>
                  <Text className='text-gray-600'>
                      {item.desc}
                  </Text>
              </View>
              <View className='flex-row justify-between items-center mx-4 mb-2'>
                  <View className='flex-row items-center space-x-1'>
                      <Text>Volume</Text>
                      <Text className='text-base text-black font-semibold'>{ item.volume}</Text>
                  </View>
                  <View className='flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4'>
                      <TouchableOpacity>
                          <MinusIcon size='20' strokeWidth={3} color={themeColors.text}/>
                      </TouchableOpacity>
                      <Text style={{color: themeColors.text}} className='font-extrabold text-lg'>2</Text>
                      <TouchableOpacity>
                          <PlusIcon size='20' strokeWidth={3} color={themeColors.text}/>
                      </TouchableOpacity>
                  </View>
              </View>

              <View className='flex-row justify-between mx-4'>
                  <TouchableOpacity className='p-4 rounded-full border border-gray-400'>
                      <ShoppingBagIcon size={`30`} color={`gray`}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor:themeColors.bgLight}} className='p-5 rounded-full flex-1 ml-3'>
                      <Text className='text-center text-base font-semibold text-white'>Buy Now</Text>
                  </TouchableOpacity>
              </View>
      </SafeAreaView>
    </View>
  )
}