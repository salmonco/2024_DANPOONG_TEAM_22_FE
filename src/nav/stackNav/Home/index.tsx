import HomeScreen from "../../../screens/Home";
import RCDFeedBackScreen from '../../../screens/RCDFeedBack';
import RCDListScreen from '../../../screens/RCDList';
import RCDNoticeScreen from '../../../screens/RCDNotice';   
import RCDRecordScreen from '../../../screens/RCDRecord';
import RCDTextScreen from '../../../screens/RCDText';
import RCDSelectTextScreen from '../../../screens/RCDSelectText';
//navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../types/HomeStackParamList'


const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNav = () => {
  
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
          options={{title: 'Welcome',headerShown: false}}
        />
        <Stack.Screen
          name="RCDList"
          component={RCDListScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="RCDFeedBack"
          component={RCDFeedBackScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="RCDNotice"
          component={RCDNoticeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="RCDRecord"
          component={RCDRecordScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="RCDText"
          component={RCDTextScreen}
          options={{title: 'Welcome'}}
        />  
        <Stack.Screen
        name="RCDSelectText"
        component={RCDSelectTextScreen}
        options={{}}
        />

      </Stack.Navigator>
    )
}

export default HomeStackNav;