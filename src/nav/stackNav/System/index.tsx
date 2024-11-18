import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SystemStackParamList } from "../../../types/SystemStackParamList.ts";
import SystemScreen from "../../../screens/System";
const Stack = createNativeStackNavigator<SystemStackParamList>();

const SystemStackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="System" component={SystemScreen}/>
        </Stack.Navigator>
    )
}

export default SystemStackNav;