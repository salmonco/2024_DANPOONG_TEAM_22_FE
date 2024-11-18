import Body4 from '@components/body/Body4'
import { Image, Pressable, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundImage from '../../../assets/images/login/background.svg'
import MainPageBack from '@components/MainPageBack'
import Body3 from '@components/body/Body3'
import KakaoIcon from '../../../assets/images/login/kakao.svg'

const LoginScreen = () => {
  const handleKakaoLogin = () => {
    console.log('Kakao login')
  }

  const handleUseWithoutLogin = () => {
    console.log('Use without login')
  }

  return (
    <SafeAreaView className="flex-1 justify-center items-center relative">
      <MainPageBack>
        <View className="flex-1">
          <View className="items-center pt-[165]">
            <Body4 text="내일도 모레도," className="text-gray300" />
            <Body4 text="일상을 비추는 목소리" className="text-gray300" />
            <Image
              source={require('../../../assets/images/logo/typo/typo_logo_white.png')}
              style={{ width: 200, height: 72, marginTop: 16 }}
            />
          </View>
          <BackgroundImage />
          <View className="absolute left-0 bottom-[72] w-full px-[40]">
            <Pressable
              className="h-[52.8] bg-[#FEE500] justify-center items-center flex-row"
              style={{ borderRadius: 7 }}
              onPress={handleKakaoLogin}
            >
              <KakaoIcon />
              <Body3 text="카카오 로그인" className="ml-[9.39] font-semiBold" />
            </Pressable>
            <Pressable onPress={handleUseWithoutLogin}>
              <Body4
                text="가입 없이 써볼래요"
                className="mt-[16.2] text-gray300 text-center underline"
              />
            </Pressable>
          </View>
        </View>
      </MainPageBack>
    </SafeAreaView>
  )
}

export default LoginScreen
