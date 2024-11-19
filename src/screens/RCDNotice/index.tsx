import { View } from 'react-native'
import BG from '../../components/atom/BG'
import Txt from '../../components/atom/Txt'
import Button from '../../components/atom/button/Button'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Notice1 from '../../../assets/svgs/Notice1.svg'
import Notice2 from '../../../assets/svgs/Notice2.svg'
import { HomeStackParamList } from '../../types/HomeStackParamList'
const Section = ({seq, title, content}: {seq: number, title: string, content: string}) => {
  return <View className='w-full h-auto'>
    {seq === 1 ? <Notice1 /> : <Notice2 />}
    <View className='mt-[20]'/>
    <Txt type='title4' content={title} color='primary' />
    <View className='mt-[10]'/>
    <Txt type='body4' content={content} color='gray_200' />

  </View>
}

const RCDNoticeScreen = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>()

  return <BG type='solid'>
      <View className='flex-1 px-px justify-between'>
        <View className='flex-1 justify-evenly'>
        {/* header */}
        <Txt type='title2' content={`녹음 전에,\n꼭 확인해주세요!`} color='white' />
        {/* section */}
        <Section seq={1} title='부적절한 말은 삼가 주세요' content='욕설, 인종 차별적인 말, 정치적 갈등을 조장하는 말, 성적·성차별적인 말, 타인을 비하하는 말 등 불쾌감을 주거나 부적절하다고 판단되는 말이 감지되었을 시, 녹음 전송이 거부될 수 있어요.' />
        <Section seq={2} title='조용한 장소에서 녹음해 주세요' content='카페, 길거리, 공원 등 주변 소음이 있는 곳에서는 녹음 품질이 저하될 수 있어요. 최상의 녹음 품질을 위해 실내의 조용한 공간에 녹음 하시기를 권장드려요.' />
        </View>
        {/* button */}
        <View className='mb-mb'>
        <Button text='확인했어요' disabled={false} onPress={() => {navigation.navigate('RCDSelectText')}} />
        </View>
      </View>
    </BG>
}
export default RCDNoticeScreen
