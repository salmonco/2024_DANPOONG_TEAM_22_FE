import { TextProps } from '@components/title/Title1'
import { Text } from 'react-native'

const Caption3 = ({ text, ...props }: Readonly<TextProps>) => {
  const size = 10

  return (
    <Text
      {...props}
      className={props.className}
      style={{
        fontFamily: 'WantedSans-Regular',
        fontSize: size,
        lineHeight: size * 1.5,
        letterSpacing: size * -0.025,
      }}
    >
      {text}
    </Text>
  )
}

export default Caption3
