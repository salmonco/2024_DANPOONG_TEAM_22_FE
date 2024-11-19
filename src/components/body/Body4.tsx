import { TextProps } from '@components/title/Title1'
import { Text } from 'react-native'

const Body4 = ({ text, ...props }: Readonly<TextProps>) => {
  const size = 16

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

export default Body4
