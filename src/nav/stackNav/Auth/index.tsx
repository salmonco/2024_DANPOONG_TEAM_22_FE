import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '@screens/Login'
import NicknameWriteScreen from '@screens/NicknameWrite'

export type AuthStackParamList = {
  LoginScreen: undefined
  NicknameWriteScreen: undefined
  RoleSelectScreen: { nickname: string }
  MemberInfoWriteScreen: { nickname: string; role: string }
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNav = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: '로그인' }}
      />
      <AuthStack.Screen
        name="NicknameWriteScreen"
        component={NicknameWriteScreen}
        options={{ title: '닉네임 입력' }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthStackNav
