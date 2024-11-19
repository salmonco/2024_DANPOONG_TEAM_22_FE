import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '@screens/Login'
import MemberInfoWriteScreen from '@screens/MemberInfoWrite'
import NicknameWriteScreen from '@screens/NicknameWrite'
import RoleSelectScreen from '@screens/RoleSelect'

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
      <AuthStack.Screen
        name="RoleSelectScreen"
        component={RoleSelectScreen}
        options={{ title: '역할 선택' }}
      />
      <AuthStack.Screen
        name="MemberInfoWriteScreen"
        component={MemberInfoWriteScreen}
        options={{ title: '정보 입력' }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthStackNav
