import { TextProps } from '@components/title/Title1'
import { Text } from 'react-native'

const Caption2 = ({ text, ...props }: Readonly<TextProps>) => (
  <Text
    {...props}
    className={props.className}
    style={{
      fontFamily: 'WantedSans-Medium',
      fontSize: 12,
      lineHeight: 12 * 1.5,
      letterSpacing: -2.5,
    }}
  >
    {text}
  </Text>
)

export default Caption2
