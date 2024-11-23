import Body3 from '@components/atom/body/Body3';
import Title2 from '@components/atom/title/Title2';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoadingScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View className="mb-[65]"></View>
      <Body3 text="잠시만 기다려주세요" className="text-gray300 mb-[28]" />
      <Title2 text={`따스한 마음을 담은\n목소리를 준비 중이에요.`} />
    </SafeAreaView>
  );
};

export default LoadingScreen;
