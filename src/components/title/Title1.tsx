import { Text } from 'react-native'

export type TextProps = {
  text: string
  className?: string
}

const Title1 = ({ text, ...props }: Readonly<TextProps>) => (
  <Text
    {...props}
    className={props.className}
    style={{
      fontFamily: 'WantedSans-SemiBold',
      fontSize: 30,
      lineHeight: 30 * 1.5,
      letterSpacing: -2.5,
    }}
  >
    {text}
  </Text>
)

export default Title1
