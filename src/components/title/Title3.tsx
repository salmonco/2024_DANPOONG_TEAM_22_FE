import { TextProps } from '@components/title/Title1'
import { Text } from 'react-native'

const Title3 = ({ text, ...props }: Readonly<TextProps>) => (
  <Text
    {...props}
    className={props.className}
    style={{
      fontFamily: 'WantedSans-Medium',
      fontSize: 22,
      lineHeight: 22 * 1.5,
      letterSpacing: -2.5,
    }}
  >
    {text}
  </Text>
)

export default Title3
