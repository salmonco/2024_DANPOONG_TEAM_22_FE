import Body3 from '@components/atom/body/Body3'
import Title2 from '@components/atom/title/Title2'
import Title3 from '@components/atom/title/Title3'
import { useState } from 'react'
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  View,
} from 'react-native'
import CancelIcon from '../../../assets/images/youth/cancel.svg'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { YouthStackParamList } from '@stackNav/Youth'

type YouthProps = NativeStackScreenProps<YouthStackParamList, 'YouthHomeScreen'>

const YouthHomeScreen = ({ navigation }: Readonly<YouthProps>) => {
  const [clicked, setClicked] = useState(false)

  const handleButtonClick = (label: string) => {
    console.log(label)
    navigation.navigate('YouthListenScreen')
  }

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require('../../../assets/images/youth/background1.png')}
        className="flex-1 items-center"
      >
        <View className="self-start">
          <Title3
            text="고독한 울프님, 반가워요!"
            className="text-gray300 pt-[117] px-[30]"
          />
          <View className="mt-[9] px-[30]">
            <View className="flex-row items-center">
              <Title2 text="1000명의 목소리" className="text-yellowPrimary" />
              <Title2 text="가" className="text-white" />
            </View>
            <Title2 text="당신의 일상을 비추고 있어요" className="text-white" />
          </View>
        </View>

        <View
          className={`absolute items-center w-full h-full ${
            clicked ? 'bg-black/50' : ''
          }`}
        >
          <View className="absolute bottom-[88] items-center">
            {clicked ? (
              <View className="mb-[29] items-center">
                <Pressable
                  className="mb-[15] bg-tabIcon border border-gray100 h-[59] px-[22] justify-center items-center"
                  style={{ borderRadius: 100 }}
                  onPress={() => handleButtonClick('위로')}
                >
                  <Title3 text="위로" className="text-gray100" />
                </Pressable>
                <Pressable
                  className="mb-[15] bg-tabIcon border border-gray100 h-[59] px-[22] justify-center items-center"
                  style={{ borderRadius: 100 }}
                  onPress={() => handleButtonClick('칭찬과 격려')}
                >
                  <Title3 text="칭찬과 격려" className="text-gray100" />
                </Pressable>
                <Pressable
                  className="bg-tabIcon border border-gray100 h-[59] px-[22] justify-center items-center"
                  style={{ borderRadius: 100 }}
                  onPress={() => handleButtonClick('우울과 불안')}
                >
                  <Title3 text="우울과 불안" className="text-gray100" />
                </Pressable>
              </View>
            ) : (
              <View className="mb-[24]">
                <Body3
                  text="당신을 응원하는 목소리를"
                  className="text-gray300 text-center"
                />
                <Body3
                  text="들을 수 있어요"
                  className="text-gray300 text-center"
                />
              </View>
            )}
            <Pressable
              className={`${
                clicked ? 'bg-solid' : 'bg-bottomNavigation'
              } flex-row justify-center items-center h-[61] w-[160]`}
              style={{ borderRadius: 100 }}
              onPress={() => setClicked((prev) => !prev)}
            >
              {clicked ? (
                <CancelIcon />
              ) : (
                <Image
                  source={require('../../../assets/images/logo/vector/vector_logo_white.png')}
                  className="w-[43] h-[43]"
                />
              )}
              {!clicked && (
                <Title3 text="위로 받기" className="text-gray100 pr-[12]" />
              )}
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default YouthHomeScreen
