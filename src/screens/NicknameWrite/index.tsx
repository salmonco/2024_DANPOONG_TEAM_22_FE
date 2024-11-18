import { Image, Pressable, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundImage from '../../../assets/images/login/background.svg'
import MainPageBack from '@components/MainPageBack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '@stackNav/Auth'
import Title2 from '@components/title/Title2'
import { useState } from 'react'
import Button from '@components/button/Button'
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
} from 'expo-image-picker'
import PencilIcon from '../../../assets/images/login/pencil.svg'

type AuthProps = NativeStackScreenProps<
  AuthStackParamList,
  'NicknameWriteScreen'
>

const NicknameWriteScreen = ({ navigation }: Readonly<AuthProps>) => {
  const [imageUri, setImageUri] = useState(null)
  const [nickname, setNickname] = useState('')

  const selectImage = async () => {
    // 권한 요청
    const permissionResult = await requestMediaLibraryPermissionsAsync()

    if (!permissionResult.granted) {
      alert('사진 권한이 거부되었어요')
      return
    }

    // 이미지 선택
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    if (result.canceled) return

    setImageUri(result.assets[0].uri)
  }

  const handleNext = () => {
    console.log('go next')
    navigation.navigate('RoleSelectScreen')
  }

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <MainPageBack>
        <>
          <View className="items-center pt-[80]">
            <Title2 text="내일모래가 당신을" className="text-white" />
            <Title2 text="어떻게 부를까요?" className="text-white" />

            <Pressable onPress={selectImage} className="mt-[30] relative">
              {imageUri ? (
                <Image
                  source={{ uri: imageUri }}
                  className="w-[107] h-[107]"
                  style={{ borderRadius: 53.5 }}
                />
              ) : (
                <View
                  className="w-[107] h-[107] bg-tabIcon"
                  style={{ borderRadius: 53.5 }}
                />
              )}
              <View
                className="absolute bottom-0 right-0 justify-center items-center w-[32] h-[32] bg-solid"
                style={{ borderRadius: 16 }}
              >
                <PencilIcon />
              </View>
            </Pressable>

            <TextInput
              value={nickname}
              onChangeText={setNickname}
              placeholder="닉네임을 입력해주세요"
              placeholderTextColor={'#717171'}
              className={`text-center px-[10] font-m text-yellowPrimary border-b ${
                nickname ? 'border-yellow200' : 'border-gray500'
              } mt-[31]`}
              style={{ fontSize: 22 }}
            />
          </View>
          <BackgroundImage />
          <View className="absolute left-0 bottom-[30] w-full px-[40]">
            <Button text="다음" onPress={handleNext} disabled={!nickname} />
          </View>
        </>
      </MainPageBack>
    </SafeAreaView>
  )
}

export default NicknameWriteScreen
