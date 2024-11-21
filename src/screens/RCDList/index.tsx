import { View } from 'react-native'
import BG from '../../components/atom/BG'
import Txt from '../../components/atom/Txt'
import Carousel from '../../components/molecule/Carousel'
import { ImageBackground } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { HomeStackParamList } from '../../types/HomeStackParamList'
import { getRCDList, RCD } from '@apis/RCDApis/getRCDList'
import { useState, useEffect } from 'react'
const RCDListScreen = ({route}: {route: RouteProp<HomeStackParamList, 'RCDList'>}) => {
  const {type} = route.params
  // test data - 나중에 api 요청 받아서 데이터 넣어주기
  const entries = [
    {"categoryId": 5, "count": 0, "title": `우울하고 불안한 청년에게,괜찮다는 다독임의 말`,  "used": false},
    {"categoryId": 6, "count": 0, "title": `칭찬이 필요한 청년에게,\n잘 하고 있다는 격려의 말`, "used": false},
    {"categoryId": 7, "count": 0, "title": `삶이 어려운 청년에게,\n경험을 담은 위로의 말`, "used": false}
  ]
  const [rcdList, setRcdList] = useState<RCD[]>([])
  useEffect(() => {
    console.log(rcdList)
  }, [rcdList])
  useEffect(() => {
    let categoryType: 'DAILY' | 'COMFORT' = type
    try {
      getRCDList(categoryType).then(setRcdList)
    } catch (error) {
      console.error('RCD 목록을 가져오는데 실패했습니다:', error)
    }
  }, [])
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
          source={type==='DAILY'?require(`../../../assets/pngs/BGStarBottomDAILY.png`):require(`../../../assets/pngs/BGStarBottomCOMFORT.png`)}
          style={{ position: 'absolute', bottom: 0, width: '100%', height: 258 }}
        />
      {/* content section */}
        {/* header */}
        <View className="w-full mt-[63] px-px mb-[33]">
          <Txt
            type="title2"
            content={type==='DAILY' ? `청년에게 일상을 응원하는\n녹음을 들려주세요` : `청년에게 위로하는\n목소리를 들려주세요`}
            color="white"
          />
          
        </View>
        {/* list */}
        <Carousel entries={rcdList} />
    </BG>
  )
}
export default RCDListScreen;
