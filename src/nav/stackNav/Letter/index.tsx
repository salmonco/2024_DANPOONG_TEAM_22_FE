import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LetterStackParamList } from '../../../types/LetterStackParamList'
import LetterHomeScreen from '@screens/LetterHome'
const Stack = createNativeStackNavigator<LetterStackParamList>()

const LetterStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LetterHomeScreen" component={LetterHomeScreen} />
    </Stack.Navigator>
  )
}

export default LetterStackNav
