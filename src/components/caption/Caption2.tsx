import { TextProps } from '@components/title/Title1'
import { Text } from 'react-native'

const Caption2 = ({ text, ...props }: Readonly<TextProps>) => {
  const size = 12

  return (
    <Text
      {...props}
      className={props.className}
      style={{
        fontFamily: 'WantedSans-Medium',
        fontSize: size,
        lineHeight: size * 1.5,
        letterSpacing: size * -0.025,
      }}
    >
      {text}
    </Text>
  )
}

export default Caption2
