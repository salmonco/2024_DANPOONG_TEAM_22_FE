import {View,Text}from 'react-native'
import BG from '@components/atom/BG'
import Txt from '@components/atom/Txt'
import BackIcon from '@assets/svgs/Back.svg'

const SystemScreen =()=>{
    return (<BG type="main">
        <View className="flex-1 items-center pt-[35] px-px">
        <SystemButton title="내 계정" sub="로그아웃 및 회원탈퇴하기"/>
        <SystemButton title="이용약관" sub="이용약관 확인하기"/>
        <SystemButton title="개인정보정책" sub="개인정보정책 확인하기"/>
        </View>
        </BG>)

}
export default SystemScreen;


const SystemButton =({title,sub}:{title:string,sub:string})=>{
    return (<View className="w-full h-[92] flex-row justify-between items-center">
        <View className="flex-1">
            <Txt type="title4" content={title} color="white"/>
            <View className="mt-[4.9]"/>
            <Txt type="caption1" content={sub} color="gray_200"/>
        </View>
        <BackIcon/>
        </View>)
}
