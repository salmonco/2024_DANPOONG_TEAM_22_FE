import { Pressable, View, ViewStyle } from 'react-native'
import ChevronLeftWhiteIcon from '../../../assets/images/appBar/chevron_left_white.svg'
import ExitWhiteIcon from '../../../assets/images/appBar/exit_white.svg'
import ButtonText from '@components/atom/etc/ButtonText'

type AppBarProps = {
  title?: string
  // goBack?: boolean;
  // exit?: boolean;
  goBackCallbackFn?: () => void
  exitCallbackFn?: () => void
  className?: string
  style?: ViewStyle | ViewStyle[]
}

const AppBar = ({
  title,
  goBackCallbackFn,
  exitCallbackFn,
  ...props
}: Readonly<AppBarProps>) => {
  return (
    <View
      {...props}
      className={`flex-row items-center justify-between px-[16] border-b border-b-white/5 ${props.className}`}
      style={props.style}
    >
      {goBackCallbackFn ? (
        <Pressable className="flex-1 py-[18]" onPress={goBackCallbackFn}>
          <ChevronLeftWhiteIcon />
        </Pressable>
      ) : (
        <View className="flex-1" />
      )}
      {title ? (
        <ButtonText
          text={title}
          className="text-white text-center flex-1 py-[18]"
        />
      ) : (
        <View className="flex-1" />
      )}
      {exitCallbackFn ? (
        <Pressable
          className="flex-1 py-[18] flex-row justify-end"
          onPress={exitCallbackFn}
        >
          <ExitWhiteIcon />
        </Pressable>
      ) : (
        <View className="flex-1" />
      )}
    </View>
  )
}

export default AppBar
