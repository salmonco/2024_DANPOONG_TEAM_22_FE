import { Pressable, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundImage from '../../../assets/images/login/background.svg'
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

type AuthProps = NativeStackScreenProps<AuthStackParamList, 'RoleSelectScreen'>

const RoleSelectScreen = ({ navigation }: Readonly<AuthProps>) => {
  const [role, setRole] = useState('')

  const handleNext = () => {
    console.log('go next')
    navigation.navigate('VolunteerOnboardingScreen')
  }

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <MainPageBack>
        <>
          <View className="items-center pt-[80]">
            <Body3 text="이곳은 광활한 사막..." className="text-gray300" />
            <Title2 text="네잎클로바 님," className="text-white mt-[26]" />
            <Title2 text="당신은 누구인가요?" className="text-white" />

            <View className="mt-[30] px-[46] flex-row">
              <Pressable
                className={`relative w-1/2 pt-[41] h-[180] items-center mr-[22] border ${
                  role === '조력자'
                    ? 'bg-white/20 border-yellowPrimary'
                    : 'bg-white/10 border-white/10'
                }`}
                style={{ borderRadius: 10 }}
                onPress={() => setRole('조력자')}
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
                  role === '청년'
                    ? 'bg-white/20 border-yellowPrimary'
                    : 'bg-white/10 border-white/10'
                }`}
                style={{ borderRadius: 10 }}
                onPress={() => setRole('청년')}
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
          <BackgroundImage />
          <View className="absolute left-0 bottom-[30] w-full px-[40]">
            <Button text="다음" onPress={handleNext} disabled={!role} />
          </View>
        </>
      </MainPageBack>
    </SafeAreaView>
  )
}

export default RoleSelectScreen
