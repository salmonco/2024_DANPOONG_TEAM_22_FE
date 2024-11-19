import { View } from 'react-native'
import BG from '../../components/atom/BG'
import Txt from '../../components/atom/Txt'
import Carousel from '../../components/molecule/Carousel'
import Button from '../../components/atom/button/Button'
import { ImageBackground } from 'react-native'
import { useNavigation, RouteProp, NavigationProp } from '@react-navigation/native'
import { HomeStackParamList } from '../../types/HomeStackParamList'

const RCDListScreen = ({route}: {route: RouteProp<HomeStackParamList, 'RCDList'>}) => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>()
  const {type} = route.params
  // test data - 나중에 api 요청 받아서 데이터 넣어주기
  const entries = [
    {head:'비가 오는 날 외출하는\n청년을 위한 한 마디', sub:'오늘 비 와서 날씨가 춥다는데\n따뜻하게 입고 우산 꼭 챙겨서 나가렴'}, 
    {head:'비가 오는 날 외출하는\n청년다방', sub:'오늘 비 와서 날씨가 춥다는데\n춥게 나가렴'}]
  return (
    <BG type="gradation">
      {/* BG Image */}
      <ImageBackground
        source={require('../../../assets/pngs/BGStarTop.png')}
        style={{
          position: 'absolute',
          top: 32,
          right: 0,
          width: 161,
          height: 130,
        }}
      />
        <ImageBackground
          source={require('../../../assets/pngs/BGStarBottom.png')}
          style={{ position: 'absolute', bottom: 0, width: '100%', height: 258 }}
        />
      {/* content section */}
        {/* header */}
        <View className="w-full h-auto pt-ptt px-px" style={{ marginBottom: `4.15%` }}>
          <Txt
            type="title2"
            content={type==='일상' ? `청년에게 일상을 응원하는\n녹음을 들려주세요` : `청년에게 위로하는\n목소리를 들려주세요`}
            color="white"
          />
          
        </View>
        {/* list */}
        <View className="w-full h-[302]">
        <Carousel entries={entries} />
        </View>
        {/* button */}
        <View className="mb-pb px-px">
        <Button
          text="녹음하기"
          onPress={() => {
            navigation.navigate('RCDNotice')
          }}
          disabled={false}
        />
        </View>
    </BG>
  )
}
export default RCDListScreen;
