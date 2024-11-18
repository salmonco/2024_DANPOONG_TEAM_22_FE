import Body4 from '@components/body/Body4'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
  return (
    <SafeAreaView className="h-full justify-center items-center">
      {/* <View className="bg-gradient100 h-full"> */}
      <View className="items-center">
        <Body4 text="내일도 모레도," className="text-gray300" />
        <Body4 text="일상을 비추는 목소리" className="text-gray300" />
      </View>
      {/* </View> */}
    </SafeAreaView>
  )
}

export default LoginScreen
