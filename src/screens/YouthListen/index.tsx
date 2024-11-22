import { getVoiceFiles } from '@apis/voiceFile';
import AppBar from '@components/atom/AppBar';
import Body2 from '@components/atom/body/Body2';
import Body3 from '@components/atom/body/Body3';
import Title3 from '@components/atom/title/Title3';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { YouthStackParamList } from '@stackNav/Youth';
import { VoiceFileResponseData } from '@type/voiceFile';
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FightingIcon from '../../../assets/images/youth/emotion_fighting.svg';
import LoveIcon from '../../../assets/images/youth/emotion_love.svg';
import StarIcon from '../../../assets/images/youth/emotion_star.svg';
import ThumbIcon from '../../../assets/images/youth/emotion_thumb.svg';
import PlayIcon from '../../../assets/images/youth/play.svg';
import SendIcon from '../../../assets/images/youth/send.svg';
import SmileIcon from '../../../assets/images/youth/smile.svg';
import SmileWhiteIcon from '../../../assets/images/youth/smile_white.svg';
import StopIcon from '../../../assets/images/youth/stop.svg';
import { postComment } from '@apis/providedFile';

type YouthProps = NativeStackScreenProps<
  YouthStackParamList,
  'YouthListenScreen'
>;

export const emotions = [
  { icon: <StarIcon />, label: '고마워요', value: 'THANK_YOU' },
  { icon: <ThumbIcon />, label: '응원해요', value: 'HELPFUL' },
  { icon: <FightingIcon />, label: '화이팅', value: 'MOTIVATED' },
  { icon: <LoveIcon />, label: '사랑해요', value: 'LOVE' },
];

const YouthListenScreen = ({ route, navigation }: Readonly<YouthProps>) => {
  const { alarmId, script } = route.params;
  const [message, setMessage] = useState('');
  const [isClickedEmotion, setIsClickedEmotion] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const imageUri = null;
  const animation = useRef<LottieView>(null);
  const [status, setStatus] = useState({} as any);
  const video = useRef(null);
  const [voiceFile, setVoiceFile] = useState<VoiceFileResponseData>(
    {} as VoiceFileResponseData
  );

  useEffect(() => {
    if (status.isPlaying) {
      animation.current?.play();
    } else {
      animation.current?.pause();
    }
  }, [status.isPlaying]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardVisible(true)
    );
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () =>
      setIsKeyboardVisible(false)
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    (async () => {
      if (!alarmId) return;
      try {
        const res = await getVoiceFiles({ alarmId });
        console.log(res);
        setVoiceFile(res.result);
      } catch (error) {
        console.error(error);
        Alert.alert('오류', '음성 파일을 불러오는 중 오류가 발생했어요');
      }
    })();

    return () => {
      if (status.isPlaying) {
        video.current?.pauseAsync();
      }
    };
  }, []);

  const handleMessageSend = async () => {
    if (!voiceFile.providedFileId) return;

    try {
      await postComment({ providedFileId: voiceFile.providedFileId, message });
    } catch (error) {
      console.error(error);
      Alert.alert('오류', '편지를 보내는 중 오류가 발생했어요');
    }
  };

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    setStatus(() => status);
  };

  const handlePlayButtonClick = () => {
    if (!video.current) return;

    if (status.isPlaying) {
      video.current.pauseAsync();
    } else {
      video.current.playAsync();
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-solid">
      <Video
        ref={video}
        onLoad={() => video.current?.playAsync()}
        onError={(error) => {
          console.error('Video Error:', error);
          Alert.alert('오류', '오디오를 불러오는 중 오류가 발생했어요');
        }}
        isLooping
        source={
          voiceFile.fileUrl
            ? {
                uri: voiceFile.fileUrl,
              }
            : require('../../../assets/audios/sample.mp4')
        }
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
      {!isKeyboardVisible && (
        <View
          className="absolute left-0 bottom-0 w-full h-full"
          style={{ transform: [{ scale: 1.1 }] }}
        >
          <LottieView
            ref={animation}
            style={{
              flex: 1,
            }}
            source={require('../../../assets/lottie/voice.json')}
          />
        </View>
      )}
      <View className="flex-1">
        <AppBar
          exitCallbackFn={() => navigation.goBack()}
          className="absolute top-[6] w-full"
        />
        <View className="pt-[149] flex-1 items-center">
          <View className="relative w-[78] h-[78] justify-center items-center">
            <Image
              source={
                imageUri
                  ? { uri: imageUri }
                  : require('../../../assets/images/logo/app/app_logo_yellow.png')
              }
              className="w-[70] h-[70]"
              style={{ borderRadius: 35 }}
            />
            <View
              className="absolute left-0 bottom-0 w-[78] h-[78] border border-yellowPrimary"
              style={{ borderRadius: 39 }}
            />
          </View>

          <Body2
            text="봉사자 닉네임"
            className="text-yellowPrimary mt-[13] mb-[25] text-center"
          />
          <View>
            <Title3 text={script ?? ''} className="text-gray200 text-center" />
          </View>

          <Pressable onPress={handlePlayButtonClick} className="mt-[52]">
            {status.isPlaying ? <StopIcon /> : <PlayIcon />}
          </Pressable>

          <View
            className="absolute bottom-0 w-full"
            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          >
            {isClickedEmotion && (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                className="pl-[25] w-full mb-[27]"
              >
                {emotions.map((emotion, index) => (
                  <Pressable
                    key={emotion.label}
                    className={`bg-tabIcon py-[9] pl-[14] pr-[19] ${index === emotions.length - 1 ? 'mr-[50]' : 'mr-[10]'} flex-row items-center justify-center`}
                    style={{ borderRadius: 50 }}
                  >
                    {emotion.icon}
                    <Body3
                      text={emotion.label}
                      className="text-white ml-[10]"
                    />
                  </Pressable>
                ))}
              </ScrollView>
            )}
            <View className="h-[86] px-[25] bg-bottomNavigation flex-row items-center relative">
              <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="감사의 말을 전해보세요"
                placeholderTextColor={'#A0A0A0'}
                className={`mr-[15] text-gray100 py-[8] px-[27] font-r bg-tabIcon border ${
                  isKeyboardVisible
                    ? 'border-gray200 w-full'
                    : 'border-tabIcon w-[307]'
                }`}
                style={{ fontSize: 16, borderRadius: 100 }}
              />
              {!!message && (
                <Pressable
                  className={`absolute ${isKeyboardVisible ? 'right-[32]' : 'right-[88]'}`}
                  onPress={handleMessageSend}
                >
                  <SendIcon />
                </Pressable>
              )}
              {!isKeyboardVisible && (
                <Pressable
                  className=""
                  onPress={() => setIsClickedEmotion((prev) => !prev)}
                >
                  {isClickedEmotion ? <SmileWhiteIcon /> : <SmileIcon />}
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default YouthListenScreen;
