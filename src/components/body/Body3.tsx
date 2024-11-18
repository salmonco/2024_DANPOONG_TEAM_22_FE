import { TextProps } from '@components/title/Title1'
import { Text } from 'react-native'

const Body3 = ({ text, ...props }: Readonly<TextProps>) => (
  <Text
    {...props}
    className={props.className}
    style={{
      fontFamily: 'WantedSans-Regular',
      fontSize: 18,
      lineHeight: 18 * 1.5,
      letterSpacing: -2.5,
    }}
  >
    {text}
  </Text>
)

export default Body3
