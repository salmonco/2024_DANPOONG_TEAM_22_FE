import { TextProps } from '@components/title/Title1'
import { Text } from 'react-native'

const Body4 = ({ text, className, ...props }: Readonly<TextProps>) => {
  const size = 16
  console.log(props, className)
  return (
    <Text
      {...props}
      className={className}
      style={[
        {
          fontFamily: 'WantedSans-Regular',
          fontSize: size,
          lineHeight: size * 1.5,
          letterSpacing: size * -0.025,
        },
        props.style,
      ]}
    >
      {text}
    </Text>
  )
}

export default Body4
