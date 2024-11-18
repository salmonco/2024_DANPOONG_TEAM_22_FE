import { TextProps } from '@components/title/Title1'
import { Text } from 'react-native'

const Title2 = ({ text, ...props }: Readonly<TextProps>) => (
  <Text
    {...props}
    className={props.className}
    style={{
      fontFamily: 'WantedSans-SemiBold',
      fontSize: 26,
      lineHeight: 26 * 1.5,
      letterSpacing: -2.5,
    }}
  >
    {text}
  </Text>
)

export default Title2
