import { TextInput, TouchableOpacity, View } from 'react-native'
import BG from '@components/atom/BG'
import StarPNG from '@components/atom/StarPNG'
import Txt from '@components/atom/Txt'
import Button from '@components/atom/button/Button'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import ShadowView from '@components/atom/ShadowView'
import { useState, useRef } from 'react'
import { HomeStackParamList } from '../../types/HomeStackParamList'
const RCDTextScreen = () => {
  const [text, setText] = useState('')
  const onChangeText = (text:string) => {
    setText(text)
  }
  const textInputRef = useRef<TextInput>(null);
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>()

  return (
    <BG type="solid">
      {/* frame */}
      <View
        className="w-full h-full px-px items-center"
        style={{ paddingTop: `${52 / 412 * 100}%` }}
      >
        {/* image section*/}
        <View
          style={{
            marginBottom: `${(29 / 412) * 100}%`,
            height: `${(24 / 807) * 100}%`,
            width: `${(24 / 352) * 100}%`,
          }}
        >
          <StarPNG />
        </View>
        {/* header section*/}
        <View
          className="w-full h-auto items-center"
          style={{ marginBottom: `${(51/ 412) * 100}%` }}
        >
          <Txt
            content={`비가 오는 날 외출하는\n청년을 위한 한 마디`}
            color="white"
            type="title2"
            align="center"
          />
        </View>
        {/* text input section*/}
          <View
            style={{
                width: '100%',
                flex:1,
                marginBottom: `${51 / 412 * 100}%`,
              }}>
        <ShadowView>
        <TextInput
          ref={textInputRef}
          onChangeText={onChangeText}
          value={text}
          className="w-full h-auto p-[10] text-white"
          placeholder="15초 동안 녹음할 말을 작성해주세요"
          placeholderTextColor='#a0a0a0'
          autoCapitalize="none"
          // caretHidden={true}
          cursorColor='#fafafa'
          multiline
          textAlign='left'
          // maxLength={30}
          onFocus={()=>{}}
        />
        <TouchableOpacity
          onPress={() => {
            if (textInputRef.current) {
              textInputRef.current.focus();
            }
          }}
          className='flex-1'
        />
        </ShadowView>
        </View>
        {/* button section*/}
        <View className='w-full'
        style={{marginBottom:`${78/807*100}%`}}>
        <Button
          text="녹음하기"
          onPress={() => {
            navigation.navigate('RCDRecord' )
          }}
          disabled={text.length===0}
        />
        </View>
      </View>
    </BG>
  )
}
export default RCDTextScreen
