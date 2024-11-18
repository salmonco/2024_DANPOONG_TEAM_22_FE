import { TextProps } from '@components/title/Title1'
import { Text } from 'react-native'

const Caption1 = ({ text, ...props }: Readonly<TextProps>) => (
  <Text
    {...props}
    className={props.className}
    style={{
      fontFamily: 'WantedSans-Medium',
      fontSize: 14,
      lineHeight: 14 * 1.5,
      letterSpacing: -2.5,
    }}
  >
    {text}
  </Text>
)

export default Caption1
