import { Alert, Image, Pressable, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainPageBack from '@components/MainPageBack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '@stackNav/Auth'
import Title2 from '@components/atom/title/Title2'
import { useState } from 'react'
import Button from '@components/atom/button/Button'
import VolunteerIcon from '../../../assets/images/login/volunteer.svg'
import YouthIcon from '../../../assets/images/login/youth.svg'
import Body3 from '@components/atom/body/Body3'
import Title3 from '@components/atom/title/Title3'
import { Role } from '@type/auth'

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'RoleSelectScreen'>

const RoleSelectScreen = ({ route, navigation }: Readonly<AuthProps>) => {
  const { nickname, imageUri } = route.params
  const [role, setRole] = useState<Role | null>(null)

  const handleNext = () => {
    if (role === 'HELPER') {
      navigation.navigate('MemberInfoWriteScreen', { nickname, imageUri, role })
    } else {
      Alert.alert('알림', '청년은 아직 준비 중이에요')
    }
  }

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <MainPageBack>
        <>
          <View className="items-center pt-[80]">
            <Body3 text="이곳은 광활한 사막..." className="text-gray300" />
            <Title2
              text={`${nickname ?? ''} 님,`}
              className="text-white mt-[26]"
            />
            <Title2 text="당신은 누구인가요?" className="text-white" />

            <View className="mt-[30] px-[46] flex-row">
              <Pressable
                className={`relative w-1/2 pt-[41] h-[180] items-center mr-[22] border ${
                  role === 'HELPER'
                    ? 'bg-white/20 border-yellowPrimary'
                    : 'bg-white/10 border-white/10'
                }`}
                style={{ borderRadius: 10 }}
                onPress={() => setRole('HELPER')}
              >
                <Title3
                  text="조력자"
                  className="text-white mb-[30] text-center"
                />
                <View className="absolute bottom-0">
                  <VolunteerIcon />
                </View>
              </Pressable>
              <Pressable
                className={`relative w-1/2 pt-[41] h-[180] items-center border ${
                  role === 'YOUTH'
                    ? 'bg-white/20 border-yellowPrimary'
                    : 'bg-white/10 border-white/10'
                }`}
                style={{ borderRadius: 10 }}
                onPress={() => setRole('YOUTH')}
              >
                <Title3
                  text="청년"
                  className="text-white mb-[30] text-center"
                />
                <View className="absolute bottom-0">
                  <YouthIcon />
                </View>
              </Pressable>
            </View>
          </View>
          <Image
            source={require('../../../assets/images/login/background2.png')}
            className="w-full h-auto flex-1 mt-[54]"
          />
          <View className="absolute left-0 bottom-[30] w-full px-[40]">
            <Button text="다음" onPress={handleNext} disabled={!role} />
          </View>
        </>
      </MainPageBack>
    </SafeAreaView>
  )
}

export default RoleSelectScreen
