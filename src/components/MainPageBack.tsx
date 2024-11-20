import { COLORS } from '@constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'

type MainPageBackProps = {
  children?: React.JSX.Element
}

const MainPageBack = ({ children }: Readonly<MainPageBackProps>) => {
  return (
    <LinearGradient
      colors={[COLORS.bgMainPageBack100, COLORS.bgMainPageBack200]}
      className="flex-1 w-full"
    >
      {children}
    </LinearGradient>
  )
}

export default MainPageBack
