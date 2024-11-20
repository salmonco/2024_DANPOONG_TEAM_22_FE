import { View ,TouchableOpacity} from "react-native";
import StarPNG from '@components/atom/StarPNG'
import BG from '@components/atom/BG'
import Txt from '@components/atom/Txt'
import ShadowView from '@components/atom/ShadowView'
import BackIcon from '@assets/svgs/Back.svg'
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { HomeStackParamList } from "../../types/HomeStackParamList";

const SelectButton = ({head,sub}:{head:string,sub:string}) => {
    const navigation = useNavigation<NavigationProp<HomeStackParamList>>()
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate('RCDText')}} className='w-full h-[133] mb-[20]'>
            <ShadowView>
              <View className='pl-[33] pr-[20] py-[37] flex-row justify-between items-center'>

                <View className='flex-1 justify-between'>
                <Txt type='title4' content={head} color='primary' />
                <Txt type='body4' content={sub} color='gray_200' />
                </View>
                <BackIcon />
                </View>
            </ShadowView>
        </TouchableOpacity>
    )
}
const RCDSelectText = () => {
    return (
        <BG type='solid'>
            <View className='flex-1 px-px pt-[52] items-center'>
                <StarPNG />
                <View className='mt-[29]  mb-[52]'>
                <Txt type='title2' content={`집을 나서는 청년에게,\n배웅하는 말 한 마디`} color='white' align='center'/>
                <View className='mt-[19]'/>
                <Txt type='body3' content='마 우산챙기라' color='gray_300' align='center' />
                </View>
                <SelectButton head='준비된 문장 읽기' sub='제시되는 문장을 수정하고 녹음하기' />
                <SelectButton head='직접 작성하기' sub='하고싶은 말을 직접 작성하고 녹음하기' />
            </View>
        </BG>
    )
}

export default RCDSelectText;