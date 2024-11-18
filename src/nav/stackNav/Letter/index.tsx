import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LetterStackParamList } from "../../../types/LetterStackParamList";
import LetterScreen from "../../../screens/Letter";
const Stack = createNativeStackNavigator<LetterStackParamList>();

const LetterStackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Letter" component={LetterScreen}/>
        </Stack.Navigator>
    )
}

export default LetterStackNav;