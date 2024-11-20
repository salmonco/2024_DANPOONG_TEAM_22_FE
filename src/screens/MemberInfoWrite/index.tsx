import { Image, Pressable, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainPageBack from '@components/MainPageBack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '@stackNav/Auth'
import Title2 from '@components/atom/title/Title2'
import { useState } from 'react'
import Button from '@components/atom/button/Button'
import Title3 from '@components/atom/title/Title3'

type AuthProps = NativeStackScreenProps<
  AuthStackParamList,
  'MemberInfoWriteScreen'
>

const MemberInfoWriteScreen = ({ navigation }: Readonly<AuthProps>) => {
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState('')

  const handleNext = () => {
    console.log('go next')
    navigation.navigate('VolunteerOnboardingScreen')
  }

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <MainPageBack>
        <>
          <View className="items-center pt-[80]">
            <Title2 text="바람돌이 님," className="text-white mt-[26]" />
            <Title2 text="당신에 대해 알려주세요" className="text-white" />

            <View className="mt-[30] px-[46] w-full">
              <TextInput
                value={birthday}
                onChangeText={setBirthday}
                placeholder="생년월일 (YYYYMMDD)"
                placeholderTextColor={'#A0A0A0'}
                className={`text-white py-[12] px-[23] font-r w-full inline-block border ${
                  birthday
                    ? 'border-yellow200 bg-white/20'
                    : 'border-white/10 bg-white/10'
                } mt-[31]`}
                style={{ fontSize: 16, borderRadius: 10 }}
              />

              <View className="mt-[28] flex-row">
                <Pressable
                  className={`flex-1 h-[121] items-center justify-center border mr-[22] ${
                    gender === '남성'
                      ? 'bg-white/20 border-yellowPrimary'
                      : 'bg-white/10 border-white/10'
                  }`}
                  style={{ borderRadius: 10 }}
                  onPress={() => setGender('남성')}
                >
                  <Title3 text="남성" className="text-white text-center" />
                </Pressable>
                <Pressable
                  className={`flex-1 h-[121] items-center justify-center border ${
                    gender === '여성'
                      ? 'bg-white/20 border-yellowPrimary'
                      : 'bg-white/10 border-white/10'
                  }`}
                  style={{ borderRadius: 10 }}
                  onPress={() => setGender('여성')}
                >
                  <Title3 text="여성" className="text-white text-center" />
                </Pressable>
              </View>
            </View>
          </View>
          <Image
            source={require('../../../assets/images/login/background2.png')}
            className="w-full h-auto flex-1 mt-[54]"
          />
          <View className="absolute left-0 bottom-[30] w-full px-[40]">
            <Button
              text="다음"
              onPress={handleNext}
              disabled={!birthday || !gender}
            />
          </View>
        </>
      </MainPageBack>
    </SafeAreaView>
  )
}

export default MemberInfoWriteScreen
