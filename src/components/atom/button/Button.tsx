import Body3 from '@components/atom/body/Body3'
import { Pressable } from 'react-native'

type ButtonProps = {
  text: string
  onPress: () => void
  disabled?: boolean
}

const Button = ({ text, onPress, disabled }: Readonly<ButtonProps>) => {
  return (
    <Pressable
      className={`h-[57] justify-center items-center flex-row ${
        disabled ? 'bg-gray300' : 'bg-yellowPrimary'
      }`}
      style={{ borderRadius: 10 }}
      onPress={onPress}
      disabled={disabled}
    >
      <Body3
        text={text}
        className={`${disabled ? 'text-white bg-gray300' : 'text-black'}`}
      />
    </Pressable>
  )
}

export default Button
