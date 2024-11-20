import { useState, useEffect } from 'react'
//navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './src/types/RootStackParamList'
//storybook
import Constants from 'expo-constants'
//font
import * as Font from 'expo-font'
//Tab
import AppTabNav from './src/nav/tabNav/App'
import AuthStackNav from '@stackNav/Auth'
import YouthStackNav from '@stackNav/Youth'
//

//font를 가져오는 함수
const fetchFonts = () => {
  return Font.loadAsync({
    'WantedSans-Bold': require('./assets/fonts/WantedSans-Bold.otf'),
    'WantedSans-SemiBold': require('./assets/fonts/WantedSans-SemiBold.otf'),
    'WantedSans-Regular': require('./assets/fonts/WantedSans-Regular.otf'),
    'WantedSans-Medium': require('./assets/fonts/WantedSans-Medium.otf'),
    'Voltaire-Regular': require('./assets/fonts/Voltaire-Regular.ttf'),
    'LeeSeoyun-Regular': require('./assets/fonts/LeeSeoyun-Regular.ttf'),
  })
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    const loadFonts = async () => {
      await fetchFonts()
      setFontsLoaded(true)
    }
    loadFonts()
  }, [])

  if (!fontsLoaded) {
    // 폰트가 로드되기 전에는 아무것도 렌더링하지 않음
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="Splash" component={Splash}/> */}
        {/* <Stack.Screen name="AuthStackNav" component={AuthStackNav} /> */}
        <Stack.Screen name="YouthStackNav" component={YouthStackNav} />
        {/* <Stack.Screen name="AppTabNav" component={AppTabNav} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

let AppEntryPoint = App

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default
}

export default AppEntryPoint
