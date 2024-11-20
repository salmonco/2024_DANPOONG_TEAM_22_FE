import HomeScreen from "../../../screens/Home";
import RCDFeedBackScreen from "../../../screens/RCDFeedBack";
import RCDListScreen from "../../../screens/RCDList";
import RCDNoticeScreen from "../../../screens/RCDNotice";
import RCDRecordScreen from "../../../screens/RCDRecord";
import RCDTextScreen from "../../../screens/RCDText";
import RCDSelectTextScreen from "../../../screens/RCDSelectText";
//navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../types/HomeStackParamList'
import {getFocusedRouteNameFromRoute, NavigationProp, useNavigation, useRoute} from '@react-navigation/native';
import { useLayoutEffect } from "react";
import { TabNavOptions } from '../../../libs/constants/TabNavOptions'

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNav = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>()
  const route = useRoute()
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    // console.log(route,routeName)
    if (routeName === undefined || routeName === 'Main') { //Main이외의 화면에 대해 tabBar none을 설정한다.
      navigation.setOptions(TabNavOptions);
    } else {
      navigation.setOptions({...TabNavOptions,tabBarStyle:{display:'none'}});
    }
  }, [navigation, route]);
    return (
        <Stack.Navigator
        screenOptions={{
          // headerShown: false,
          headerTintColor: '#000',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RCDList"
          component={RCDListScreen}
        />
        <Stack.Screen
          name="RCDFeedBack"
          component={RCDFeedBackScreen}
        />
        <Stack.Screen
          name="RCDNotice"
          component={RCDNoticeScreen}
        />
        <Stack.Screen
          name="RCDRecord"
          component={RCDRecordScreen}
        />
        <Stack.Screen
          name="RCDText"
          component={RCDTextScreen}
        />  
        <Stack.Screen
        name="RCDSelectText"
        component={RCDSelectTextScreen}
        />
      </Stack.Navigator>
    )
}

export default HomeStackNav;