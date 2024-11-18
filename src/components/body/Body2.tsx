import { TextProps } from '@components/title/Title1'
import { Text } from 'react-native'

const Body2 = ({ text, ...props }: Readonly<TextProps>) => (
  <Text
    {...props}
    className={props.className}
    style={{
      fontFamily: 'WantedSans-Regular',
      fontSize: 20,
      lineHeight: 20 * 1.5,
      letterSpacing: -2.5,
    }}
  >
    {text}
  </Text>
)

export default Body2
