import { View } from 'react-native'
import Txt from '../atom/Txt'
import ShadowView from '../atom/ShadowView'
import { ImageBackground } from 'react-native'
const Card = ({head}:{head:string}) => {
  return (
    <ShadowView>
      {/* frame */}
      <View className="w-full h-full justify-evenly items-center">
        {/* 별 이미지 */}
        <View className="flex flex-row justify-center items-center">
          <ImageBackground
            source={require('../../../assets/pngs/Start2.png')}
            style={{ width: 24, height: 24 }}
          />
        </View>
        {/* 제목 head*/}
        <View>
          <Txt
            type="title3"
            content={head}
            color="white"
            align="center"
          />
        </View>
      </View>
    </ShadowView>
  )
}
export default Card
