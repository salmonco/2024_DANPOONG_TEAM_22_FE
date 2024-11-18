//navigation
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNav from "../../../nav/stackNav/Home";
import LetterStackNav from "../../../nav/stackNav/Letter";
import SystemStackNav from "../../../nav/stackNav/System";
//svgs
import { TabNavOptions } from "../../../libs/constants/TabNavOptions";
const Tab = createBottomTabNavigator();

const AppTabNav = () => {
    return (
        <Tab.Navigator 
        screenOptions={TabNavOptions as BottomTabNavigationOptions}>
          <Tab.Screen name="HomeStackNav" component={HomeStackNav} />
          <Tab.Screen name="LetterStackNav" component={LetterStackNav} />
          <Tab.Screen name="SystemStackNav" component={SystemStackNav} />
        </Tab.Navigator>
    )
}

export default AppTabNav;