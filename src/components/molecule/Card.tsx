import {  View } from 'react-native'
import Txt from '../atom/Txt'
import ShadowView from '../atom/ShadowView'
import Button from '@components/atom/button/Button'
import { ImageBackground } from 'react-native'
import StarPNG from '@components/atom/StarPNG'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { HomeStackParamList } from '../../types/HomeStackParamList'
const Card = ({head,mx,width}:{head:string,mx:number,width:number}) => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>()
  return (
  <View className={`w-[${width}] h-full mx-[${mx}]`}>
    <ShadowView>
      {/* frame */}
      <View className="w-full h-full justify-evenly items-center">
        {/* 별 이미지 */}
        <View className="flex flex-row justify-center items-center">
          <StarPNG />
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
        {/* button */}
        <View className='w-full px-px'>
        <Button
          text="녹음하기"
          onPress={() => {
            navigation.navigate('RCDNotice')
          }}
          disabled={false}
        />
        </View>
      </View>
    </ShadowView>
    </View>
  )
}
export default Card
