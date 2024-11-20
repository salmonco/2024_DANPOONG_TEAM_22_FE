import Body4 from '@components/atom/body/Body4'
import { Image, Pressable, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainPageBack from '@components/MainPageBack'
import Body3 from '@components/atom/body/Body3'
import KakaoIcon from '../../../assets/images/login/kakao.svg'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '@stackNav/Auth'
import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login'
import { postLogin } from '@apis/auth'
import * as SecureStore from 'expo-secure-store'

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>

const LoginScreen = ({ navigation }: Readonly<AuthProps>) => {
  const handleKakaoLogin = async () => {
    try {
      const token: KakaoOAuthToken = await login()

      const { result } = await postLogin({
        accessToken: token.accessToken,
        loginType: 'KAKAO',
      })

      const { accessToken, refreshToken, memberId, serviceMember } = result
      console.log('serviceMember', serviceMember)

      await SecureStore.setItemAsync('accessToken', accessToken)
      await SecureStore.setItemAsync('refreshToken', refreshToken)
      await SecureStore.setItemAsync('memberId', String(memberId))

      navigation.navigate('NicknameWriteScreen')
    } catch (error) {
      console.error('Kakao login error:', error)
    }
  }

  const handleUseWithoutLogin = () => {
    console.log('Use without login')
  }

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
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
          <Image
            source={require('../../../assets/images/login/background1.png')}
            className="w-full h-auto flex-1"
          />
          <View className="absolute left-0 bottom-[72] w-full px-[40]">
            <Pressable
              className="h-[52.8] bg-[#FEE500] justify-center items-center flex-row"
              style={{ borderRadius: 7 }}
              onPress={handleKakaoLogin}
            >
              <KakaoIcon />
              <Body3 text="카카오 로그인" className="ml-[9.39] font-sb" />
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
