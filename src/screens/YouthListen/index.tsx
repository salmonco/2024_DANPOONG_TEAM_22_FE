import Body2 from '@components/atom/body/Body2'
import Title3 from '@components/atom/title/Title3'
import { Image, Pressable, SafeAreaView, TextInput, View } from 'react-native'
import PlayIcon from '../../../assets/images/youth/play.svg'
import StopIcon from '../../../assets/images/youth/stop.svg'
import { useState } from 'react'

const YouthListenScreen = () => {
  const [playing, setPlaying] = useState(false)
  const [message, setMessage] = useState('')
  const imageUri = null

  return (
    <SafeAreaView className="flex-1 bg-solid">
      <View className="pt-[45] flex-1 items-center">
        <View className="relative w-[78] h-[78] justify-center items-center">
          <Image
            source={
              imageUri
                ? { uri: imageUri }
                : require('../../../assets/images/logo/app/app_logo_yellow.png')
            }
            className="w-[70] h-[70]"
            style={{ borderRadius: 35 }}
          />
          <View
            className="absolute left-0 bottom-0 w-[78] h-[78] border border-yellowPrimary"
            style={{ borderRadius: 39 }}
          />
        </View>

        <Body2
          text="봉사자 닉네임"
          className="text-yellowPrimary mt-[13] mb-[25] text-center"
        />
        <View>
          <Title3
            text="오늘 밖에 비가 온대. 
꼭 우산을 챙겨서 나가렴.
오늘도 힘내!"
            className="text-gray200 text-center"
          />
        </View>

        <Pressable
          onPress={() => setPlaying((prev) => !prev)}
          className="mt-[52]"
        >
          {playing ? <StopIcon /> : <PlayIcon />}
        </Pressable>

        <View
          className="absolute bottom-0 w-full h-[86] px-[25] bg-bottomNavigation"
          style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        >
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="감사의 말을 전해보세요"
            placeholderTextColor={'#A0A0A0'}
            className={`text-gray100 py-[8] px-[27] font-r w-full inline-block bg-tabIcon border ${
              message ? 'border-gray200' : 'border-tabIcon'
            } mt-[31]`}
            style={{ fontSize: 16, borderRadius: 100 }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default YouthListenScreen
