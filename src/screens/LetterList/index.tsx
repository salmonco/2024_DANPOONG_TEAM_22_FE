import AppBar from '@components/atom/AppBar'
import BG from '@components/atom/BG'
import Body4 from '@components/atom/body/Body4'
import Title4 from '@components/atom/title/Title4'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Card from '@screens/LetterList/components/Card'
import { LetterStackParamList } from '@type/LetterStackParamList'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

type LetterProps = NativeStackScreenProps<
  LetterStackParamList,
  'LetterListScreen'
>

const filterMenu = [
  { label: '전체', idx: 1 },
  { label: '외출', idx: 2 },
  { label: '기상', idx: 3 },
  { label: '식사', idx: 4 },
  { label: '취침', idx: 5 },
  { label: '위로', idx: 6 },
  { label: '우울', idx: 7 },
  { label: '칭찬', idx: 8 },
]

const LetterListScreen = ({ navigation }: Readonly<LetterProps>) => {
  const [selectedFilterIdx, setSelectedFilterIdx] = useState(1)

  return (
    <SafeAreaView className="flex-1">
      <BG type="main">
        <View className="flex-1">
          {/* AppBar는 flex-1 컨테이너 안에 넣어야 함 */}
          <AppBar
            title="청년의 편지"
            goBackCallbackFn={() => navigation.goBack()}
            className="absolute top-[6] w-full"
          />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-[74]"
          >
            <View className="flex-row items-center px-[30] py-[10]">
              {filterMenu.map((menu) => (
                <Pressable
                  key={menu.idx}
                  className={`h-[36] px-[22] items-center justify-center border ${menu.idx === selectedFilterIdx ? 'border-tabIcon bg-white/10' : 'border-white10'} mr-[8]`}
                  style={{ borderRadius: 50 }}
                  onPress={() => setSelectedFilterIdx(menu.idx)}
                >
                  <Body4
                    text={menu.label}
                    className={`${menu.idx === selectedFilterIdx ? 'text-yellowPrimary' : 'text-gray300'}`}
                  />
                </Pressable>
              ))}
            </View>
          </ScrollView>

          <View className="flex-row items-center mt-[30] px-[30]">
            <Text
              className="text-white"
              style={{
                fontSize: 22,
                fontFamily: 'LeeSeoyun-Regular',
                lineHeight: 22 * 1.5,
              }}
            >
              TO.
            </Text>
            <Title4 text="바람돌이" className="text-yellowPrimary ml-[7]" />
          </View>

          <ScrollView>
            <View className="pt-[22] px-[30] pb-[110]">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </View>
          </ScrollView>
        </View>
      </BG>
    </SafeAreaView>
  )
}

export default LetterListScreen
