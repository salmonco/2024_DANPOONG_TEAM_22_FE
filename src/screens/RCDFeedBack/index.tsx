import { View, Animated, ImageBackground, Text, ActivityIndicator } from 'react-native'
import Txt from '@components/atom/Txt'
import BG from '@components/atom/BG'
import Button from '@components/atom/button/Button'
//import { BarIndicator, DotIndicator } from 'react-native-indicators'

import { useState, useEffect, useRef } from 'react'

const RCDFeedBackScreen = () => {
  const [isLoading,setIsLoading]=useState<boolean>(false);
  const opValue = useRef(new Animated.Value(0)).current
  const subColor = useRef(new Animated.Value(0)).current
  useEffect(() => {
    if(!isLoading){
    Animated.timing(opValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()

    Animated.timing(subColor, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start()
  }
  }, [isLoading])

  const interpolatedColor = subColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#a0a0a0', '#d0d0d0'],
  })

  return (
    <View style={{ flex: 1 }}>
      {isLoading?(
  <>
        {/* loading */}

  <BG type='solid'>


  {/* content section */}
  <View className='absolute pt-[233] w-full'>
  <Txt type="title1" content="듣고 있어요..." color="gray_100" align='center'/>
  <View className='mb-[23]'/>
  <Animated.Text style={{ color: interpolatedColor, textAlign: 'center' }}>
    더 세심한 확인이 필요할 때는{'\n'}시간이 조금 더 소요될 수 있어요
  </Animated.Text>
  <View className='mb-[55]'/>
  {/* <BarIndicator color='#f9f96c' count={5} size={40}/> */}
  <ActivityIndicator size="large" color="#f9f96c" />

  </View>
  </BG>
  </>
      ):(
        <>
        {/* 배경 section */}
        {/* 불 꺼진 배경 */}
        <BG type="solid">
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: '90%',
                height: '95%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ImageBackground
                source={require('@assets/pngs/starsOff.png')}
                resizeMode="contain"
                style={{
                  position: 'static',
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
          </View>
        </BG>
        {/* 불 켜진 배경 */}
        <Animated.View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: opValue,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <BG type="gradation">
            <View
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  width: '90%',
                  height: '95%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ImageBackground
                  source={require('@assets/pngs/starsOn.png')}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </View>
            </View>
          </BG>
        </Animated.View>
        {/* content section */}
        <View className='absolute pt-[233] w-full'>
        <Txt type="title1" content="녹음 완료" color="gray_100" align='center'/>
        <View className='mb-[23]'/>
        <Animated.Text style={{ color: interpolatedColor, textAlign: 'center' }}>
          바람돌이님의 목소리 덕분에{'\n'}나그네가 힘차게 여행할 수 있을거에요
        </Animated.Text>
        </View>
        </>
      )}
    
    
    </View>
  )
}

export default RCDFeedBackScreen
