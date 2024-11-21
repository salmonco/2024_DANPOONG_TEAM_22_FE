import { View, TouchableOpacity } from 'react-native'
import RCDBtn from '@components/atom/RCDBtn'
import Txt from '@components/atom/Txt'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RCDBtnBarProps } from '../../types/RCDBtnBarType'
import { HomeStackParamList } from '../../types/HomeStackParamList'

const TransparentButton = ({
  content,
  color,
  onPress,
}: {
  content: string
  color: string
  onPress: () => void
}) => {
  return (
    <TouchableOpacity
      className="w-auto h-auto justify-center items-center px-btn"
      onPress={onPress}
    >
      <Txt type="body1" content={content} color={color} />
    </TouchableOpacity>
  )
}


const RCDBtnBar = ({
  record,
  pause,
  play,
  upload,
  isPlaying,
  isPaused,
  isDone,
  recording,
  reflesh
}: RCDBtnBarProps) => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>()
  const justifyType = isDone?'between':'center';
  return (
    <View className={`w-full h-20 flex flex-row justify-${justifyType} items-center`}>
      {isDone && (
        <TransparentButton content="다시" color="gray_300" onPress={()=>{reflesh(); record();}} />
      )}
      <RCDBtn
        record={record}
        pause={pause}
        play={play}
        isPlaying={isPlaying}
        isPaused={isPaused}
        recording={recording}
        isDone={isDone}
      />
      {isDone && (
        <TransparentButton content="완료" color="gray_100" onPress={upload} />
      )}
    </View>
  )
}
export default RCDBtnBar
